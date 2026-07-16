import { useEffect, useState } from 'react'

export default function TypingText({ words, typingSpeed = 55, deletingSpeed = 30, pause = 1600 }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  const current = words[index % words.length].slice(0, subIndex)

  return (
    <span className="inline-flex items-center">
      {current}
      <span className="ml-1 inline-block h-[1.1em] w-[2px] animate-pulse bg-primary-500 align-middle" />
    </span>
  )
}
