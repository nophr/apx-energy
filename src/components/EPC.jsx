import { Fragment } from 'react'
import { DraftingCompass, Package, HardHat, Wrench, ChevronRight } from 'lucide-react'

const phases = [
  {
    Icon: DraftingCompass,
    title: 'Engineering',
    items: ['Feasibility Studies', 'System Design', 'Technical Specifications', 'Energy Modelling'],
  },
  {
    Icon: Package,
    title: 'Procurement',
    items: ['Equipment Supply', 'Vendor Management', 'Logistics', 'Quality Assurance'],
  },
  {
    Icon: HardHat,
    title: 'Construction',
    items: ['Civil Works', 'Installation', 'Grid Connection', 'Commissioning'],
  },
  {
    Icon: Wrench,
    title: 'Operations & Maintenance',
    items: ['Remote Monitoring', 'Preventive Maintenance', 'Performance Optimisation'],
  },
]

function PhaseCard({ phase }) {
  const { Icon } = phase
  return (
    <div className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="w-12 h-12 rounded-xl bg-brand-700 flex items-center justify-center text-white mb-4">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <h3 className="text-white font-bold text-base mb-3">{phase.title}</h3>
      <ul className="space-y-1.5">
        {phase.items.map(item => (
          <li key={item} className="text-brand-400 text-xs flex items-start gap-1.5">
            <span className="text-brand-600 mt-0.5 shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function EPC() {
  return (
    <section className="bg-brand-950 py-12 px-4 sm:px-6">
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

        {/* Mobile / tablet: simple grid, no connectors */}
        <div className="grid sm:grid-cols-2 gap-4 lg:hidden">
          {phases.map(phase => (
            <PhaseCard key={phase.title} phase={phase} />
          ))}
        </div>

        {/* Desktop: cards in a row with chevrons sitting in the gaps between them */}
        <div className="hidden lg:flex items-stretch gap-3">
          {phases.map((phase, i) => (
            <Fragment key={phase.title}>
              <PhaseCard phase={phase} />
              {i < phases.length - 1 && (
                <div className="flex items-center shrink-0 text-brand-600">
                  <ChevronRight className="w-8 h-8" strokeWidth={2.5} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
