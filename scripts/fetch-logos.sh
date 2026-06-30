#!/usr/bin/env bash
# Download REAL company logos into src/assets/logos/ using curl.
# Run from the project root on a normal network (Git Bash on Windows is fine):
#
#     bash scripts/fetch-logos.sh      (or: npm run logos)
#
# Source: Wikidata "logo image" (P154) -> the official logo file on Wikimedia
# Commons, downloaded at 400px wide. Entities that are bands / people / albums /
# disambiguation pages are skipped so we don't grab the wrong "logo".
# Brands without a usable logo stay as a styled text fallback in the UI.
#
# Rows: "name|slug|wikidata search term". Keep slugs in sync with src/data/brands.js.

set -u
OUT="src/assets/logos"
mkdir -p "$OUT"
WD="https://www.wikidata.org/w/api.php"
NAP=0.5   # pause between API calls to stay under rate limits
UA="apx-energy-site logo fetcher (https://www.apxenergygroup.com; contact enquiry@apxenergygroup.com)"

# GET with the required Wikimedia User-Agent + up to 3 retries with backoff (handles 429).
api() {
  local url="$1" out tries=0
  while [ "$tries" -lt 3 ]; do
    out=$(curl -sS --max-time 25 -A "$UA" "$url" 2>/dev/null)
    if [ -n "$out" ] && ! echo "$out" | grep -qi 'too many requests\|maxlag\|ratelimit'; then
      printf '%s' "$out"; sleep "$NAP"; return 0
    fi
    tries=$((tries+1)); sleep $((tries*2))
  done
  printf '%s' "$out"; sleep "$NAP"
}
enc() { echo "$1" | sed 's/ /%20/g'; }

# Pick the first search hit that has a logo and is NOT a band/human/album/film/disambig/surname.
pick() {
  local term="$1" q p31 logo
  local qids
  qids=$(api "$WD?action=wbsearchentities&search=$(enc "$term")&language=en&format=json&type=item&limit=7" \
           | grep -oE '"id":"Q[0-9]+"' | grep -oE 'Q[0-9]+')
  for q in $qids; do
    logo=$(api "$WD?action=wbgetclaims&entity=$q&property=P154&format=json" \
             | grep -oE '"value":"[^"]+"' | head -1 | sed 's/"value":"//;s/"$//')
    [ -z "$logo" ] && continue
    p31=$(api "$WD?action=wbgetclaims&entity=$q&property=P31&format=json" | grep -oE '"numeric-id":[0-9]+')
    echo "$p31" | grep -qE ':(215380|5|482994|11424|4167410|101352|13406463|105543609|7725634|571)$' && continue
    echo "$logo"; return
  done
  echo ""
}

brands=(
  # --- Fortune 500 client wall ---
  "ABB|abb|ABB"
  "Samsung E&A|samsung-ea|Samsung E&A"
  "BP|bp|BP plc"
  "BASF|basf|BASF"
  "TBEA|tbea|TBEA"
  "JinkoSolar|jinkosolar|JinkoSolar"
  "Linde|linde|Linde plc"
  "HeidelbergCement|heidelberg|Heidelberg Materials"
  "BYD|byd|BYD"
  "JA Solar|ja-solar|JA Solar"
  "LONGi|longi|LONGi Green Energy"
  "Sungrow|sungrow|Sungrow Power Supply"
  "Canadian Solar|canadian-solar|Canadian Solar"
  "Baosteel|baosteel|Baosteel"
  "Konka|konka|Konka Group"
  "REPT Battero|rept-battero|REPT Battero"
  "Sinopec|sinopec|Sinopec"
  "CNPC|cnpc|China National Petroleum Corporation"
  "GCL|gcl|GCL Technology"
  "Sinoma / CNBM|cnbm|China National Building Material"
  "CNOOC|cnooc|CNOOC"
  "China Guodian|china-guodian|China Guodian Corporation"
  "PipeChina|pipechina|PipeChina"
  "MCC|mcc|Metallurgical Corporation of China"
  "China Resources|china-resources|China Resources"
  "Tianjin Jinpeng|tianjin-jinpeng|Tianjin Jinpeng"
  "Shenhua Group|shenhua|Shenhua Group"
  "SDIC|sdic|State Development and Investment Corporation"
  # --- Certifications & standards ---
  "TÜV CE|tuv|TÜV Rheinland"
  "ISO 13485|iso|International Organization for Standardization"
  "IEC Member|iec|International Electrotechnical Commission"
  "IEEE Member|ieee|IEEE"
  "CMMI|cmmi|Capability Maturity Model Integration"
  "SGS|sgs|SGS S.A."
  "CNAS|cnas|China National Accreditation Service for Conformity Assessment"
)

saved=0; missed=0
for row in "${brands[@]}"; do
  IFS='|' read -r name slug term <<< "$row"
  dest="$OUT/$slug.png"
  if [ -f "$dest" ]; then printf '  %-20s exists\n' "$name"; continue; fi

  logo=$(pick "$term")
  if [ -z "$logo" ]; then printf '  %-20s miss (no logo)\n' "$name"; missed=$((missed+1)); continue; fi

  code=$(curl -sSL --max-time 25 -A "$UA" -o "$dest" -w '%{http_code}' \
    "https://commons.wikimedia.org/wiki/Special:FilePath/$(enc "$logo")?width=400" 2>/dev/null || echo 000)
  size=$( [ -f "$dest" ] && wc -c < "$dest" || echo 0 )
  if [ "$code" = "200" ] && [ "$size" -gt 1000 ]; then
    printf '  %-20s saved (%sb)  %s\n' "$name" "$size" "$logo"; saved=$((saved+1))
  else
    rm -f "$dest"; printf '  %-20s miss (%s)\n' "$name" "$code"; missed=$((missed+1))
  fi
  sleep 0.3
done

echo
echo "Done. saved=$saved  missed=$missed"
echo "Missing brands stay as text fallback in the UI."
