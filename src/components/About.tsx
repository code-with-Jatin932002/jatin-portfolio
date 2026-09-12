import {
  CalendarDays,
  Layers3,
  ShieldCheck,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080814] px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-purple-500/5 blur-[130px]" />
      </div>

      {/* Subtle grid */}
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
          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/5 px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.08)]">
            01 // PROFILE SUMMARY
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-5xl">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              My Professional Journey
            </span>
          </h2>

          {/* Underline */}
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </ScrollReveal>

        {/* =========================
            CONTENT
        ========================== */}
        <div className="mt-20 grid gap-6 lg:grid-cols-[1.4fr_1fr]">

          {/* =========================
              WHO I AM CARD
          ========================== */}
          <ScrollReveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-sm sm:p-10">

            {/* Left neon border */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500" />

            {/* Decorative background */}
            <div className="pointer-events-none absolute right-8 top-8 opacity-[0.045]">
              <span className="text-[180px] font-black leading-none text-white">
                {'</>'}
              </span>
            </div>

            <div className="relative">

              {/* Heading */}
              <div className="flex items-center gap-3">
                <div className="h-7 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                <h3 className="text-2xl font-bold text-white">
                  Who I Am
                </h3>
              </div>

              {/* First paragraph */}
              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                I&apos;m a{' '}
                <span className="font-semibold text-cyan-400">
                  Full Stack Developer
                </span>{' '}
               with 2+ years of experience working with React.js, Node.js, Next.js, and MySQL, building responsive, scalable, and production-ready web applications. My experience includes REST API development, authentication, AWS deployments, and collaborating with cross-functional teams to transform business requirements into reliable digital solutions.
              </p>

              {/* Second paragraph */}
              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
               Over the past 2+ years as a Full Stack Engineer, I’ve focused on designing high-performance APIs, creating pixel-perfect user interfaces, and deploying production-ready applications on reliable cloud platforms. I’m passionate about solving real-world problems, writing clean and maintainable code, and building products that deliver measurable value to clients and users.
              </p>

              {/* Tech highlights */}
              <div className="mt-8 flex flex-wrap gap-3">

                <TechBadge label="React.js" />

                <TechBadge label="Node.js" />

                <TechBadge label="TypeScript" />

                <TechBadge label="MongoDB" />

                <TechBadge label="PostgreSQL" />

                <TechBadge label="AWS" />

              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* =========================
              RIGHT STAT CARDS
          ========================== */}
          <div className="grid gap-5">

            {/* Experience */}
            <ScrollReveal delay={220} direction="right">
            <InfoCard
              icon={<CalendarDays size={25} />}
              value="2 +"
              label="YEARS EXPERIENCE"
              iconClass="border-cyan-400/10 bg-cyan-400/10 text-cyan-400"
              cardClass="border-cyan-400/30"
            />
            </ScrollReveal>

            {/* Full Stack */}
            <ScrollReveal delay={340} direction="right">
            <InfoCard
              icon={<Layers3 size={25} />}
              value="Full Stack"
              label="MERN STACK EXPERTISE"
              iconClass="border-purple-400/10 bg-purple-400/10 text-purple-400"
              cardClass="border-purple-400/30"
            />
            </ScrollReveal>

            {/* Scalable */}
            <ScrollReveal delay={460} direction="right">
            <InfoCard
              icon={<ShieldCheck size={25} />}
              value="Scalable"
              label="WEB APPLICATIONS"
              iconClass="border-green-400/10 bg-green-400/10 text-green-400"
              cardClass="border-green-400/30"
            />
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   INFO CARD
===================================================== */

function InfoCard({
  icon,
  value,
  label,
  iconClass,
  cardClass,
}: {
  icon: React.ReactNode
  value: string
  label: string
  iconClass: string
  cardClass: string
}) {
  return (
    <div
      className={`group flex min-h-[135px] items-center gap-5 rounded-3xl border bg-white/[0.035] px-7 py-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${cardClass}`}
    >
      {/* Icon */}
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border ${iconClass} transition duration-300 group-hover:scale-105`}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          {value}
        </h3>

        <p className="mt-2 font-mono text-xs font-semibold tracking-[0.2em] text-slate-400">
          {label}
        </p>
      </div>
    </div>
  )
}

/* =====================================================
   TECH BADGE
===================================================== */

function TechBadge({
  label,
}: {
  label: string
}) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-xs font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400">
      {label}
    </span>
  )
}

export default About