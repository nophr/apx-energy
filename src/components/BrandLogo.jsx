// Renders a brand logo if a matching file exists in src/assets/logos,
// otherwise falls back to the brand name as text. Resolved at build time,
// so missing logos never trigger 404 requests.

const modules = import.meta.glob('../assets/logos/*.{svg,png,webp,jpg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const logoBySlug = {}
for (const path in modules) {
  const file = path.split('/').pop()
  const slug = file.replace(/\.(svg|png|webp|jpg)$/, '')
  logoBySlug[slug] = modules[path]
}

export default function BrandLogo({ name, slug, imgClassName = '', textClassName = '' }) {
  const src = slug ? logoBySlug[slug] : null
  if (!src) return <span className={textClassName}>{name}</span>
  return <img src={src} alt={name} loading="lazy" className={imgClassName} />
}
