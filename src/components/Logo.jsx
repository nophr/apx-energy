export default function Logo({ className = '', textColor = '#1C5E29' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="APX Energy Solutions"
    >
      <defs>
        <linearGradient id="apxOrbit" x1="14" y1="48" x2="120" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E8B3A" />
          <stop offset="1" stopColor="#4CAF50" />
        </linearGradient>
      </defs>

      {/* Orbit ring sweeping up to the growth arrow */}
      <path
        d="M14 38 C 26 53 54 55 78 49 C 100 43 116 28 120 13"
        stroke="url(#apxOrbit)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Back of the orbit (upper-left) */}
      <path
        d="M20 28 C 24 17 40 9 58 8"
        stroke="url(#apxOrbit)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Growth arrow head */}
      <path d="M112 8 L 128 2 L 121 18 Z" fill="url(#apxOrbit)" />

      {/* APX wordmark */}
      <text
        x="64"
        y="42"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontWeight="800"
        fontSize="42"
        letterSpacing="-2"
        fill={textColor}
      >
        APX
      </text>
    </svg>
  )
}
