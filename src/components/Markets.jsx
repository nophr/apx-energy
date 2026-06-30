const markets = [
  {
    code: 'AU',
    country: 'Australia',
    status: 'Active Market',
    statusColor: 'bg-brand-600/20 text-brand-600',
    description:
      'Net-zero aligned solar, wind, and BESS deployments alongside C&I renewable systems and power quality solutions.',
    proposals: null,
  },
  {
    code: 'KH',
    country: 'Cambodia',
    status: '3 Active Proposals',
    statusColor: 'bg-teal/20 text-teal',
    description:
      'SEZ industrial, hospitality, and agri-solar microgrid projects across Kandal and Koh Kong provinces.',
    proposals: 3,
  },
  {
    code: 'VN',
    country: 'Vietnam',
    status: '6 Active Proposals',
    statusColor: 'bg-gold/20 text-gold',
    description:
      '300 MW solar, 200 MWh BESS (×2), 30 MW floating solar, 42 MW wind — and a growing C&I project pipeline.',
    proposals: 6,
  },
]

export default function Markets() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-700 text-xs font-bold tracking-widest uppercase mb-3">
          Our Markets
        </p>
        <h2 className="text-brand-950 text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-xl">
          Operating Across Asia-Pacific
        </h2>
        <p className="text-ink-700 text-base leading-relaxed max-w-2xl mb-12">
          APX Energy Solutions operates across three markets in the Asia-Pacific region,
          with a growing pipeline of utility-scale and commercial projects.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {markets.map(m => (
            <div key={m.country} className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-700 text-white flex items-center justify-center text-base font-extrabold tracking-wide mb-4">{m.code}</div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-brand-950 font-extrabold text-xl">{m.country}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.statusColor}`}>
                  {m.status}
                </span>
              </div>
              <p className="text-ink-700 text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
