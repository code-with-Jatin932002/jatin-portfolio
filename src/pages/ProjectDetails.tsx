import {
  useLayoutEffect,
  type ReactNode,
} from 'react'

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  Workflow,
} from 'lucide-react'

import {
  useNavigate,
  useParams,
} from 'react-router-dom'

import { projects } from '../data/portfolio'

function ProjectDetails() {
  const { slug } = useParams<{
    slug: string
  }>()

  const navigate = useNavigate()

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [slug])

  const handleBackToProjects = () => {
    navigate('/')
  }

  const project = projects.find(
    (item) => item.slug === slug,
  )

  if (!project) {
    return (
      <main className="min-h-screen bg-[#05050d] px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mt-5 text-4xl font-black">
            Project not found
          </h1>

          <button
            type="button"
            onClick={handleBackToProjects}
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
      </main>
    )
  }

  const accentClasses = {
    cyan: {
      badge:
        'border-cyan-400/30 bg-cyan-400/5 text-cyan-400',
      glow: 'bg-cyan-400/10',
      gradient:
        'from-cyan-400 via-blue-400 to-purple-500',
      line: 'bg-cyan-400',
    },

    purple: {
      badge:
        'border-purple-400/30 bg-purple-400/5 text-purple-400',
      glow: 'bg-purple-400/10',
      gradient:
        'from-purple-500 via-fuchsia-500 to-pink-500',
      line: 'bg-purple-400',
    },

    green: {
      badge:
        'border-green-400/30 bg-green-400/5 text-green-400',
      glow: 'bg-green-400/10',
      gradient:
        'from-cyan-400 via-green-400 to-lime-400',
      line: 'bg-green-400',
    },
  }

  const styles = accentClasses[project.accent]

  return (
    <main className="min-h-screen overflow-hidden bg-[#05050d] text-white">
      {/* PROJECT HERO */}
      <section className="relative border-b border-white/[0.06]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div
          className={`pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full blur-[130px] ${styles.glow}`}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <button
            type="button"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 transition hover:text-cyan-400"
          >
            <ArrowLeft size={15} />
            BACK TO PROJECTS
          </button>

          <div className="mt-14 max-w-5xl">
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] ${styles.badge}`}
            >
              <Layers3 size={14} />
              PROJECT // {project.number}
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <div
              className={`mt-7 h-1.5 w-32 rounded-full bg-gradient-to-r ${styles.gradient}`}
            />

            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300 sm:text-xl">
              {project.description}
            </p>

            {project.live &&
              project.live !== '#' && (
                <div className="mt-9">
                  <ExternalProjectButton
                    href={project.live}
                    icon={
                      <ExternalLink size={17} />
                    }
                    label="Live Project"
                    primary
                  />
                </div>
              )}
          </div>
        </div>
      </section>

      {/* PROJECT CONTENT */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              <DetailSection
                number="01"
                title="Overview"
                accent={styles.line}
              >
                <p>{project.overview}</p>
              </DetailSection>

              <DetailSection
                number="02"
                title="Problem"
                accent={styles.line}
              >
                <p>{project.problem}</p>
              </DetailSection>

              <DetailSection
                number="03"
                title="Tech Stack"
                accent={styles.line}
              >
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 font-mono text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>
              </DetailSection>

              <DetailSection
                number="04"
                title="Key Features"
                accent={styles.line}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.keyFeatures.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />

                        <span className="text-sm leading-6 text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </DetailSection>

              <DetailSection
                number="05"
                title="Role & Access"
                accent={styles.line}
              >
                <div className="space-y-3">
                  {project.roleAccess.map(
                    (role) => (
                      <div
                        key={role}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 text-sm leading-6 text-slate-300"
                      >
                        {role}
                      </div>
                    ),
                  )}
                </div>
              </DetailSection>

              <DetailSection
                number="06"
                title="System Workflow"
                accent={styles.line}
              >
                <div className="space-y-4">
                  {project.workflow.map(
                    (step, index) => (
                      <div
                        key={step}
                        className="flex items-start gap-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/5 font-mono text-xs text-cyan-400">
                          {String(
                            index + 1,
                          ).padStart(2, '0')}
                        </div>

                        <div className="flex min-h-8 items-center text-sm leading-6 text-slate-300">
                          {step}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </DetailSection>

              <DetailSection
                number="07"
                title="My Contribution"
                accent={styles.line}
              >
                <div className="space-y-4">
                  {project.contribution.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <ArrowUpRight
                          size={17}
                          className="mt-1 shrink-0 text-purple-400"
                        />

                        <span>{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </DetailSection>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${styles.badge}`}
                  >
                    <Workflow size={20} />
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-widest text-slate-500">
                      PROJECT
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Technical Details
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                    TECHNOLOGIES
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-xs text-slate-300"
                        >
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
                    ARCHITECTURE
                  </p>

                  <div className="mt-4 space-y-3">
                    {project.architecture.map(
                      (item) => (
                        <div
                          key={item}
                          className="border-l border-white/10 pl-3 text-xs leading-5 text-slate-400"
                        >
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="border-t border-white/[0.08] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-slate-500 transition hover:text-cyan-400"
          >
            <ArrowLeft size={15} />
            BACK TO ALL PROJECTS
          </button>

          {project.live &&
            project.live !== '#' && (
              <ExternalProjectButton
                href={project.live}
                icon={
                  <ExternalLink size={16} />
                }
                label="Live Project"
                primary
              />
            )}
        </div>
      </section>
    </main>
  )
}

/* DETAIL SECTION */

function DetailSection({
  number,
  title,
  accent,
  children,
}: {
  number: string
  title: string
  accent: string
  children: ReactNode
}) {
  return (
    <section className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
      <div className="flex items-center gap-4">
        <div
          className={`h-8 w-1 rounded-full ${accent}`}
        />

        <span className="font-mono text-xs tracking-widest text-slate-600">
          {number}
        </span>

        <h2 className="text-2xl font-black text-white">
          {title}
        </h2>
      </div>

      <div className="mt-6 text-sm leading-7 text-slate-300">
        {children}
      </div>
    </section>
  )
}

/* EXTERNAL PROJECT BUTTON */

function ExternalProjectButton({
  href,
  icon,
  label,
  primary = false,
}: {
  href: string
  icon: ReactNode
  label: string
  primary?: boolean
}) {
  const isAvailable =
    href && href !== '#'

  if (!isAvailable) {
    return null
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${
        primary
          ? 'border-purple-400/30 bg-purple-400/5 text-white hover:border-purple-400 hover:text-purple-300'
          : 'border-white/10 bg-white/[0.04] text-white hover:border-cyan-400/40 hover:text-cyan-400'
      }`}
    >
      {icon}
      {label}
    </a>
  )
}

export default ProjectDetails