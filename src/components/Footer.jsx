import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="section-pad border-t border-black/[0.06] py-10 dark:border-white/[0.08]">
      <div className="container-max flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-xs font-extrabold text-white">
            SP
          </span>
          <div>
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="text-xs text-ink-light/45 dark:text-ink-dark/45">
              Built with React, Tailwind CSS &amp; Framer Motion
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-light/60 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-ink-dark/60"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-light/60 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-ink-dark/60"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-light/60 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-ink-dark/60"
          >
            <Mail size={16} />
          </a>
          <Link
            to="home"
            smooth
            duration={500}
            aria-label="Back to top"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black/10 text-ink-light/60 transition-colors hover:border-primary-400 hover:text-primary-600 dark:border-white/15 dark:text-ink-dark/60"
          >
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-ink-light/35 dark:text-ink-dark/35">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
