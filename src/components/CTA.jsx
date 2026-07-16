import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-pad py-20">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-primary-500 px-8 py-16 text-center shadow-glow sm:px-16"
        >
          <div className="pointer-events-none absolute -top-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl" />

          <h2 className="relative text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let's Build Something Amazing Together.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base">
            I'm always excited to collaborate on innovative projects, discuss technology, or explore new
            opportunities. Feel free to reach out!
          </p>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="relative mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary-600 shadow-soft-lg transition-transform hover:-translate-y-0.5"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
