import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-light dark:bg-surface-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-500 text-2xl font-extrabold text-white shadow-glow"
            initial={{ scale: 0.7, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            SP
            <motion.span
              className="absolute inset-0 rounded-2xl border border-primary-300"
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.p
            className="mono mt-6 text-xs uppercase tracking-[0.3em] text-primary-500"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            compiling portfolio…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
