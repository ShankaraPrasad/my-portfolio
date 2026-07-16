import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X, Moon, Sun, Download } from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection(navLinks.map((l) => l.to))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`container-max section-pad flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass mx-4 sm:mx-6 lg:mx-10 xl:mx-16 shadow-soft px-5 py-2.5' : 'px-0'
        }`}
      >
        <Link
          to="home"
          smooth
          duration={500}
          className="flex cursor-pointer items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-sm font-extrabold text-white shadow-glow">
            SP
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name.split(' ')[0]} {profile.name.split(' ')[1]}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-90}
              spy={false}
              className={`relative cursor-pointer rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                active === link.to
                  ? 'text-primary-600 dark:text-primary-300'
                  : 'text-ink-light/70 hover:text-ink-light dark:text-ink-dark/70 dark:hover:text-ink-dark'
              }`}
            >
              {link.label}
              {active === link.to && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-primary-50 dark:bg-primary-500/10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-light transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-ink-dark dark:hover:text-primary-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-1.5 rounded-full bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Download size={15} /> Resume
          </a>

          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-3 overflow-hidden rounded-2xl glass shadow-soft-lg lg:hidden"
          >
            <div className="flex flex-col p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className={`cursor-pointer rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active === link.to
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300'
                      : 'text-ink-light/80 dark:text-ink-dark/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-primary-500 px-4 py-3 text-sm font-semibold text-white"
              >
                <Download size={15} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
