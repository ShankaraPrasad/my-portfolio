import { useEffect, useState } from 'react'

export function useActiveSection(ids, offset = 160) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return active
}
