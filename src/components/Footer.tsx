import { ArrowUp, ShieldCheck } from 'lucide-react'
import { portfolioData } from '../data/portfolio'

function Footer() {
  const { personal } = portfolioData

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative border-t border-white/10 bg-[#05050d] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        {/* Logo / identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/5 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="font-mono text-sm font-bold">
              {'</>'}
            </span>
          </div>

          <div>
            <p className="text-sm font-black tracking-wide text-white">
              {personal.name.toUpperCase()}
            </p>

            <p className="mt-0.5 font-mono text-[9px] tracking-[0.15em] text-slate-500">
              {personal.role}
            </p>
          </div>
        </div>

        {/* Center information */}
        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] tracking-[0.12em] text-slate-500">
          <span>© 2026 // ALL RIGHTS RESERVED</span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

          <div className="flex items-center gap-2">
            <ShieldCheck size={13} className="text-purple-400" />
            <span>SECURED TRANSIT</span>
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

          <span>
            HOSTED VIA{' '}
            <span className="font-bold text-cyan-400">
              AWS EC2
            </span>
          </span>
        </div>

        {/* Back to top */}
        <button
          type="button"
          onClick={handleBackToTop}
          className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
        >
          BACK TO ROOT

          <ArrowUp
            size={14}
            className="transition-transform group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </footer>
  )
}

export default Footer