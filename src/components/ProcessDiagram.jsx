import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SectionFrame from './SectionFrame'
import { sectors } from '../data/slides'

const ease = [0.22, 1, 0.36, 1]

export default function ProcessDiagram() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })
  const [active, setActive] = useState(0)

  return (
    <SectionFrame id="proceso" eyebrow="Proceso productivo" index="IV">
      <div className="px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-display font-light leading-[1.05] text-bone-50 max-w-4xl"
          style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
        >
          Tres sectores conectados,{' '}
          <span className="italic text-gold-glow">una sola cadena</span>.
        </motion.h2>

        <div ref={ref} className="mt-10 md:mt-16 lg:mt-20">
          {/* Diagram */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {sectors.map((s, i) => (
              <div key={s.id} className="relative flex md:flex-col items-stretch">
                <motion.button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.2 }}
                  className={`relative flex-1 text-left p-7 border transition-all duration-500 ease-cinema ${
                    active === i
                      ? 'border-gold-accent/70 bg-ink-800/60'
                      : 'border-bone-50/10 bg-ink-900/30 hover:border-bone-50/30'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-display italic text-3xl text-gold-accent">
                      {s.n}
                    </span>
                    <span className="eyebrow text-bone-300">{s.short}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-bone-50 leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-bone-300 text-sm leading-relaxed font-light">
                    {s.desc}
                  </p>
                </motion.button>

                {i < sectors.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.8, ease, delay: 0.6 + i * 0.2 }}
                    className="hidden md:flex absolute top-1/2 -right-3 z-10 origin-left items-center"
                  >
                    <ArrowRight className="text-gold-accent" size={20} strokeWidth={1.3} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Active detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
          >
            {sectors[active].bullets.map((b, j) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: j * 0.06 }}
                className="border-l border-emerald-accent/40 pl-4"
              >
                <span className="eyebrow text-bone-300">0{j + 1}</span>
                <p className="text-bone-50 text-sm mt-1 leading-snug">{b}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionFrame>
  )
}
