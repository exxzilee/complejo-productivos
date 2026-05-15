import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function RevealText({
  text,
  as = 'h2',
  className = '',
  style,
  delay = 0,
  stagger = 0.05
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })
  const words = text.split(' ')
  const MotionTag = motion[as] || motion.h2

  return (
    <MotionTag
      ref={ref}
      aria-label={text}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
      }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em] pb-[0.08em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: { y: '0%', opacity: 1, transition: { duration: 0.9, ease } }
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
