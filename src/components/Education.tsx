import {
  Award,
  CalendarDays,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#05050d] px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]" />

        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      {/* =========================
          GRID BACKGROUND
      ========================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <ScrollReveal className="text-center">

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/5 px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            05 // ACADEMIC FOUNDATIONS
          </div>

          {/* Heading */}

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Education{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              &amp; Qualifications
            </span>
          </h2>

          {/* Underline */}

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </ScrollReveal>

        {/* =========================
            EDUCATION CARD
        ========================== */}

        <ScrollReveal delay={160} className="mx-auto mt-20 max-w-4xl">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/[0.16] via-blue-400/[0.08] to-purple-500/[0.16] shadow-[0_0_40px_rgba(34,211,238,0.04)] transition-all duration-300 hover:border-cyan-400/30">

            {/* Neon left border */}

            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />

            {/* Background glow */}

            <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

            {/* Card content */}

            <div className="relative grid gap-8 p-8 sm:p-10 md:grid-cols-[1fr_190px] md:items-center">

              {/* =========================
                  LEFT SIDE
              ========================== */}

              <div>

                {/* Graduation icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                  <GraduationCap size={27} />
                </div>

                {/* Degree */}

                <h3 className="mt-6 text-2xl font-black tracking-tight text-white sm:text-3xl">
                  B.Tech in Computer Science
                </h3>

                {/* College */}

                <p className="mt-3 text-base font-bold text-slate-300 sm:text-lg">
                  Krishna Engineering College
                </p>

                {/* Meta information */}

                <div className="mt-6 flex flex-wrap gap-3">

                  {/* Location */}

                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-xs text-slate-300">
                    <MapPin
                      size={15}
                      className="text-purple-400"
                    />
                    Ghaziabad
                  </div>

                  {/* Duration */}

                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2 font-mono text-xs text-slate-300">
                    <CalendarDays
                      size={15}
                      className="text-green-400"
                    />
                    Aug 2021 - July 2024
                  </div>
                </div>
              </div>

              {/* =========================
                  CGPA CARD
              ========================== */}

              <div className="mx-auto flex w-full max-w-[190px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#0a0917]/80 px-6 py-7 text-center shadow-[0_0_35px_rgba(0,0,0,0.25)] backdrop-blur-sm">

                {/* Award icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/25 bg-green-400/5 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.08)]">
                  <Award size={23} />
                </div>

                {/* CGPA */}

                <div className="mt-5 text-4xl font-black leading-none text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.35)]">
                  7
                </div>

                <div className="mt-2 text-2xl font-black text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.25)]">
                  CGPA
                </div>

                {/* Label */}

                <p className="mt-4 font-mono text-[9px] font-bold tracking-[0.25em] text-slate-400">
                  ACADEMIC SCORE
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Education