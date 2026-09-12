import {
  Cloud,
  Cpu,
  Database,
  Server,
  Star,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const skillGroups = [
  {
    title: 'Frontend',
    subtitle: 'CLIENT LAYER',
    count: '7 Items',
    icon: Cpu,
    iconClass: 'bg-cyan-400/10 text-cyan-400',
    borderClass: 'hover:border-cyan-400/30',
    skills: [
      { name: 'React.js', color: 'text-cyan-400' },
      { name: 'Next.js', color: 'text-white' },
      { name: 'TypeScript', color: 'text-blue-400' },
      { name: 'JavaScript ES6+', color: 'text-yellow-400' },
      { name: 'Tailwind CSS', color: 'text-cyan-400' },
      { name: 'HTML5', color: 'text-orange-400' },
      { name: 'CSS', color: 'text-blue-400' },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'LOGIC LAYER',
    count: '5 Items',
    icon: Server,
    iconClass: 'bg-purple-400/10 text-purple-400',
    borderClass: 'hover:border-purple-400/30',
    skills: [
      { name: 'Node.js', color: 'text-green-400' },
      { name: 'Express.js', color: 'text-purple-400' },
      { name: 'REST APIs', color: 'text-purple-400' },
      { name: 'JWT Authentication', color: 'text-purple-400' },
      { name: 'Authorization', color: 'text-purple-400' },
    ],
  },
  {
    title: 'Database',
    subtitle: 'STORAGE LAYER',
    count: '3 Items',
    icon: Database,
    iconClass: 'bg-green-400/10 text-green-400',
    borderClass: 'hover:border-green-400/30',
    skills: [
      { name: 'MongoDB', color: 'text-green-400' },
      { name: 'MySQL', color: 'text-cyan-400' },
      { name: 'PostgreSQL', color: 'text-blue-400' },
    ],
  },
  {
    title: 'Cloud & Tools',
    subtitle: 'DEPLOYMENT & COLLAB',
    count: '9 Items',
    icon: Cloud,
    iconClass: 'bg-pink-400/10 text-pink-400',
    borderClass: 'hover:border-pink-400/30',
    skills: [
      { name: 'AWS EC2', color: 'text-yellow-400' },
      { name: 'AWS S3', color: 'text-yellow-400' },
      { name: 'Kamatera Cloud', color: 'text-cyan-400' },
      { name: 'Render', color: 'text-purple-400' },
      { name: 'Vercel', color: 'text-white' },
      { name: 'Git', color: 'text-green-400' },
      { name: 'GitHub', color: 'text-green-400' },
      { name: 'Postman', color: 'text-orange-400' },
      { name: 'Jira', color: 'text-blue-400' },
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#05050d] px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-[130px]" />

        <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-purple-500/5 blur-[140px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================== */}

        <ScrollReveal className="text-center">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
            02 // TECHNICAL WEAPONRY
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-5xl">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              Technical Stack &amp; Tools
            </span>
          </h2>

          {/* Underline */}
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 shadow-[0_0_15px_rgba(34,211,238,0.45)]" />
        </ScrollReveal>

        {/* =========================
            SKILL GRID
        ========================== */}

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <ScrollReveal
              key={group.title}
              delay={index * 140}
              className="h-full"
            >
              <SkillCard
                title={group.title}
                subtitle={group.subtitle}
                count={group.count}
                icon={group.icon}
                iconClass={group.iconClass}
                borderClass={group.borderClass}
                skills={group.skills}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =====================================================
   SKILL CARD
===================================================== */

function SkillCard({
  title,
  subtitle,
  count,
  icon: Icon,
  iconClass,
  borderClass,
  skills,
}: {
  title: string
  subtitle: string
  count: string
  icon: typeof Cpu
  iconClass: string
  borderClass: string
  skills: {
    name: string
    color: string
  }[]
}) {
  return (
    <div
      className={`group relative h-full min-h-[325px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${borderClass}`}
    >
      {/* Card glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/5 blur-[80px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* =========================
          CARD HEADER
      ========================== */}

      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">

        <div className="flex items-center gap-4">

          {/* Icon */}
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-2xl ${iconClass}`}
          >
            <Icon size={22} />
          </div>

          {/* Title */}
          <div>
            <h3 className="text-xl font-bold text-white">
              {title}
            </h3>

            <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-slate-500">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Count */}
        <span className="font-mono text-xs font-semibold text-slate-400">
          {count}
        </span>
      </div>

      {/* =========================
          SKILL BADGES
      ========================== */}

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge
            key={skill.name}
            name={skill.name}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  )
}

/* =====================================================
   SKILL BADGE
===================================================== */

function SkillBadge({
  name,
  color,
}: {
  name: string
  color: string
}) {
  return (
    <div className="group/badge inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-[#080811] px-4 py-2.5 font-mono text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]">

      {/* Icon */}
      {name === 'TypeScript' ? (
        <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-blue-500 text-[9px] font-black text-white">
          TS
        </span>
      ) : name === 'JavaScript ES6+' ? (
        <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-yellow-400 text-[9px] font-black text-black">
          JS
        </span>
      ) : name === 'Next.js' ? (
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-black">
          N
        </span>
      ) : (
        <Star
          size={13}
          className={`${color} transition-transform duration-200 group-hover/badge:scale-110`}
        />
      )}

      <span>{name}</span>
    </div>
  )
}

export default Skills