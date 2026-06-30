// Minimal, professional line-icon set (Lucide-style, 24x24, currentColor stroke).
// Keeps the whole site on one restrained visual language instead of mixed emoji.

const paths = {
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16" />
      <path d="M9 8h0M12 8h0M15 8h0M9 12h0M12 12h0M15 12h0" />
      <path d="M10 21v-4h4v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </>
  ),
  factory: (
    <>
      <path d="M2 20h20" />
      <path d="M4 20V11l5 3.5V11l5 3.5V11l5 3.5V20" />
      <path d="M4 11V6l2-2 2 2v5" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  flame: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  ),
  mountain: <path d="M8 3l4 8 4-4 5 14H3L8 3z" />,
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  droplet: <path d="M12 2.7 17.66 8.36a8 8 0 1 1-11.31 0z" />,
  zap: <path d="M13 2 4 13h7l-1 9 9-11h-7l1-9z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  wind: (
    <>
      <path d="M17.7 7.7A2.5 2.5 0 1 1 19.5 12H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path d="M22 11v2" />
      <path d="M6 10v4M9.5 10v4" />
    </>
  ),
  activity: <path d="M22 12h-4l-3 8L9 4l-3 8H2" />,
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15v2M12 11v6M17 7v10" />
    </>
  ),
  key: (
    <>
      <circle cx="15.5" cy="8.5" r="5.5" />
      <path d="M11.6 12.4 3 21" />
      <path d="M6 18l2 2M3.5 15.5 6 18" />
    </>
  ),
  hardhat: (
    <>
      <path d="M3 18h18" />
      <path d="M4 18v-2a8 8 0 0 1 16 0v2" />
      <path d="M10 7V5a2 2 0 0 1 4 0v2" />
    </>
  ),
  trending: (
    <>
      <path d="M16 7h6v6" />
      <path d="M22 7l-8.5 8.5-5-5L2 17" />
    </>
  ),
  ruler: (
    <>
      <path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z" />
      <path d="M7.5 10.5l2 2M10.5 7.5l2 2M13.5 4.5l2 2" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12l2.5 2.5 4.5-4.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2.5 6.5 12 13l9.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.75 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}
