import Icon from './Icon'

const solutions = [
  {
    category: 'Large Scale',
    title: 'Solar Power Plants',
    icon: 'sun',
    items: ['Ground-mount PV', 'Floating Solar (FPV)', 'Rooftop Commercial', 'Agri-voltaics', 'Grid-tie Systems'],
  },
  {
    category: 'Large Scale',
    title: 'Wind Energy Projects',
    icon: 'wind',
    items: ['Onshore Wind Turbines', 'Small Wind Systems', 'Wind + Solar Hybrid', 'Wind + BESS'],
  },
  {
    category: 'Storage',
    title: 'Battery Energy Storage',
    icon: 'battery',
    items: ['Utility-scale BESS', 'C&I ESS Cabinets', 'Prefab Containers', 'Residential Batteries', 'Standalone BESS'],
  },
  {
    category: 'Systems',
    title: 'Microgrid & New Energy',
    icon: 'zap',
    items: ['Zero-Carbon Microgrids', 'Island Microgrids', 'Solar-BESS-Diesel Hybrid', 'Agri-Solar Microgrids', 'Green Hydrogen Production'],
  },
  {
    category: 'Power Quality',
    title: 'Power Quality & Grid',
    icon: 'activity',
    items: ['APF / SVG / DVR / HPF', 'Harmonic Filtering', 'Power Factor Correction', 'LV & MV (up to 35 kV)', 'Voltage Stabilisation'],
  },
  {
    category: 'Smart Energy',
    title: 'Energy Management',
    icon: 'chart',
    items: ['EMOS Platform', 'Demand Response', 'Carbon Tracking', 'Remote Monitoring', 'Dual-Carbon Strategy'],
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="bg-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-700 text-xs font-bold tracking-widest uppercase mb-3">
          Solutions Portfolio
        </p>
        <h2 className="text-brand-950 text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-xl">
          Full Spectrum of Renewable Energy &amp; Power Systems
        </h2>
        <p className="text-ink-700 text-base leading-relaxed max-w-2xl mb-12">
          Every technology in our portfolio is backed by Sanhe Power Tech's two decades of
          manufacturing excellence and deployed globally across the most demanding industrial sectors.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map(s => (
            <div key={s.title} className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Icon name={s.icon} className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-brand-700 bg-brand-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {s.category}
                </span>
              </div>
              <h3 className="text-brand-950 font-bold text-base mb-3">{s.title}</h3>
              <ul className="space-y-1.5">
                {s.items.map(item => (
                  <li key={item} className="text-ink-700 text-sm flex items-start gap-2">
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
