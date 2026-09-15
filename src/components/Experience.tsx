import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

type ExperienceSide = 'left' | 'right'
type ExperienceColor = 'cyan' | 'purple'

interface Experience {
  role: string
  company: string
  date: string
  location: string
  side: ExperienceSide
  color: ExperienceColor
  points: string[]
}

const experiences: Experience[] = [
  {
    role: 'MERN Developer',
    company: 'SourceryIT',
    date: 'Mar 2025 - Present',
    location: 'Noida',
    side: 'left',
    color: 'cyan',
    points: [
      'Delivered scalable full-stack applications using React.js, Next.js, Node.js, and databases.',
      'Built secure authentication, REST APIs, dashboards, and role-based access control systems.',
      'Collaborated with cross-functional teams to deliver high-performance, production-ready features.',
    ],
  },
  {
    role: 'React.js Developer',
    company: 'Techmode Solutions Pvt Ltd',
    date: 'Jan 2024 - Dec 2024',
    location: 'Noida',
    side: 'right',
    color: 'purple',
    points: [
      'Developed responsive and pixel-perfect user interfaces using React.js, JavaScript, HTML, and CSS.',
      'Integrated REST APIs, implemented reusable components, and optimized application performance.',
      'Collaborated with developers and designers to deliver reliable web applications and business-focused features.',
    ],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080814] px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-80 w-80 rounded-full bg-purple-500/5 blur-[130px]" />

        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px]" />
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

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <ScrollReveal className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/5 px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            03 // HISTORY OF IMPACT
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              Experience
            </span>
          </h2>

          {/* Underline */}
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </ScrollReveal>

        {/* =========================
            EXPERIENCE TIMELINE
        ========================== */}

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Center timeline */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_12px_rgba(34,211,238,0.4)] md:block" />

          <div className="space-y-16 md:space-y-24">

            {experiences.map((experience, index) => (
              <ScrollReveal
                key={`${experience.company}-${experience.role}`}
                delay={index * 180}
                direction={
                  experience.side === 'left'
                    ? 'left'
                    : 'right'
                }
              >
                <ExperienceItem
                  experience={experience}
                  index={index}
                />
              </ScrollReveal>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   EXPERIENCE ITEM
===================================================== */

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience
  index: number
}) {
  const isLeft = experience.side === 'left'

  return (
    <div className="relative grid md:grid-cols-2 md:gap-20">

      {/* =========================
          EXPERIENCE CARD
      ========================== */}

      <div
        className={`${
          isLeft
            ? 'md:col-start-1 md:pr-0'
            : 'md:col-start-2 md:row-start-1 md:pl-0'
        }`}
      >
        <ExperienceCard experience={experience} />
      </div>

      {/* =========================
          DESKTOP TIMELINE DOT
      ========================== */}

      <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">

        {/* Outer ring */}
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full border-2 ${
            experience.color === 'cyan'
              ? 'border-cyan-400 bg-[#080814] shadow-[0_0_20px_rgba(34,211,238,0.6)]'
              : 'border-purple-400 bg-[#080814] shadow-[0_0_20px_rgba(168,85,247,0.6)]'
          }`}
        >
          {/* Inner dot */}
          <div
            className={`h-2.5 w-2.5 rounded-full ${
              experience.color === 'cyan'
                ? 'bg-cyan-400'
                : 'bg-purple-400'
            }`}
          />
        </div>
      </div>

      {/* =========================
          MOBILE TIMELINE
      ========================== */}

      <div className="mt-5 flex items-center gap-3 md:hidden">
        <div
          className={`h-3 w-3 shrink-0 rounded-full ${
            experience.color === 'cyan'
              ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]'
              : 'bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.7)]'
          }`}
        />

        <div
          className={`h-px flex-1 ${
            experience.color === 'cyan'
              ? 'bg-cyan-400/30'
              : 'bg-purple-400/30'
          }`}
        />
      </div>

      {/* Keep React aware of index */}
      <span className="hidden">{index}</span>
    </div>
  )
}

/* =====================================================
   EXPERIENCE CARD
===================================================== */

function ExperienceCard({
  experience,
}: {
  experience: Experience
}) {
  const isCyan = experience.color === 'cyan'

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border ${
        isCyan
          ? 'border-white/10 hover:border-cyan-400/30'
          : 'border-white/10 hover:border-purple-400/30'
      } bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] sm:p-8`}
    >
      {/* =========================
          CARD GLOW
      ========================== */}

      <div
        className={`pointer-events-none absolute -top-24 ${
          isCyan
            ? 'left-1/2 bg-cyan-400/5'
            : 'right-0 bg-purple-400/5'
        } h-48 w-48 rounded-full blur-[80px]`}
      />

      <div className="relative min-w-0">

        {/* =========================
            CARD HEADER
        ========================== */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          {/* Role + Company */}
          <div className="min-w-0">
            <h3 className="text-xl font-black text-white sm:text-2xl">
              {experience.role}
            </h3>

            <div
              className={`mt-2 flex items-center gap-2 text-sm font-semibold ${
                isCyan
                  ? 'text-cyan-400'
                  : 'text-purple-400'
              }`}
            >
              <BriefcaseBusiness
                size={15}
                className="shrink-0"
              />

              <span>{experience.company}</span>
            </div>
          </div>

          {/* =========================
              DATE + LOCATION
          ========================== */}

          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">

            {/* Date */}
            <div className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] font-medium text-slate-400">
              <CalendarDays
                size={13}
                className="shrink-0 text-purple-400"
              />

              <span className="whitespace-nowrap">
                {experience.date}
              </span>
            </div>

            {/* Location */}
            <div className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] font-medium text-slate-400">
              <MapPin
                size={13}
                className="shrink-0 text-green-400"
              />

              <span className="whitespace-nowrap">
                {experience.location}
              </span>
            </div>
          </div>
        </div>

        {/* =========================
            DESCRIPTION
        ========================== */}

        <div className="mt-7 space-y-4">

          {experience.points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
            >
              {/* Arrow */}
              <span
                className={`mt-1 shrink-0 text-lg font-bold ${
                  isCyan
                    ? 'text-cyan-400'
                    : 'text-purple-400'
                }`}
              >
                ›
              </span>

              <p>{point}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Experience