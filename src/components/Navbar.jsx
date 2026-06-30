import { useState, useEffect } from 'react'
import Logo from './Logo'

// Ordered to match the page's scroll order so the active underline
// progresses left-to-right as you scroll down.
const links = [
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#sanhe' },
  { label: 'Projects', href: '#projects' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Why APX', href: '#why-apx' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  // Scroll-spy: highlight the link for the section currently at the top of the
  // viewport (just under the navbar), so the underline tracks the section start.
  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    // Activation line sits just below the navbar landing zone (scroll-margin-top: 6.5rem)
    const LINE = 120

    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Pick the section whose top is closest to (at or just above) the line —
      // i.e. the one currently occupying the top of the viewport. Order-independent,
      // so it's correct even when the nav order differs from the document order.
      let current = ''
      let bestTop = -Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= LINE && top > bestTop) {
          bestTop = top
          current = id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Logo className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => {
            const isActive = active === l.href.slice(1)
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative py-1 text-sm font-semibold transition-colors ${
                  isActive ? 'text-brand-700' : 'text-ink-700 hover:text-brand-700'
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-brand-700 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            )
          })}
          <a
            href="#contact"
            className="ml-2 bg-brand-700 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-brand-800 transition-colors"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-ink-700 hover:bg-brand-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-brand-100 px-4 pb-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-semibold text-ink-700 border-b border-brand-100 last:border-0 hover:text-brand-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-brand-700 text-white text-sm font-bold px-4 py-3 rounded-lg"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  )
}
