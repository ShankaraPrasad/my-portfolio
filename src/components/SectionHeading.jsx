import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-light/65 dark:text-ink-dark/65 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  )
}
