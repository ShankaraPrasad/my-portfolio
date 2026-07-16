import { motion } from 'framer-motion'
import { skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface-soft py-24 dark:bg-surface-darksoft lg:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A toolkit spanning programming languages, full stack web development, and applied machine learning."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold text-primary-600 dark:text-primary-300">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="rounded-lg border border-black/[0.06] bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-light/80 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-ink-dark/80"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
