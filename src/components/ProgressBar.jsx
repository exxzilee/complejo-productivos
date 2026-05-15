import { motion, useScroll, useSpring } from 'framer-motion'

export default function ProgressBar({ target }) {
  const { scrollYProgress } = useScroll({ container: target })
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-bone-50/[0.04]">
      <motion.div
        style={{ scaleX, transformOrigin: '0% 50%' }}
        className="h-full bg-gradient-to-r from-emerald-accent via-gold-accent to-gold-glow"
      />
    </div>
  )
}
