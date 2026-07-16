import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    const el = ref.current
    let raf
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${e.clientX - 220}px, ${e.clientY - 220}px)`
        }
      })
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[440px] w-[440px] rounded-full bg-primary-500/[0.06] blur-[90px] transition-transform duration-300 ease-out will-change-transform sm:block dark:bg-primary-400/[0.08]"
      aria-hidden="true"
    />
  )
}
