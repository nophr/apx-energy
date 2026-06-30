import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Technology', href: '#sanhe' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why APX', href: '#why-apx' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
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
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-700 hover:text-brand-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
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
