import Icon from './Icon'

const pillars = [
  {
    icon: 'shield',
    title: 'De-risked Technology',
    body: "Sanhe's products have been deployed across 4,000+ projects in the world's most demanding industrial environments — cement plants, oil refineries, offshore platforms, semiconductor fabrication facilities, and national power grids. APX brings proven technology to market, not experimental products.",
  },
  {
    icon: 'building',
    title: 'Fortune 500 Validated',
    body: 'Over 30 Fortune 500 clients including CNPC, Sinopec, CNOOC, BYD, Samsung E&A, ABB, BP, BASF, Linde, Sungrow, LONGi, and Canadian Solar. These companies conduct rigorous vendor qualification — Sanhe passed.',
  },
  {
    icon: 'globe',
    title: 'Globally Proven',
    body: 'Projects span 40+ countries across Asia, Africa, the Middle East, Europe, and the Americas. The same technology APX brings to Australia, Cambodia, and Vietnam has been operating reliably at scale for two decades.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-700 text-xs font-bold tracking-widest uppercase mb-3">
          Who We Are
        </p>
        <h2 className="text-brand-950 text-3xl sm:text-4xl font-extrabold leading-tight mb-6 max-w-2xl">
          From Rooftop to Power Plant
        </h2>
        <p className="text-ink-700 text-base sm:text-lg leading-relaxed max-w-3xl mb-4">
          APX Energy Solutions is a full-spectrum renewable energy company and the exclusive
          sole international distributor for Sanhe Power Tech's advanced power quality and
          clean energy technologies across Australia, Cambodia, and Vietnam.
        </p>
        <p className="text-ink-700 text-base sm:text-lg leading-relaxed max-w-3xl mb-4">
          As a complete energy solutions provider, APX manages entire project lifecycles —
          from residential solar and home battery systems to large-scale solar power plants,
          wind farms, utility-scale battery energy storage systems (BESS), and zero-carbon
          microgrids. Clients receive a single point of accountability across all project phases.
        </p>
        <p className="text-ink-700 text-base sm:text-lg leading-relaxed max-w-3xl mb-14">
          APX is fast-growing at the forefront of Asia-Pacific's energy transition — bringing
          together regional market access, direct distribution rights, and the full engineering
          depth of our global technology partner, Sanhe Power Tech.
        </p>

        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 text-xs font-bold tracking-wide uppercase px-4 py-2 rounded-full mb-12">
          Exclusive distribution rights · Australia, Cambodia &amp; Vietnam · Engineering solutions at any scale
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map(p => (
            <div key={p.title} className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
                <Icon name={p.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-brand-950 text-base font-bold mb-3">{p.title}</h3>
              <p className="text-ink-700 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
