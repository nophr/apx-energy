import Logo from './Logo'

const certs = ['IEC Member', 'IEEE Member', 'CE', 'CQC', 'SGS', 'CNAS']

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Logo className="h-12 w-auto mb-4" textColor="#ffffff" />
            <p className="text-sm leading-relaxed text-brand-400/80 max-w-xs">
              Authorised sole international distributor for Sanhe Power Tech (Shenzhen) Co., Ltd.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['About', '#about'],
                ['Technology Partner', '#sanhe'],
                ['Solutions', '#solutions'],
                ['Projects', '#projects'],
                ['Why APX', '#why-apx'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:enquiry@apxenergygroup.com" className="hover:text-white transition-colors break-all">
                  enquiry@apxenergygroup.com
                </a>
              </li>
              <li>
                <a href="https://www.apxenergygroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.apxenergygroup.com
                </a>
              </li>
              <li className="text-brand-400/70">Australia · Cambodia · Vietnam</li>
            </ul>
          </div>
        </div>

        {/* Certs */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <div className="flex flex-wrap gap-2">
            {certs.map(c => (
              <span key={c} className="border border-white/15 text-white/50 text-xs px-3 py-1 rounded-full">
                {c}
              </span>
            ))}
            <span className="border border-white/15 text-white/50 text-xs px-3 py-1 rounded-full">
              100+ Patents & Standards
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-brand-400/60">
          <p>© 2026 APX Energy Solutions · All rights reserved.</p>
          <p>Technology Partner: Sanhe Power Tech (Shenzhen) Co., Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
