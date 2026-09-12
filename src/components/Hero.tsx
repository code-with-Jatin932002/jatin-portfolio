
import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Terminal,
} from 'lucide-react'
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from 'react-icons/si'

import jatinImage from '../assets/jatin42.png'
import jatinImageBack from '../assets/jatin31.png'
import resumePdf from '../assets/Jatin_Sharma.pdf'
import { portfolioData } from '../data/portfolio'

function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)

  /*
   * -------------------------------------------------------
   * ROTATION STATE
   * -------------------------------------------------------
   */

  const rotationRef = useRef(0)
  const targetRotationRef = useRef(0)
  const animationFrameRef = useRef<number | null>(null)

  const touchLastYRef = useRef<number | null>(null)

  const [rotation, setRotation] = useState(0)

  /*
   * -------------------------------------------------------
   * ROTATION LIMIT
   * -------------------------------------------------------
   */

  const MAX_ROTATION = 180

  /*
   * -------------------------------------------------------
   * SMOOTH ROTATION
   * -------------------------------------------------------
   */

  const animateRotation = () => {
    const current = rotationRef.current
    const target = targetRotationRef.current

    const difference = target - current

    if (Math.abs(difference) < 0.15) {
      rotationRef.current = target
      setRotation(target)
      animationFrameRef.current = null
      return
    }

    const next = current + difference * 0.16

    rotationRef.current = next
    setRotation(next)

    animationFrameRef.current =
      window.requestAnimationFrame(animateRotation)
  }

  const setTargetRotation = (nextRotation: number) => {
    const clamped = Math.max(
      0,
      Math.min(MAX_ROTATION, nextRotation),
    )

    targetRotationRef.current = clamped

    if (animationFrameRef.current === null) {
      animationFrameRef.current =
        window.requestAnimationFrame(animateRotation)
    }
  }

  /*
   * -------------------------------------------------------
   * CHECK IF HERO IS CURRENTLY ACTIVE
   * -------------------------------------------------------
   */

  const isHeroActive = () => {
    const hero = heroRef.current

    if (!hero) {
      return false
    }

    const rect = hero.getBoundingClientRect()

    if (window.innerWidth >= 1024) {
      return (
        rect.top <= 5 &&
        rect.bottom >= window.innerHeight - 5
      )
    }

    return rect.top <= 20 && rect.bottom > 120
  }

  /*
   * -------------------------------------------------------
   * WHEEL ROTATION
   * -------------------------------------------------------
   */

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!isHeroActive()) {
        return
      }

      const delta = event.deltaY

      /*
       * SCROLL DOWN
       */

      if (
        delta > 0 &&
        targetRotationRef.current < MAX_ROTATION
      ) {
        event.preventDefault()

        const amount = Math.max(delta * 0.9, 10)

        setTargetRotation(
          targetRotationRef.current + amount,
        )

        return
      }

      /*
       * SCROLL UP
       */

      if (
        delta < 0 &&
        targetRotationRef.current > 0
      ) {
        if (
          window.innerWidth >= 1024 ||
          window.scrollY <=
            heroRef.current!.offsetTop + 30
        ) {
          event.preventDefault()

          const amount = Math.max(
            Math.abs(delta) * 0.9,
            10,
          )

          setTargetRotation(
            targetRotationRef.current - amount,
          )
        }
      }
    }

    window.addEventListener('wheel', handleWheel, {
      passive: false,
    })

    return () => {
      window.removeEventListener(
        'wheel',
        handleWheel,
      )

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(
          animationFrameRef.current,
        )
      }
    }
  }, [])

  /*
   * -------------------------------------------------------
   * MOBILE TOUCH ROTATION
   * -------------------------------------------------------
   */

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (!isHeroActive()) {
        return
      }

      const touch = event.touches[0]

      touchLastYRef.current = touch.clientY
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (
        !isHeroActive() ||
        touchLastYRef.current === null
      ) {
        return
      }

      const touch = event.touches[0]

      const currentY = touch.clientY

      const delta =
        touchLastYRef.current - currentY

      touchLastYRef.current = currentY

      /*
       * SWIPE UP
       */

      if (
        delta > 0 &&
        targetRotationRef.current < MAX_ROTATION
      ) {
        event.preventDefault()

        const amount = Math.max(delta * 1.5, 3)

        setTargetRotation(
          targetRotationRef.current + amount,
        )

        return
      }

      /*
       * SWIPE DOWN
       */

      if (
        delta < 0 &&
        targetRotationRef.current > 0 &&
        window.scrollY <=
          (heroRef.current?.offsetTop ?? 0) + 30
      ) {
        event.preventDefault()

        const amount = Math.max(
          Math.abs(delta) * 1.5,
          3,
        )

        setTargetRotation(
          targetRotationRef.current - amount,
        )
      }
    }

    const handleTouchEnd = () => {
      touchLastYRef.current = null
    }

    window.addEventListener(
      'touchstart',
      handleTouchStart,
      {
        passive: true,
      },
    )

    window.addEventListener(
      'touchmove',
      handleTouchMove,
      {
        passive: false,
      },
    )

    window.addEventListener(
      'touchend',
      handleTouchEnd,
      {
        passive: true,
      },
    )

    return () => {
      window.removeEventListener(
        'touchstart',
        handleTouchStart,
      )

      window.removeEventListener(
        'touchmove',
        handleTouchMove,
      )

      window.removeEventListener(
        'touchend',
        handleTouchEnd,
      )
    }
  }, [])

  /*
   * -------------------------------------------------------
   * MOUSE 3D TILT + CURSOR GLOW
   * -------------------------------------------------------
   */

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect()

    const x =
      ((event.clientX - rect.left) /
        rect.width -
        0.5) *
      2

    const y =
      ((event.clientY - rect.top) /
        rect.height -
        0.5) *
      2

    setMouse({
      x,
      y,
    })
  }

  const handleMouseLeave = () => {
    setMouse({
      x: 0,
      y: 0,
    })
  }

  const mouseRotateX = mouse.y * -3
  const mouseRotateY = mouse.x * 4

  /*
   * -------------------------------------------------------
   * ROTATION PROGRESS
   * -------------------------------------------------------
   */

  const progress = Math.min(
    (rotation / MAX_ROTATION) * 100,
    100,
  )

  /*
   * -------------------------------------------------------
   * CURSOR SPOTLIGHT
   * -------------------------------------------------------
   */

  const spotlightX =
    ((mouse.x + 1) / 2) * 100

  const spotlightY =
    ((mouse.y + 1) / 2) * 100

  /*
   * -------------------------------------------------------
   * BACKGROUND PARTICLES
   * -------------------------------------------------------
   */

  const particles = [
    {
      left: '8%',
      top: '18%',
      delay: '0s',
      duration: '6s',
    },
    {
      left: '18%',
      top: '72%',
      delay: '1s',
      duration: '7s',
    },
    {
      left: '29%',
      top: '35%',
      delay: '2s',
      duration: '8s',
    },
    {
      left: '41%',
      top: '14%',
      delay: '0.5s',
      duration: '6.5s',
    },
    {
      left: '53%',
      top: '82%',
      delay: '2.5s',
      duration: '7.5s',
    },
    {
      left: '66%',
      top: '26%',
      delay: '1.5s',
      duration: '6s',
    },
    {
      left: '76%',
      top: '68%',
      delay: '3s',
      duration: '8s',
    },
    {
      left: '88%',
      top: '18%',
      delay: '0.8s',
      duration: '7s',
    },
    {
      left: '94%',
      top: '78%',
      delay: '2s',
      duration: '6.5s',
    },
    {
      left: '12%',
      top: '48%',
      delay: '3s',
      duration: '8s',
    },
  ]

  return (
    <>
      <style>
        {`
          @keyframes heroFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, -10px, 0);
            }
          }

          @keyframes heroFloatReverse {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
            }

            50% {
              transform: translate3d(0, 9px, 0);
            }
          }

          @keyframes heroGlow {
            0%,
            100% {
              opacity: 0.35;
              transform: scale(1);
            }

            50% {
              opacity: 0.75;
              transform: scale(1.12);
            }
          }

          @keyframes heroGlowReverse {
            0%,
            100% {
              opacity: 0.25;
              transform: scale(1.05);
            }

            50% {
              opacity: 0.6;
              transform: scale(0.92);
            }
          }

          @keyframes scanLine {
            0% {
              transform: translateY(-80px);
              opacity: 0;
            }

            10% {
              opacity: 0.8;
            }

            50% {
              opacity: 1;
            }

            90% {
              opacity: 0.8;
            }

            100% {
              transform: translateY(520px);
              opacity: 0;
            }
          }

          @keyframes particleFloat {
            0%,
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 0.15;
            }

            50% {
              transform: translate3d(0, -24px, 0);
              opacity: 0.8;
            }
          }

          @keyframes borderPulse {
            0%,
            100% {
              box-shadow:
                0 0 0 rgba(34, 211, 238, 0),
                inset 0 0 0 rgba(34, 211, 238, 0);
            }

            50% {
              box-shadow:
                0 0 45px rgba(34, 211, 238, 0.12),
                inset 0 0 30px rgba(34, 211, 238, 0.025);
            }
          }

          @keyframes textReveal {
            0% {
              opacity: 0;
              transform: translateY(24px);
              filter: blur(8px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
              filter: blur(0);
            }
          }

          @keyframes panelReveal {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(0.98);
              filter: blur(6px);
            }

            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          @keyframes typingCursor {
            0%,
            45% {
              opacity: 1;
            }

            46%,
            100% {
              opacity: 0;
            }
          }

          @keyframes gridMove {
            0% {
              background-position:
                0 0,
                0 0;
            }

            100% {
              background-position:
                34px 34px,
                34px 34px;
            }
          }

          .hero-panel-reveal {
            animation:
              panelReveal
              900ms
              cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          .hero-text-reveal {
            animation:
              textReveal
              800ms
              cubic-bezier(0.22, 1, 0.36, 1)
              both;
          }

          .hero-float {
            animation:
              heroFloat
              5s
              ease-in-out
              infinite;
          }

          .hero-float-reverse {
            animation:
              heroFloatReverse
              6s
              ease-in-out
              infinite;
          }

          .hero-glow {
            animation:
              heroGlow
              5s
              ease-in-out
              infinite;
          }

          .hero-glow-reverse {
            animation:
              heroGlowReverse
              6s
              ease-in-out
              infinite;
          }

          .hero-scan {
            animation:
              scanLine
              4.5s
              linear
              infinite;
          }

          .hero-particle {
            animation:
              particleFloat
              var(--particle-duration)
              ease-in-out
              infinite;
            animation-delay: var(--particle-delay);
          }

          .hero-border-pulse {
            animation:
              borderPulse
              4s
              ease-in-out
              infinite;
          }

          .hero-grid {
            animation:
              gridMove
              18s
              linear
              infinite;
          }

          .hero-typing-cursor {
            animation:
              typingCursor
              1s
              steps(1)
              infinite;
          }

          @media (max-width: 1023px) {
            .hero-mobile-image {
              min-height: 460px;
              height: 58svh;
              max-height: 620px;
            }

            .hero-mobile-profile {
              min-height: 0;
              height: auto;
            }
          }

          @media (max-width: 640px) {
            .hero-mobile-image {
              min-height: 440px;
              height: 56svh;
              max-height: 560px;
            }
          }

          @media (max-width: 420px) {
            .hero-mobile-image {
              min-height: 410px;
              height: 54svh;
              max-height: 520px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>

      <section
        ref={heroRef}
        id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
       className="
  relative
  min-h-[100svh]
  scroll-mt-[72px]
  overflow-x-hidden
  bg-[#05050d]
  lg:mt-[72px]
  lg:h-screen
  lg:min-h-0
  lg:overflow-hidden
        "
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div className="hero-glow absolute left-[3%] top-[12%] h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

          <div className="hero-glow-reverse absolute right-[3%] top-[18%] h-96 w-96 rounded-full bg-purple-500/[0.07] blur-[150px]" />

          <div className="hero-glow absolute bottom-[-10%] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[140px]" />

          <div
            className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/[0.025] blur-[120px] transition-all duration-700"
            style={{
              left: `${spotlightX}%`,
              top: `${spotlightY}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />

          {particles.map((particle, index) => (
            <span
              key={index}
              className="hero-particle absolute h-1 w-1 rounded-full bg-cyan-300/40"
              style={
                {
                  left: particle.left,
                  top: particle.top,
                  '--particle-duration':
                    particle.duration,
                  '--particle-delay':
                    particle.delay,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* =====================================================
            GRID BACKGROUND
        ====================================================== */}

        <div
          className="hero-grid pointer-events-none absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* =====================================================
            MAIN HERO
        ====================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[100svh]
            items-start
            px-4
            pb-8
            pt-20
            sm:px-6
            sm:pt-24
            lg:h-full
            lg:items-center
            lg:px-8
            lg:pb-6
            lg:pt-24
          "
        >
          <div className="mx-auto w-full max-w-7xl">
            {/* =================================================
                RESPONSIVE GRID
            ================================================== */}

            <div
              className="
                grid
                grid-cols-1
                items-start
                gap-4
                lg:items-stretch
                lg:gap-5
                lg:grid-cols-[210px_minmax(0,0.90fr)_minmax(350px,0.88fr)]
              "
            >
              {/* =================================================
                  LEFT PANEL
              ================================================== */}

              <div className="hidden h-[calc(100vh-120px)] min-h-[570px] space-y-4 lg:flex lg:flex-col">
                <div
                  className="hero-panel-reveal"
                  style={{
                    animationDelay: '100ms',
                  }}
                >
                  <StatusCard
                    number="01"
                    label="CURRENT STATUS"
                    title="Available"
                    subtitle="Open to opportunities"
                    icon={
                      <div className="relative">
                        <span className="absolute inset-0 animate-ping rounded-full bg-green-400/30" />

                        <CheckCircle2
                          size={17}
                          className="relative"
                        />
                      </div>
                    }
                    iconClass="text-green-400"
                    borderClass="border-green-400/20"
                  />
                </div>

                <div
                  className="hero-panel-reveal"
                  style={{
                    animationDelay: '220ms',
                  }}
                >
                  <StatusCard
                    number="02"
                    label="EXPERIENCE"
                    title="2 + Years"
                    subtitle="Full Stack Development"
                    icon={
                      <BriefcaseBusiness
                        size={17}
                      />
                    }
                    iconClass="text-cyan-400"
                    borderClass="border-cyan-400/20"
                  />
                </div>

                {/* CORE STACK */}

                <div
                  className="hero-panel-reveal rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
                  style={{
                    animationDelay: '340ms',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-semibold tracking-[0.25em] text-slate-500">
                      CORE STACK
                    </span>

                    <Code2
                      size={15}
                      className="animate-pulse text-purple-400"
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <TechIcon
                      icon={<FaReact size={15} />}
                      name="React"
                      className="text-cyan-400"
                    />

                    <TechIcon
                      icon={<FaNodeJs size={15} />}
                      name="Node"
                      className="text-green-400"
                    />

                    <TechIcon
                      icon={<Database size={14} />}
                      name="SQL"
                      className="text-blue-400"
                    />

                    <TechIcon
                      icon={<SiNextdotjs size={14} />}
                      name="Next.js"
                      className="text-white"
                    />
                  </div>
                </div>

                {/* DEVELOPER LOG */}

                <div
                  className="hero-panel-reveal min-h-0 flex-1 rounded-3xl border border-white/10 bg-[#070711] p-4 shadow-[0_0_35px_rgba(34,211,238,0.04)]"
                  style={{
                    animationDelay: '460ms',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Terminal
                      size={14}
                      className="text-cyan-400"
                    />

                    <span className="font-mono text-[8px] font-semibold tracking-[0.2em] text-slate-500">
                      DEVELOPER.LOG
                    </span>

                    <span className="hero-typing-cursor ml-auto h-3 w-px bg-cyan-400" />
                  </div>

                  <div className="mt-4 space-y-2 font-mono text-[9px]">
                    <p className="text-slate-600">
                      <span className="text-cyan-400">
                        $
                      </span>{' '}
                      build
                    </p>

                    <p className="text-slate-500">
                      → React application
                    </p>

                    <p className="text-slate-500">
                      → Node.js backend
                    </p>

                    <p className="text-green-400">
                      ✓ System ready
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CENTER IMAGE
              ================================================== */}

              <div
                className="
                  hero-panel-reveal
                  hero-border-pulse
                  hero-mobile-image
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-cyan-400/10
                  bg-[#070711]
                  shadow-[0_0_100px_rgba(34,211,238,0.06)]
                  lg:h-[calc(100vh-120px)]
                  lg:min-h-[570px]
                "
                style={{
                  perspective: '1600px',
                  animationDelay: '180ms',
                }}
              >
                {/* CENTER GRID */}

                <div
                  className="hero-grid pointer-events-none absolute inset-0 z-[1] opacity-[0.15]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                    backgroundSize: '34px 34px',
                  }}
                />

                {/* CENTER GLOW */}

                <div className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[110px]" />

                <div className="hero-glow-reverse pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.07] blur-[100px]" />

                {/* TOP HEADER */}

                <div className="absolute left-5 right-5 top-5 z-50 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/60" />

                      <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />
                    </span>

                    <span className="font-mono text-[8px] font-semibold tracking-[0.28em] text-cyan-400 sm:text-[9px]">
                      DEVELOPER PROFILE
                    </span>
                  </div>

                  <span className="font-mono text-[8px] tracking-[0.2em] text-slate-600">
                    {Math.round(rotation)}°
                  </span>
                </div>

                {/* IMAGE AREA */}

                <div
                  className="absolute inset-0 z-10 flex items-center justify-center"
                  style={{
                    perspective: '1600px',
                  }}
                >
                  <div
                    className="relative h-full w-full"
                    style={{
                      transformStyle:
                        'preserve-3d',

                      transform: `
                        rotateX(${mouseRotateX}deg)
                        rotateY(${rotation + mouseRotateY}deg)
                      `,

                      transition:
                        'transform 80ms linear',
                    }}
                  >
                    {/* =================================================
                        FRONT IMAGE
                    ================================================== */}

                    <div
                      className="absolute inset-0 overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#0a0a13] shadow-[0_0_70px_rgba(34,211,238,0.13)]"
                      style={{
                        backfaceVisibility:
                          'hidden',

                        WebkitBackfaceVisibility:
                          'hidden',
                      }}
                    >
                      <img
                        src={jatinImage}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
                      />

                      <div className="absolute inset-0 bg-[#05050d]/20" />

                      <div className="relative h-full w-full">
                        <img
                          src={jatinImage}
                          alt="Jatin Sharma"
                          className="h-full w-full object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-[1.025]"
                        />
                      </div>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05050d]/80 via-transparent to-transparent" />

                      <div className="hero-scan pointer-events-none absolute left-0 right-0 top-[20%] h-px bg-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,1)]" />

                      <div className="hero-scan pointer-events-none absolute left-0 right-0 top-[50%] h-px bg-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />

                      <div className="absolute left-5 top-14 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.06]">
                        <span className="font-mono text-[7px] tracking-[0.2em] text-white/70">
                          FRONT // 01
                        </span>
                      </div>

                      <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-cyan-400/40" />

                      <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-cyan-400/40" />

                      <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-400/40" />

                      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-cyan-400/40" />

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                        <div>
                          <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-400">
                            JATIN SHARMA
                          </p>

                          <p className="mt-1 text-sm font-bold text-white sm:text-base">
                            Full Stack Developer
                          </p>
                        </div>

                        <span className="relative rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 font-mono text-[7px] tracking-[0.18em] text-green-400">
                          <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                          ONLINE
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        BACK IMAGE
                    ================================================== */}

                    <div
                      className="absolute inset-0 overflow-hidden rounded-[2rem] border border-purple-400/30 bg-[#0a0a13] shadow-[0_0_70px_rgba(168,85,247,0.13)]"
                      style={{
                        transform:
                          'rotateY(180deg)',

                        backfaceVisibility:
                          'hidden',

                        WebkitBackfaceVisibility:
                          'hidden',
                      }}
                    >
                      <img
                        src={jatinImageBack}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-2xl"
                      />

                      <div className="absolute inset-0 bg-[#05050d]/20" />

                      <div className="relative h-full w-full">
                        <img
                          src={jatinImageBack}
                          alt="Jatin Sharma alternate profile"
                          className="h-full w-full object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-[1.025]"
                        />
                      </div>

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05050d]/80 via-transparent to-transparent" />

                      <div className="hero-scan pointer-events-none absolute left-0 right-0 top-[20%] h-px bg-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,1)]" />

                      <div className="absolute left-5 top-14 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                        <span className="font-mono text-[7px] tracking-[0.2em] text-white/70">
                          BACK // 02
                        </span>
                      </div>

                      <div className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l border-t border-purple-400/40" />

                      <div className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r border-t border-purple-400/40" />

                      <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-purple-400/40" />

                      <div className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b border-r border-purple-400/40" />

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                        <div>
                          <p className="font-mono text-[8px] tracking-[0.25em] text-purple-400">
                            DIGITAL CRAFT
                          </p>

                          <p className="mt-1 text-sm font-bold text-white sm:text-base">
                            Building Scalable Systems
                          </p>
                        </div>

                        <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 font-mono text-[7px] tracking-[0.18em] text-purple-300">
                          360° VIEW
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    FLOATING SKILL BADGES
                ================================================== */}

                <FloatingBadge
                  className="hero-float left-4 top-[25%] sm:left-7"
                  icon={<FaReact size={13} />}
                  text="REACT"
                  color="text-cyan-400"
                />

                <FloatingBadge
                  className="hero-float-reverse right-4 top-[34%] sm:right-7"
                  icon={<FaNodeJs size={13} />}
                  text="NODE.JS"
                  color="text-green-400"
                />

                <FloatingBadge
                  className="hero-float right-4 top-[52%] sm:right-7"
                  icon={<Database size={13} />}
                  text="SQL"
                  color="text-blue-400"
                />

                <FloatingBadge
                  className="hero-float-reverse left-5 top-[67%] sm:left-8"
                  icon={<SiTypescript size={13} />}
                  text="TYPESCRIPT"
                  color="text-blue-400"
                />

                <FloatingBadge
                  className="hero-float right-5 top-[68%] sm:right-8"
                  icon={<Database size={13} />}
                  text="MONGODB"
                  color="text-green-400"
                />

                <FloatingBadge
                  className="hero-float-reverse left-[18%] top-[78%] sm:left-[20%]"
                  icon={<SiNextdotjs size={13} />}
                  text="NEXT.JS"
                  color="text-white"
                />

                <FloatingBadge
                  className="hero-float left-4 top-[45%] sm:left-7"
                  icon={<FaAws size={13} />}
                  text="AWS"
                  color="text-orange-400"
                />

                <FloatingBadge
                  className="hero-float-reverse right-[18%] top-[23%] sm:right-[10%]"
                  icon={<SiJavascript size={13} />}
                  text="JAVASCRIPT"
                  color="text-yellow-400"
                />

                <FloatingBadge
                  className="hero-float left-[8%] top-[58%] sm:left-[10%]"
                  icon={<SiRedis size={13} />}
                  text="REDIS"
                  color="text-red-400"
                />

                <FloatingBadge
                  className="hero-float-reverse right-[8%] top-[61%] sm:right-[10%]"
                  icon={<FaDocker size={13} />}
                  text="DOCKER"
                  color="text-sky-400"
                />

                <FloatingBadge
                  className="hero-float left-[17%] top-[35%] sm:left-[19%]"
                  icon={<SiPostgresql size={13} />}
                  text="POSTGRESQL"
                  color="text-blue-400"
                />

                {/* =================================================
                    ROTATION PROGRESS
                ================================================== */}

                <div className="absolute bottom-5 left-1/2 z-50 w-36 -translate-x-1/2">
                  <div className="mb-2 flex items-center justify-between font-mono text-[7px] tracking-[0.15em] text-slate-600">
                    <span>ROTATION</span>

                    <span className="text-cyan-400/60">
                      {Math.round(progress)}%
                    </span>
                  </div>

                  <div className="relative h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />

                    {progress > 0 &&
                      progress < 100 && (
                        <div
                          className="absolute top-0 h-full w-8 bg-white/50 blur-sm"
                          style={{
                            left: `calc(${progress}% - 32px)`,
                          }}
                        />
                      )}
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT PROFILE
              ================================================== */}

              <div
                className="
                  hero-panel-reveal
                  hero-mobile-profile
                  relative
                  w-full
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-6
                  backdrop-blur-xl
                  sm:p-8
                  lg:h-[calc(100vh-120px)]
                  lg:min-h-[570px]
                  lg:p-8
                  xl:p-9
                  transition-all
                  duration-500
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_45px_rgba(34,211,238,0.08)]
                "
                style={{
                  animationDelay: '300ms',
                }}
              >
                <div
                  className="hero-grid pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                <div className="hero-glow pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

                <div className="hero-glow-reverse pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-500/[0.05] blur-[100px]" />

                <div className="relative flex h-full flex-col">

                  {/* =================================================
                      AVAILABILITY
                  ================================================== */}

                  <div
                    className="hero-text-reveal inline-flex w-fit items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/[0.04] px-3 py-1.5 text-[8px] font-bold tracking-[0.1em] text-cyan-400"
                    style={{
                      animationDelay: '550ms',
                    }}
                  >
                    <Sparkles size={11} />

                    FULL-TIME ROLES
                  </div>

                  {/* =================================================
                      NAME
                  ================================================== */}

                  <h1
                    className="
                      hero-text-reveal
                      mt-6
                      text-[2.25rem]
                      font-black
                      leading-[0.94]
                      tracking-[-0.06em]
                      text-white
                      sm:text-5xl
                      lg:mt-7
                      lg:text-[3.35rem]
                      xl:text-[3.8rem]
                    "
                    style={{
                      animationDelay: '650ms',
                    }}
                  >
                    Hi, I'm

                    <span
                      className="
                        block
                        whitespace-nowrap
                        bg-gradient-to-r
                        from-cyan-400
                        via-blue-400
                        to-purple-500
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {portfolioData.personal.firstName}{' '}
                      {portfolioData.personal.lastName}
                    </span>
                  </h1>

                  {/* =================================================
                      ROLE
                  ================================================== */}

                  <div
                    className="hero-text-reveal mt-5 flex items-center gap-3 lg:mt-6"
                    style={{
                      animationDelay: '760ms',
                    }}
                  >
                    <span className="h-px w-8 shrink-0 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                    <h2 className="text-sm font-bold text-slate-300 sm:text-base">
                      {
                        portfolioData.personal
                          .role
                      }
                    </h2>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p
                    className="hero-text-reveal mt-4 max-w-lg text-sm leading-6 text-slate-400"
                    style={{
                      animationDelay: '840ms',
                    }}
                  >
                    {
                      portfolioData.personal
                        .description
                    }
                  </p>

                  {/* =================================================
                      CONTACT
                  ================================================== */}

                  <div
                    className="hero-text-reveal mt-6 space-y-3 border-t border-white/10 pt-5"
                    style={{
                      animationDelay: '920ms',
                    }}
                  >
                    <ContactRow
                      icon={<Mail size={15} />}
                      value={
                        portfolioData.personal
                          .email
                      }
                      className="text-cyan-400"
                    />

                    <ContactRow
                      icon={<Phone size={15} />}
                      value={
                        portfolioData.personal
                          .phone
                      }
                      className="text-purple-400"
                    />

                    <ContactRow
                      icon={<MapPin size={15} />}
                      value={
                        portfolioData.personal
                          .location
                      }
                      className="text-green-400"
                    />
                  </div>

                  {/* =================================================
                      BUTTONS
                  ================================================== */}

                  <div
                    className="hero-text-reveal mt-8 border-t border-white/10 pt-6 lg:mt-auto"
                    style={{
                      animationDelay: '1000ms',
                    }}
                  >
                    <div className="flex flex-wrap gap-3">

                      <a
                        href="#projects"
                        className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                      >
                        View Projects

                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>

                      <a
                        href="#contact"
                        className="rounded-xl border border-white/10 px-5 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]"
                      >
                        Contact Me
                      </a>

                      {/* =================================================
                          PREVIEW RESUME
                      ================================================== */}

                      <a
                        href={resumePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-purple-400/20 px-5 py-3 text-xs font-bold text-purple-300 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-purple-400/[0.05] hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]"
                      >
                        Preview Resume
                      </a>
                    </div>

                    {/* SOCIALS */}

                    <div className="mt-4 flex items-center gap-2">
                      <SocialButton
                        href={
                          portfolioData.personal
                            .linkedin
                        }
                        label="LinkedIn"
                      >
                        <FaLinkedinIn size={16} />
                      </SocialButton>

                      <SocialButton
                        href={
                          portfolioData.personal
                            .github
                        }
                        label="GitHub"
                      >
                        <FaGithub size={16} />
                      </SocialButton>

                      <div className="ml-auto hidden items-center gap-2 font-mono text-[8px] tracking-[0.18em] text-slate-600 sm:flex">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inset-0 animate-ping rounded-full bg-green-400/50" />

                          <span className="relative h-1.5 w-1.5 rounded-full bg-green-400" />
                        </span>

                        SYSTEM ONLINE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                MOBILE INFO
            ================================================== */}

            <div className="mt-3 grid grid-cols-2 gap-2 lg:hidden">
              <MobileInfo
                label="STATUS"
                value="AVAILABLE"
                icon={
                  <CheckCircle2 size={14} />
                }
                className="text-green-400"
              />

              <MobileInfo
                label="EXPERIENCE"
                value="1.7+ YEARS"
                icon={
                  <BriefcaseBusiness
                    size={14}
                  />
                }
                className="text-cyan-400"
              />
            </div>

            {/* =================================================
                BOTTOM SCROLL
            ================================================== */}

            <div className="mt-4 flex items-center justify-center gap-2 pb-2">
              <span className="font-mono text-[7px] tracking-[0.3em] text-slate-700 transition-colors duration-500">
                {rotation < MAX_ROTATION
                  ? 'SCROLL TO ROTATE'
                  : 'SCROLL TO EXPLORE'}
              </span>

              <ArrowDown
                size={13}
                className={`text-slate-700 transition-transform duration-500 ${
                  rotation >= MAX_ROTATION
                    ? 'rotate-180'
                    : 'animate-bounce'
                }`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* =========================================================
   STATUS CARD
========================================================= */

function StatusCard({
  number,
  label,
  title,
  subtitle,
  icon,
  iconClass,
  borderClass,
}: {
  number: string
  label: string
  title: string
  subtitle: string
  icon: React.ReactNode
  iconClass: string
  borderClass: string
}) {
  return (
    <div
      className={`group rounded-3xl border bg-white/[0.035] p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055] hover:shadow-[0_10px_40px_rgba(34,211,238,0.05)] ${borderClass}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] tracking-[0.25em] text-slate-600">
          {number}
        </span>

        <span
          className={`transition-transform duration-300 group-hover:scale-110 ${iconClass}`}
        >
          {icon}
        </span>
      </div>

      <p className="mt-5 font-mono text-[8px] font-semibold tracking-[0.2em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-bold text-white">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-slate-500">
        {subtitle}
      </p>
    </div>
  )
}

/* =========================================================
   TECH ICON
========================================================= */

function TechIcon({
  icon,
  name,
  className,
}: {
  icon: React.ReactNode
  name: string
  className: string
}) {
  return (
    <div className="group flex min-w-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.025] px-2.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
      <span
        className={`transition-transform duration-300 group-hover:scale-110 ${className}`}
      >
        {icon}
      </span>

      <span className="truncate text-[9px] font-semibold text-slate-400">
        {name}
      </span>
    </div>
  )
}

/* =========================================================
   FLOATING BADGE
========================================================= */

function FloatingBadge({
  className,
  icon,
  text,
  color,
}: {
  className: string
  icon: React.ReactNode
  text: string
  color: string
}) {
  return (
    <div
      className={`absolute z-40 flex items-center gap-2 rounded-full border border-white/10 bg-[#080812]/90 px-3 py-2 font-mono text-[7px] font-semibold tracking-[0.15em] text-slate-400 shadow-[0_0_25px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)] sm:text-[8px] ${className}`}
    >
      <span className={color}>
        {icon}
      </span>

      {text}
    </div>
  )
}

/* =========================================================
   CONTACT ROW
========================================================= */

function ContactRow({
  icon,
  value,
  className,
}: {
  icon: React.ReactNode
  value: string
  className: string
}) {
  return (
    <div className="group flex min-w-0 items-center gap-3">
      <span
        className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${className}`}
      >
        {icon}
      </span>

      <span className="truncate font-mono text-[10px] text-slate-400 transition-colors duration-300 group-hover:text-slate-300 sm:text-xs">
        {value}
      </span>
    </div>
  )
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({
  href,
  children,
  label,
}: {
  href: string
  children: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05] hover:text-cyan-400 hover:shadow-[0_0_18px_rgba(34,211,238,0.1)]"
    >
      {children}
    </a>
  )
}

/* =========================================================
   MOBILE INFO
========================================================= */

function MobileInfo({
  label,
  value,
  icon,
  className,
}: {
  label: string
  value: string
  icon: React.ReactNode
  className: string
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.035] p-3 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] tracking-[0.2em] text-slate-600">
          {label}
        </span>

        <span
          className={`transition-transform duration-300 group-hover:scale-110 ${className}`}
        >
          {icon}
        </span>
      </div>

      <p className="mt-2 text-xs font-bold text-white">
        {value}
      </p>
    </div>
  )
}

export default Hero

