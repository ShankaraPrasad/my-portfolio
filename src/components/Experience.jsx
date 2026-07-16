import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-pad py-24 lg:py-32">
      <div className="container-max">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative border-l border-black/10 pl-8 dark:border-white/10 sm:pl-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[42px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white shadow-glow sm:-left-[50px]">
                <Briefcase size={14} />
              </span>

              <div className="card p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  <span className="chip">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-300">{item.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-light/70 dark:text-ink-dark/70">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
