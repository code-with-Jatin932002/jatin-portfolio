import { useEffect, useState } from 'react'

type PageLoaderProps = {
  onComplete: () => void
}

function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(1)
  const [isReady, setIsReady] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    let value = 1
    const timers: number[] = []

    const tick = () => {
      if (value < 100) {
        const increment = value < 70 ? 1.6 : value < 90 ? 0.9 : 0.45
        value = Math.min(100, value + increment)
        setProgress(Math.floor(value))
        timers.push(window.setTimeout(tick, 22))
        return
      }

      setProgress(100)
      setIsReady(true)

      timers.push(window.setTimeout(() => setIsLeaving(true), 700))
      timers.push(
        window.setTimeout(() => {
          document.body.style.overflow = ''
          onComplete()
        }, 1250),
      )
    }

    timers.push(window.setTimeout(tick, 80))

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
      document.body.style.overflow = ''
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#05050d] transition-opacity duration-500 ${
        isLeaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="absolute bottom-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative flex flex-col items-center px-6 text-center">
        <p className="mb-4 text-[10px] font-bold tracking-[0.45em] text-cyan-400/80">
          LOADING
        </p>

        <div className="font-mono text-7xl font-bold tabular-nums tracking-tight text-white sm:text-8xl">
          {progress}
          <span className="ml-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-4xl text-transparent sm:text-5xl">
            %
          </span>
        </div>

        <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/10 sm:w-72">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_18px_rgba(34,211,238,0.7)] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p
          className={`mt-8 text-sm font-bold tracking-[0.55em] transition-all duration-500 ${
            isReady
              ? 'translate-y-0 text-white opacity-100'
              : 'translate-y-1 text-slate-500 opacity-50'
          }`}
        >
          READY
        </p>
      </div>
    </div>
  )
}

export default PageLoader
