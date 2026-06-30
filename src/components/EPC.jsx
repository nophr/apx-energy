const phases = [
  {
    letter: 'E',
    title: 'Engineering',
    items: ['Feasibility Studies', 'System Design', 'Technical Specifications', 'Energy Modelling'],
  },
  {
    letter: 'P',
    title: 'Procurement',
    items: ['Equipment Supply', 'Vendor Management', 'Logistics', 'Quality Assurance'],
  },
  {
    letter: 'C',
    title: 'Construction',
    items: ['Civil Works', 'Installation', 'Grid Connection', 'Commissioning'],
  },
  {
    letter: 'O&M',
    title: 'Operations & Maintenance',
    items: ['Remote Monitoring', 'Preventive Maintenance', 'Performance Optimisation'],
  },
]

export default function EPC() {
  return (
    <section className="bg-brand-950 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-600 text-xs font-bold tracking-widest uppercase mb-3">
          EPC Delivery Model
        </p>
        <h2 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-xl">
          End-to-End Turnkey Project Delivery
        </h2>
        <p className="text-brand-200/70 text-base leading-relaxed max-w-2xl mb-12">
          APX manages every phase from initial feasibility through to engineering, procurement,
          construction, and long-term operations &amp; maintenance. A single accountable partner,
          eliminating multi-contractor complexity.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((p, i) => (
            <div key={p.letter} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              {i < phases.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2 text-brand-600 text-lg z-10">›</div>
              )}
              <div className="w-12 h-12 rounded-xl bg-brand-700 flex items-center justify-center text-white font-extrabold text-sm mb-4">
                {p.letter}
              </div>
              <h3 className="text-white font-bold text-base mb-3">{p.title}</h3>
              <ul className="space-y-1.5">
                {p.items.map(item => (
                  <li key={item} className="text-brand-400 text-xs flex items-start gap-1.5">
                    <span className="text-brand-600 mt-0.5 shrink-0">·</span>
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
