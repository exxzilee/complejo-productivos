import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionFrame from './SectionFrame'
import { actors } from '../data/slides'

const ease = [0.22, 1, 0.36, 1]

export default function ActorsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.2, once: false })
  const [hovered, setHovered] = useState(null)

  return (
    <SectionFrame id="actores" eyebrow="Actores sociales" index="VIII">
      <div className="px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="lg:col-span-8 font-display font-light leading-[1.05] text-bone-50"
            style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
          >
            La cadena funciona gracias a{' '}
            <span className="italic text-emerald-glow">una red de actores</span>{' '}
            que se relacionan entre sí.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="lg:col-span-4 text-bone-300 text-sm leading-relaxed font-light"
          >
            Productores, trabajadores, industria, logística, comercio y Estado articulan el complejo.
          </motion.p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {actors.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative aspect-[4/5] md:aspect-square p-4 md:p-5 border border-bone-50/10 bg-ink-900/40 overflow-hidden cursor-pointer transition-all duration-500 ease-cinema ${
                hovered === i ? 'border-gold-accent/60 -translate-y-1.5 bg-ink-800/70' : ''
              }`}
            >
              <span className="eyebrow text-bone-300/60">
                0{i + 1}
              </span>
              <h3 className="absolute bottom-9 md:bottom-5 left-4 right-4 md:left-5 md:right-5 font-display text-lg md:text-2xl text-bone-50 leading-tight">
                {a.name}
              </h3>
              {/* Mobile: always show detail below name; Desktop: reveal on hover */}
              <p className="absolute bottom-3 left-4 right-4 text-bone-300/70 text-[0.65rem] leading-tight font-light md:hidden">
                {a.detail}
              </p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={hovered === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease }}
                className="hidden md:block absolute inset-x-5 top-12 text-bone-100/90 text-sm leading-relaxed font-light"
              >
                {a.detail}
              </motion.p>
              <div
                className={`absolute bottom-0 left-0 h-[1px] bg-gold-accent transition-all duration-700 ease-cinema ${
                  hovered === i ? 'w-full' : 'w-6'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionFrame>
  )
}
