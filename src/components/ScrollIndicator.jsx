import { motion } from 'framer-motion'

export default function ScrollIndicator({ label = 'Desliza para descubrir' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-bone-300"
    >
      <span className="eyebrow">{label}</span>
      <motion.div
        className="w-[1px] h-12 bg-gradient-to-b from-bone-300/60 to-transparent"
        animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
