
import { Download, Menu, Terminal, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '../data/portfolio'
import resumePdf from '../assets/Jatin_Sharma.pdf'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')
  const isClickScrolling = useRef(false)
  const unlockTimer = useRef<number>(0)

  useEffect(() => {
    const sectionIds = portfolioData.navigation.map(
      (item) => item.href.slice(1),
    )

    const updateActiveSection = () => {
      if (isClickScrolling.current) return

      const header = document.querySelector('header')
      const probeY = Math.max(
        (header?.getBoundingClientRect().height ?? 80) + 32,
        120,
      )

      let current = '#home'

      for (const id of sectionIds) {
        const section = document.getElementById(id)

        if (!section) continue

        if (section.getBoundingClientRect().top <= probeY) {
          current = `#${id}`
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = `#${sectionIds[sectionIds.length - 1]}`
      }

      setActiveHref(current)
    }

    const handleScrollEnd = () => {
      isClickScrolling.current = false
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    })

    window.addEventListener('scrollend', handleScrollEnd)

    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)

      window.removeEventListener('scrollend', handleScrollEnd)

      window.removeEventListener('resize', updateActiveSection)

      window.clearTimeout(unlockTimer.current)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const section = document.getElementById(href.slice(1))

    if (!section) return

    isClickScrolling.current = true

    setActiveHref(href)

    setIsOpen(false)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    window.clearTimeout(unlockTimer.current)

    unlockTimer.current = window.setTimeout(() => {
      isClickScrolling.current = false
    }, 1200)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#05050d]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection('#home')
          }}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/60 bg-cyan-400/5 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.15)]">
            <Terminal size={22} />
          </div>

          <span className="text-lg font-bold tracking-wide text-white">
            JATIN<span className="text-cyan-400">.DEV</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {portfolioData.navigation.map((item) => {
            const isActive = activeHref === item.href

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`relative py-2 text-sm font-medium transition ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}

                <span
                  className={`absolute right-0 bottom-0 left-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">

          {/* Availability */}
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />

            {portfolioData.personal.availability}
          </div>

          {/* Resume Download */}
          <a
            href={resumePdf}
            download="Jatin_Sharma_Resume.pdf"
            className="flex items-center gap-2 rounded-lg border border-cyan-400/70 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          >
            Resume

            <Download
              size={16}
              className="text-cyan-400"
            />
          </a>

          {/* Hire Me */}
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('#contact')
            }}
            className="rounded-lg border border-purple-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            Hire Me{' '}
            <span className="text-purple-400">
              -&gt;
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-white/10 p-2 text-slate-300 lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/5 bg-[#05050d] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {portfolioData.navigation.map((item) => {
              const isActive = activeHref === item.href

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`relative w-fit py-1 text-sm font-medium transition ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500" />
                  )}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

