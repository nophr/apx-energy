import Icon from './Icon'
import BrandLogo from './BrandLogo'
import { clients } from '../data/brands'

const sectors = [
  { icon: 'flame', name: 'Oil & Gas / Petrochemical' },
  { icon: 'building', name: 'Cement / Construction' },
  { icon: 'mountain', name: 'Mining / Metallurgy' },
  { icon: 'cpu', name: 'Semiconductor / High-Tech' },
  { icon: 'droplet', name: 'Water / Infrastructure' },
  { icon: 'zap', name: 'New Energy / Power Grid' },
]

export default function Clients() {
  return (
    <section className="bg-brand-50 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-brand-700 text-xs font-bold tracking-widest uppercase mb-3">
          Technology Partner Track Record
        </p>
        <h2 className="text-brand-950 text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-xl">
          Proven Across Every Industrial Sector
        </h2>
        <p className="text-ink-700 text-base leading-relaxed max-w-2xl mb-12">
          Sanhe Power Tech's technology — distributed exclusively by APX Energy Solutions in
          Australia, Cambodia, and Vietnam — has been validated by over 30 Fortune 500 companies
          operating in the world's most demanding environments.
        </p>

        {/* Sectors */}
        <div className="flex flex-wrap gap-2 mb-12">
          {sectors.map(s => (
            <span
              key={s.name}
              className="bg-white border border-brand-200 text-ink-700 text-xs font-semibold px-3 py-2 rounded-full flex items-center gap-1.5"
            >
              <Icon name={s.icon} className="w-4 h-4 text-brand-700" /> {s.name}
            </span>
          ))}
        </div>

        {/* Client logo wall */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {clients.map(c => (
            <div
              key={c.slug}
              className="bg-white border border-brand-200 rounded-xl px-4 h-16 flex items-center justify-center"
            >
              <BrandLogo
                name={c.name}
                slug={c.slug}
                imgClassName="max-h-9 max-w-[85%] object-contain"
                textClassName="text-sm font-semibold text-ink-700 text-center"
              />
            </div>
          ))}
        </div>

        <p className="text-ink-400 text-xs text-center mt-6">
          Partial list of Sanhe Power Tech's Fortune 500 and global enterprise clients
        </p>
      </div>
    </section>
  )
}
