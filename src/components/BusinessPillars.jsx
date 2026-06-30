import Icon from './Icon'

const pillars = [
  {
    icon: 'leaf',
    title: 'Renewable Energy Projects',
    color: 'bg-brand-100',
    items: [
      'Utility-scale solar power plants',
      'Wind turbine projects',
      'Floating solar (FPV) systems',
      'Hybrid solar + wind + storage',
      'Zero-carbon microgrid systems',
      'Green hydrogen production',
    ],
  },
  {
    icon: 'factory',
    title: 'Commercial & Industrial',
    color: 'bg-teal/10',
    items: [
      'C&I solar + storage systems',
      'SEZ & industrial park microgrids',
      'Agri-solar systems',
      'Demand management & peak shaving',
      'Behind-the-meter BESS',
      'Smart energy management platforms',
    ],
  },
  {
    icon: 'home',
    title: 'Residential Energy Solutions',
    color: 'bg-gold/10',
    items: [
      'Rooftop solar PV systems',
      'Home battery storage (BESS)',
      'Hybrid inverter systems',
      'Off-grid & stackable battery packs',
      'Residential EV chargers',
      'Solar monitoring & management',
    ],
  },
]

export default function BusinessPillars() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-700 text-xs font-bold tracking-widest uppercase mb-3">
          Core Business Focus
        </p>
        <h2 className="text-brand-950 text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-xl">
          APX Three Pillars of Delivery
        </h2>
        <p className="text-ink-700 text-base leading-relaxed max-w-2xl mb-12">
          From individual households to utility-scale developers, APX delivers complete
          energy solutions across three verticals — with the same engineering rigour at every scale.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map(p => (
            <div key={p.title} className={`${p.color} rounded-2xl p-6 border border-brand-200`}>
              <div className="w-12 h-12 rounded-xl bg-white/70 text-brand-700 flex items-center justify-center mb-4">
                <Icon name={p.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-brand-950 text-lg font-bold mb-4">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                    <span className="text-brand-700 mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
