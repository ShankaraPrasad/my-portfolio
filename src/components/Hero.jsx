import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import TypingText from './TypingText'
import CodeWorkspace from './CodeWorkspace'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-light bg-grid dark:bg-grid-dark"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="container-max section-pad relative z-10 grid grid-cols-1 items-center gap-16 pt-28 pb-20 lg:grid-cols-2 lg:pt-24">
        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0} className="eyebrow mb-5">
            Available for full-time & internship roles
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <br className="hidden sm:block" />
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mono mt-5 h-8 text-lg font-medium text-primary-600 dark:text-primary-300 sm:text-xl"
          >
            <TypingText words={profile.roles} />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-light/70 dark:text-ink-dark/70 sm:text-[17px]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-9 flex flex-wrap gap-3">
            <Link to="projects" smooth duration={500} offset={-80} className="btn-primary cursor-pointer">
              View Projects <ArrowRight size={16} />
            </Link>
            <a href={profile.resumeUrl} download className="btn-secondary">
              <Download size={16} /> Download Resume
            </a>
            <Link to="contact" smooth duration={500} offset={-80} className="btn-secondary cursor-pointer">
              <Mail size={16} /> Contact Me
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ink-light/70 transition-all hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-ink-dark/70 dark:hover:text-primary-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-ink-light/70 transition-all hover:-translate-y-0.5 hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-ink-dark/70 dark:hover:text-primary-300"
            >
              <FaLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <CodeWorkspace />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="mono text-[10px] uppercase tracking-[0.25em] text-ink-light/40 dark:text-ink-dark/40">scroll</span>
        <div className="h-9 w-5 rounded-full border border-black/15 dark:border-white/20">
          <motion.div
            className="mx-auto mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
