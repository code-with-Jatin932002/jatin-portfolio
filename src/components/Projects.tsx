import {
  ExternalLink,
  Layers3,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import ScrollReveal from './ScrollReveal'
import {
  projects,
  type Project,
} from '../data/portfolio'

const PROJECT_SCROLL_KEY =
  'portfolio-project-scroll-position'

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05050d] px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-[140px]" />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <ScrollReveal className="text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 font-mono text-xs font-bold tracking-[0.2em] text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
            04 // SHOWCASE
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              Engineering Projects
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
        </ScrollReveal>

        {/* Project grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.number}
              delay={index * 120}
              className="h-full"
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: Project
}) {
  const accentClasses = {
    cyan: {
      top: 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500',
      icon: 'border-cyan-400/20 bg-cyan-400/5 text-cyan-400',
      hover: 'hover:border-cyan-400/30',
      glow: 'bg-cyan-400/5',
      title: 'text-cyan-400',
    },

    purple: {
      top: 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500',
      icon: 'border-purple-400/20 bg-purple-400/5 text-purple-400',
      hover: 'hover:border-purple-400/30',
      glow: 'bg-purple-400/5',
      title: 'text-purple-400',
    },

    green: {
      top: 'bg-gradient-to-r from-cyan-400 via-green-400 to-lime-400',
      icon: 'border-green-400/20 bg-green-400/5 text-green-400',
      hover: 'hover:border-green-400/30',
      glow: 'bg-green-400/5',
      title: 'text-green-400',
    },
  }

  const styles = accentClasses[project.accent]

  const handleProjectClick = () => {
    sessionStorage.setItem(
      PROJECT_SCROLL_KEY,
      String(window.scrollY),
    )
  }

  const handleLiveProjectClick = (
    event: React.MouseEvent<HTMLSpanElement>,
  ) => {
    event.preventDefault()
    event.stopPropagation()

    if (project.live && project.live !== '#') {
      window.open(
        project.live,
        '_blank',
        'noopener,noreferrer',
      )
    }
  }

  const handleLiveProjectKeyDown = (
    event: React.KeyboardEvent<HTMLSpanElement>,
  ) => {
    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault()
      event.stopPropagation()

      if (project.live && project.live !== '#') {
        window.open(
          project.live,
          '_blank',
          'noopener,noreferrer',
        )
      }
    }
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      onClick={handleProjectClick}
      aria-label={`View ${project.title} project details`}
      className="block h-full"
    >
      <article
        className={`group relative flex h-full min-h-[445px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${styles.hover}`}
      >
        {/* Neon top border */}
        <div
          className={`absolute left-0 right-0 top-0 h-1.5 ${styles.top}`}
        />

        {/* Hover glow */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-[90px] transition-opacity duration-300 group-hover:opacity-100 ${styles.glow}`}
        />

        {/* Card content */}
        <div className="relative flex h-full flex-col p-7">
          {/* Card header */}
          <div className="flex items-center justify-between">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${styles.icon}`}
            >
              <Layers3 size={21} />
            </div>

            <span className="font-mono text-xs font-semibold tracking-wider text-slate-500">
              PROJECT // {project.number}
            </span>
          </div>

          {/* Project title */}
          <h3
            className={`mt-7 text-2xl font-black tracking-tight ${styles.title}`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-slate-300">
            {project.description}
          </p>

          {/* Bottom section */}
          <div className="mt-auto pt-7">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 6)
                .map((technology) => (
                  <span
                    key={technology}
                    className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-xs font-medium text-slate-300 transition group-hover:border-white/20 group-hover:text-white"
                  >
                    {technology}
                  </span>
                ))}

              {project.technologies.length > 6 && (
                <span className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-xs font-medium text-slate-500">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>

            {/* View project + Live Project */}
            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
              <span className="font-mono text-[10px] tracking-[0.15em] text-slate-500 transition group-hover:text-cyan-400">
                VIEW PROJECT
              </span>

              {project.live &&
                project.live !== '#' && (
                  <span
                    role="link"
                    tabIndex={0}
                    onClick={handleLiveProjectClick}
                    onKeyDown={
                      handleLiveProjectKeyDown
                    }
                    aria-label="Open live project"
                    title="Live Project"
                    className="group/live relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    <ExternalLink size={17} />

                    <span className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0b16] px-2.5 py-1.5 font-mono text-[10px] text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover/live:opacity-100">
                      Live Project
                    </span>
                  </span>
                )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Projects