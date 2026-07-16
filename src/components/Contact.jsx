import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

const cards = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: '@' + profile.github.split('/').pop(),
    href: profile.github,
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Shankara Prasad Gudem',
    href: profile.linkedin,
    icon: FaLinkedin,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-surface-soft py-24 dark:bg-surface-darksoft lg:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Reach out directly — every card below opens straight to the right app."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ label, value, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="card group flex flex-col items-start gap-4 p-6 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:bg-primary-500/10 dark:text-primary-300">
                <Icon size={19} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-light/45 dark:text-ink-dark/45">
                  {label}
                </p>
                <p className="mt-1 break-words text-sm font-semibold">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-light/50 dark:text-ink-dark/50"
        >
          <MapPin size={14} /> Based in {profile.location} — open to remote & relocation
        </motion.div>
      </div>
    </section>
  )
}
