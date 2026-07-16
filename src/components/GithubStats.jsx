import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaCode } from 'react-icons/fa'
import { Users, GitFork, Star, BookMarked } from 'lucide-react'
import { profile, codingProfiles } from '../data/profile'
import SectionHeading from './SectionHeading'

const username = profile.github.split('/').filter(Boolean).pop()

export default function GithubStats() {
  const [data, setData] = useState(null)
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let ignore = false

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ])
        if (!userRes.ok) throw new Error('not found')
        const user = await userRes.json()
        const repoList = reposRes.ok ? await reposRes.json() : []
        if (!ignore) {
          setData(user)
          setRepos(Array.isArray(repoList) ? repoList : [])
          setStatus('ready')
        }
      } catch {
        if (!ignore) setStatus('error')
      }
    }
    load()
    return () => {
      ignore = true
    }
  }, [])

  return (
    <section id="github" className="section-pad py-24 lg:py-32">
      <div className="container-max">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub activity"
          description="Live snapshot of my public work, pulled straight from the GitHub API."
        />

        {status === 'loading' && (
          <div className="card flex flex-col items-center gap-3 p-12 text-center">
            <motion.div
              className="h-8 w-8 rounded-full border-2 border-primary-200 border-t-primary-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            />
            <p className="text-sm text-ink-light/60 dark:text-ink-dark/60">Fetching latest activity…</p>
          </div>
        )}

        {status === 'error' && (
          <div className="card flex flex-col items-center gap-3 p-12 text-center">
            <FaGithub size={28} className="text-ink-light/40 dark:text-ink-dark/40" />
            <p className="text-sm text-ink-light/60 dark:text-ink-dark/60">
              GitHub stats aren't available right now — but you can still explore the profile directly.
            </p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary mt-2">
              <FaGithub size={15} /> View GitHub Profile
            </a>
          </div>
        )}

        {status === 'ready' && data && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="card flex flex-col gap-6 p-7 sm:flex-row sm:items-center"
            >
              <img
                src={data.avatar_url}
                alt={data.name || username}
                className="h-20 w-20 rounded-2xl border border-black/[0.06] object-cover shadow-soft dark:border-white/[0.08]"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{data.name || username}</h3>
                <p className="text-sm text-ink-light/60 dark:text-ink-dark/60">
                  {data.bio || 'Software Engineer · AI/ML Enthusiast · Full Stack Developer'}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { label: 'Followers', value: data.followers ?? 0, icon: Users },
                  { label: 'Following', value: data.following ?? 0, icon: GitFork },
                  { label: 'Repos', value: data.public_repos ?? 0, icon: BookMarked },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="text-center">
                    <Icon size={15} className="mx-auto mb-1 text-primary-500" />
                    <p className="text-lg font-bold">{value}</p>
                    <p className="text-[11px] text-ink-light/50 dark:text-ink-dark/50">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {repos.length > 0 && (
              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="card block p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="truncate text-sm font-semibold">{repo.name}</h4>
                      <Star size={13} className="flex-shrink-0 text-yellow-500" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs text-ink-light/55 dark:text-ink-dark/55">
                      {repo.description || 'No description provided.'}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-ink-light/45 dark:text-ink-dark/45">
                      <span className="mono">{repo.language || '—'}</span>
                      <span>★ {repo.stargazers_count}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {codingProfiles.map((cp, i) => (
            <motion.div
              key={cp.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card flex items-center gap-4 p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                <FaCode size={17} />
              </div>
              <div>
                <p className="text-sm font-semibold">{cp.label}</p>
                <p className="text-xs text-ink-light/50 dark:text-ink-dark/50">{cp.handle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
