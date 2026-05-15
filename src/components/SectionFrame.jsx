import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function SectionFrame({
  id,
  eyebrow,
  index,
  children,
  className = '',
  bg = 'bg-ink-950'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.35, once: false })

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-screen w-full flex items-start lg:items-center overflow-hidden ${bg} ${className}`}
    >
      {(eyebrow || index) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease }}
          className="absolute top-10 left-8 md:left-16 lg:left-24 z-20 flex items-center gap-4"
        >
          {index && (
            <span className="font-display italic text-bone-300/70 text-sm">
              {index}
            </span>
          )}
          {eyebrow && (
            <span className="eyebrow flex items-center">
              <span className="rule" />
              {eyebrow}
            </span>
          )}
        </motion.div>
      )}
      <div className="w-full">{children}</div>
    </section>
  )
}

export { ease }
