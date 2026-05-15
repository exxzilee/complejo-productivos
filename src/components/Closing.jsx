import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { presenters } from '../data/slides'

const ease = [0.22, 1, 0.36, 1]

export default function Closing() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })

  return (
    <section
      id="cierre"
      ref={ref}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-ink-950 grain vignette"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530507629858-e3759c1c1a3b?w=2400&q=85&auto=format&fit=crop"
          alt="Campo de arroz al atardecer"
          loading="lazy"
          className="w-full h-full object-cover cinema-img opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-16 md:py-20 pt-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="eyebrow text-gold-accent flex items-center mb-10"
        >
          <span className="rule bg-gold-accent/70" />
          Conclusión
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease, delay: 0.2 }}
          className="font-display font-light leading-[0.98] text-bone-50 max-w-5xl"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
        >
          Un modelo{' '}
          <span className="italic text-emerald-glow">agroindustrial</span>,
          tecnificado e intensivo —{' '}
          <span className="text-bone-300">motor regional</span> y desafío
          ambiental.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="mt-10 text-bone-100/80 text-lg max-w-2xl leading-relaxed font-light"
        >
          El complejo productivo del arroz genera empleo y actividad económica
          en el litoral argentino, pero exige un manejo sustentable de los
          recursos para sostenerse en el tiempo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease, delay: 0.9 }}
          className="mt-10 md:mt-20 pt-8 md:pt-10 border-t border-bone-50/15 flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6"
        >
          <div>
            <span className="eyebrow text-bone-300">Presentaron</span>
            <div className="mt-3 flex flex-wrap gap-x-10 gap-y-2 font-display text-bone-50 text-xl md:text-2xl">
              {presenters.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <span className="eyebrow text-bone-300">Geografía · 2026</span>
            <p className="mt-2 font-display italic text-gold-glow">
              Gracias.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
