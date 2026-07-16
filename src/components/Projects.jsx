import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/profile'
import SectionHeading from './SectionHeading'

function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -6, y: x * 6 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="card group flex flex-col overflow-hidden transition-transform duration-200 ease-out"
    >
      <div className={`relative h-40 bg-gradient-to-br ${project.accent} p-6`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.35),transparent_60%)]" />
        <span className="mono relative rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-light/65 dark:text-ink-dark/65">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip normal-case">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-black/10 py-2.5 text-sm font-semibold transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:hover:text-primary-300"
          >
            <FaGithub size={15} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-500 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [])
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section-pad bg-surface-soft py-24 dark:bg-surface-darksoft lg:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Things I've built"
          description="Selected work spanning AI/ML, full stack web apps, and applied engineering."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-primary-500 text-white shadow-glow'
                  : 'border border-black/10 text-ink-light/70 hover:border-primary-400 dark:border-white/15 dark:text-ink-dark/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
