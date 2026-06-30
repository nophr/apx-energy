const projects = [
  {
    country: 'Vietnam',
    type: 'Solar + ESS · EPC',
    title: '300 MW Solar + 30 MWh ESS',
    stats: [{ label: 'Solar PV', value: '300 MW' }, { label: 'Energy Storage', value: '30 MWh' }],
    status: 'In Development',
  },
  {
    country: 'Vietnam',
    type: 'Standalone BESS · Grid',
    title: '100 MW / 200 MWh BESS — Lang Son',
    stats: [{ label: 'Power', value: '100 MW' }, { label: 'Capacity', value: '200 MWh' }],
    status: 'In Development',
  },
  {
    country: 'Vietnam',
    type: 'Floating Solar + ESS',
    title: '30 MW Floating Solar + 3 MWh ESS',
    stats: [{ label: 'Floating PV', value: '30 MW' }, { label: 'ESS', value: '3 MWh' }],
    status: 'In Development',
  },
  {
    country: 'Vietnam',
    type: 'Wind Energy · EPC',
    title: '42 MW Wind Turbine — Pleiku',
    stats: [{ label: 'Wind Capacity', value: '42 MW' }, { label: 'Type', value: 'Onshore' }],
    status: 'In Development',
  },
  {
    country: 'Vietnam',
    type: 'Standalone BESS',
    title: '100 MW / 200 MWh BESS — Pleiku',
    stats: [{ label: 'Power', value: '100 MW' }, { label: 'Capacity', value: '200 MWh' }],
    status: 'In Development',
  },
  {
    country: 'Cambodia',
    type: 'C&I · Solar + ESS',
    title: '1,056 kWp Solar PV + 1,205 kWh ESS',
    stats: [{ label: 'Solar PV', value: '1,056 kWp' }, { label: 'ESS', value: '1,205 kWh' }],
    status: 'In Development',
  },
  {
    country: 'Cambodia',
    type: 'Microgrid · Agri-Solar',
    title: '3 MW Solar + 10 MW ESS Microgrid — Kandal',
    stats: [{ label: 'Solar PV', value: '3 MW' }, { label: 'ESS', value: '10 MW' }],
    status: 'In Development',
  },
  {
    country: 'Cambodia',
    type: 'Hospitality · Solar + ESS',
    title: '291 kWp Solar + 522 kWh ESS — Koh Kong',
    stats: [{ label: 'Solar PV', value: '291 kWp' }, { label: 'ESS', value: '522 kWh' }],
    status: 'In Development',
  },
  {
    country: 'Cambodia',
    type: 'SEZ Industrial · Solar + ESS',
    title: '15 MW Solar + 30 MWh ESS — SEZ',
    stats: [{ label: 'Solar PV', value: '15 MW' }, { label: 'ESS', value: '30 MWh' }],
    status: 'In Development',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-50 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-700 text-xs font-bold tracking-widest uppercase mb-3">
          Active Project Pipeline
        </p>
        <h2 className="text-brand-950 text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-xl">
          Featured Projects
        </h2>
        <p className="text-ink-700 text-base leading-relaxed max-w-2xl mb-12">
          Projects for which APX has provided engineering solutions and technical proposals —
          reflecting the scope and scale of work we engage across the region.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <div key={p.title} className="bg-white rounded-2xl border border-brand-200 p-6 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-brand-700 bg-brand-100 px-2.5 py-1 rounded-full">
                  {p.country}
                </span>
                <span className="text-xs font-semibold text-teal bg-teal/10 px-2.5 py-1 rounded-full">
                  {p.status}
                </span>
              </div>
              <p className="text-ink-400 text-xs font-semibold uppercase tracking-wide mb-1">{p.type}</p>
              <h3 className="text-brand-950 font-bold text-base mb-4 leading-snug">{p.title}</h3>
              <div className="mt-auto flex gap-3">
                {p.stats.map(s => (
                  <div key={s.label} className="bg-brand-50 rounded-xl px-3 py-2 flex-1 text-center">
                    <div className="text-brand-700 font-extrabold text-sm">{s.value}</div>
                    <div className="text-ink-400 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
