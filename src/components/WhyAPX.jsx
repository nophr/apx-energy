import Icon from './Icon'

const reasons = [
  {
    icon: 'key',
    title: 'Exclusive Distribution Rights',
    body: 'Sole international distribution rights for Sanhe Power Tech\'s full portfolio — direct access without intermediaries.',
  },
  {
    icon: 'hardhat',
    title: 'Full EPC Turnkey Capability',
    body: 'Feasibility through construction, commissioning, and O&M — one accountable partner at any project scale.',
  },
  {
    icon: 'trending',
    title: 'Fast-Growing, Experience-Backed',
    body: 'Rapid regional growth underpinned by Sanhe\'s 20+ years of completed projects at identical scale worldwide.',
  },
  {
    icon: 'ruler',
    title: 'Any Scale, Any Application',
    body: 'From 291 kWp hotel systems to 300 MW solar farms — the same engineering rigour across every engagement.',
  },
  {
    icon: 'leaf',
    title: 'Renewable-First Approach',
    body: 'Every project prioritises clean energy outcomes — minimising carbon emissions and maximising self-consumption.',
  },
  {
    icon: 'check',
    title: 'International Standards Compliance',
    body: 'IEC & IEEE member, CE, CQC, SGS, GOST, CNAS — meeting grid and regulatory requirements across all markets.',
  },
]

export default function WhyAPX() {
  return (
    <section id="why-apx" className="bg-brand-950 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-600 text-xs font-bold tracking-widest uppercase mb-3">
          Why Choose APX
        </p>
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-xl">
          Why APX Energy Solutions
        </h2>
        <p className="text-brand-200/70 text-base leading-relaxed max-w-2xl mb-12">
          We combine exclusive technology access, full-cycle project capability, and deep regional
          market knowledge to deliver clean energy outcomes at any scale.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(r => (
            <div key={r.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-brand-600/15 text-brand-600 flex items-center justify-center mb-4">
                <Icon name={r.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
              <p className="text-brand-400 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
