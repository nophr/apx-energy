import BrandLogo from './BrandLogo'
import { certs } from '../data/brands'

const stats = [
  { num: '4,000+', label: 'Completed Projects' },
  { num: '40+',    label: 'Countries' },
  { num: '30+',    label: 'Fortune 500 Clients' },
  { num: '20+',    label: 'Years in Operation' },
  { num: '100+',   label: 'Patents, Copyrights & Standards' },
  { num: '10%+',   label: 'Annual Revenue Reinvested in R&D' },
  { num: '38%',    label: 'of All Staff Are R&D Personnel' },
  { num: '#1',     label: 'MV Power Quality Ranking (China)' },
]

export default function SanheStats() {
  return (
    <section id="sanhe" className="bg-brand-950 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-600 text-xs font-bold tracking-widest uppercase mb-3">
          Our Technology Partner
        </p>
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-3 max-w-xl">
          Sanhe Power Tech
        </h2>
        <p className="text-brand-400 text-sm font-semibold mb-2">
          Founded 2002 · Shenzhen, China
        </p>
        <p className="text-brand-200/70 text-sm mb-12 max-w-2xl leading-relaxed">
          National High-Tech Enterprise · National 'Little Giant' Enterprise · IEC &amp; IEEE Member · CMMI Certified
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map(s => (
            <div key={s.num} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="text-brand-600 text-3xl sm:text-4xl font-extrabold leading-none mb-2">
                {s.num}
              </div>
              <div className="text-brand-400 text-xs font-medium leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-brand-400 text-xs font-bold tracking-widest uppercase mb-4">
            Certifications &amp; Standards
          </p>
          <div className="flex flex-wrap gap-2">
            {certs.map(c => (
              <span
                key={c.slug}
                className="bg-white rounded-lg h-9 px-3 flex items-center justify-center"
              >
                <BrandLogo
                  name={c.name}
                  slug={c.slug}
                  imgClassName="max-h-5 max-w-[96px] object-contain"
                  textClassName="text-ink-700 text-xs font-bold"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
