import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-pad py-24 lg:py-32">
      <div className="container-max">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                <GraduationCap size={20} />
              </div>
              <h3 className="mt-5 text-lg font-bold leading-snug">{item.school}</h3>
              <p className="mt-1.5 text-sm text-ink-light/65 dark:text-ink-dark/65">{item.degree}</p>
              <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4 dark:border-white/[0.08]">
                <span className="mono text-xs text-ink-light/50 dark:text-ink-dark/50">{item.period}</span>
                <span className="chip">{item.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
