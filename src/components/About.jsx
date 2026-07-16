import { motion } from 'framer-motion'
import { Sparkles, Target, Code2 } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'
import { useCountUp } from '../hooks/useCountUp'

const stats = [
  { label: 'Years of building', value: 3, suffix: '+' },
  { label: 'Projects shipped', value: 6, suffix: '+' },
  { label: 'CGPA', value: 7.35, suffix: '', decimals: 2 },
  { label: 'Core technologies', value: 20, suffix: '+' },
]

function Stat({ stat }) {
  const { ref, value } = useCountUp(stat.value * (stat.decimals ? 100 : 1))
  const display = stat.decimals ? (value / 100).toFixed(stat.decimals) : value
  return (
    <div ref={ref} className="card p-5 text-center">
      <p className="text-2xl font-extrabold text-primary-600 dark:text-primary-300 sm:text-3xl">
        {display}
        {stat.suffix}
      </p>
      <p className="mt-1 text-xs text-ink-light/60 dark:text-ink-dark/60">{stat.label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-pad py-24 lg:py-32">
      <div className="container-max">
        <SectionHeading eyebrow="About Me" title="Engineering ideas into real software" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {profile.about.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mb-5 text-[15px] leading-relaxed text-ink-light/75 dark:text-ink-dark/75 sm:text-base"
              >
                {para}
              </motion.p>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Sparkles, text: 'AI/ML focused' },
                { icon: Code2, text: 'Full stack builder' },
                { icon: Target, text: 'Placement ready' },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="chip flex items-center gap-1.5 normal-case">
                  <Icon size={12} /> {text}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat) => (
              <Stat key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
