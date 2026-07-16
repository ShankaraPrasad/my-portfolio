import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'
import { certifications, currentlyLearning } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-surface-soft py-24 dark:bg-surface-darksoft lg:py-32">
      <div className="container-max">
        <SectionHeading eyebrow="Certifications" title="Credentials I've earned" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card flex items-start gap-4 p-6"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                <Award size={19} />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-snug">{cert.title}</h3>
                <p className="mt-1 text-xs text-ink-light/55 dark:text-ink-dark/55">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-2.5">
            <BookOpen size={18} className="text-primary-500" />
            <h3 className="text-lg font-bold">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentlyLearning.map((topic, i) => (
              <motion.span
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="rounded-full border border-primary-200 bg-white/70 px-4 py-2 text-sm font-medium text-primary-700 shadow-sm dark:border-primary-500/25 dark:bg-white/[0.04] dark:text-primary-300"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
