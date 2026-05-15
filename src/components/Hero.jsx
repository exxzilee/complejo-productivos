import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { presenters } from '../data/slides'
import ScrollIndicator from './ScrollIndicator'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full flex items-end overflow-hidden bg-ink-950 grain vignette"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1568347355280-d33fdf77d42a?w=2400&q=85&auto=format&fit=crop"
          alt="Arrozal inundado al amanecer"
          className="w-full h-full object-cover cinema-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-8 md:px-16 lg:px-24 pb-16 md:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="eyebrow flex items-center text-bone-50/90">
            <span className="rule bg-gold-accent/80" />
            Economías regionales · Argentina
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.5 }}
          className="font-display font-light leading-[0.95] tracking-tight text-bone-50 max-w-6xl"
          style={{ fontSize: 'clamp(3rem, 8vw, 8.5rem)' }}
        >
          El{' '}
          <span className="italic font-normal text-gold-glow">Complejo</span>
          <br />
          Productivo del Arroz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1 }}
          className="mt-8 max-w-xl text-bone-100/80 text-lg md:text-xl font-light leading-relaxed"
        >
          Un recorrido por la cadena productiva que sostiene una de las
          economías regionales más importantes del litoral argentino.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 1.4 }}
          className="mt-8 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6"
        >
          <div>
            <span className="eyebrow text-bone-300">Expositores</span>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-bone-50 font-display text-xl md:text-2xl">
              {presenters.map((p, i) => (
                <span key={p}>
                  {p}
                  {i < presenters.length - 1 && (
                    <span className="ml-8 text-gold-accent/60">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <span className="eyebrow text-bone-300">Mayo · 2026</span>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  )
}
