import { motion } from 'framer-motion'
import { FaReact, FaPython, FaGithub, FaJava } from 'react-icons/fa'
import { SiTensorflow, SiFastapi, SiPostgresql, SiTailwindcss } from 'react-icons/si'

const icons = [
  { Icon: FaReact, className: 'top-2 left-6 sm:left-2', color: 'text-sky-500', delay: 0 },
  { Icon: SiTensorflow, className: 'top-16 -right-3 sm:right-0', color: 'text-orange-500', delay: 0.6 },
  { Icon: SiFastapi, className: 'bottom-24 -left-4 sm:-left-6', color: 'text-teal-500', delay: 1.1 },
  { Icon: FaPython, className: 'bottom-4 right-8', color: 'text-yellow-500', delay: 1.6 },
  { Icon: SiPostgresql, className: 'top-1/2 -right-6 hidden sm:block', color: 'text-blue-500', delay: 0.3 },
  { Icon: FaJava, className: 'top-1/3 -left-8 hidden sm:block', color: 'text-red-500', delay: 0.9 },
]

const codeLines = [
  { indent: 0, text: 'class SoftwareEngineer:', color: 'text-primary-400' },
  { indent: 1, text: 'def __init__(self):', color: 'text-primary-400' },
  { indent: 2, text: 'self.stack = ["React", "FastAPI"]', color: 'text-ink-light/70 dark:text-ink-dark/70' },
  { indent: 2, text: 'self.focus = "AI + Full Stack"', color: 'text-ink-light/70 dark:text-ink-dark/70' },
  { indent: 1, text: 'def build(self, idea):', color: 'text-primary-400' },
  { indent: 2, text: 'return solve(idea, with_care=True)', color: 'text-emerald-500' },
]

export default function CodeWorkspace() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[480px]">
      {/* gradient blobs */}
      <div className="absolute -top-10 -left-6 h-56 w-56 rounded-full bg-primary-400/30 blur-3xl animate-blob" aria-hidden="true" />
      <div
        className="absolute -bottom-10 -right-4 h-64 w-64 rounded-full bg-violet-400/25 blur-3xl animate-blob"
        style={{ animationDelay: '3s' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl animate-blob"
        style={{ animationDelay: '6s' }}
        aria-hidden="true"
      />

      {/* floating tech icons */}
      {icons.map(({ Icon, className, color, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute z-20 flex h-11 w-11 items-center justify-center rounded-xl glass shadow-soft ${className}`}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
        >
          <Icon className={`h-5 w-5 ${color}`} />
        </motion.div>
      ))}

      {/* code window */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ rotate: 0, y: -6 }}
        className="relative z-10 w-[88%] rounded-2xl border border-black/[0.06] bg-white/90 shadow-soft-lg backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#12121A]/90"
      >
        <div className="flex items-center gap-1.5 rounded-t-2xl border-b border-black/[0.06] px-4 py-3 dark:border-white/[0.08]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="mono ml-2 text-[11px] text-ink-light/40 dark:text-ink-dark/40">engineer.py</span>
        </div>
        <div className="mono space-y-2 p-5 text-[12.5px] leading-relaxed sm:text-[13px]">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.14, duration: 0.4 }}
              style={{ paddingLeft: `${line.indent * 16}px` }}
              className={line.color}
            >
              {line.text}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-2 left-1/2 z-0 flex -translate-x-1/2 items-center gap-1.5 rounded-full glass px-3 py-1.5 shadow-soft"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <FaGithub className="h-3.5 w-3.5 text-ink-light/70 dark:text-ink-dark/70" />
        <span className="mono text-[11px] text-ink-light/60 dark:text-ink-dark/60">building in public</span>
      </motion.div>
    </div>
  )
}
