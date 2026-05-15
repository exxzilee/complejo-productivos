import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sun, Droplets, Mountain, Layers } from 'lucide-react'
import SectionFrame from './SectionFrame'
import { conditions } from '../data/slides'

const icons = { Sun, Droplets, Mountain, Layers }
const ease = [0.22, 1, 0.36, 1]

export default function GeoConditions() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })

  return (
    <SectionFrame id="condiciones" eyebrow="Condiciones para el cultivo" index="III">
      <div className="px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-display font-light leading-[1.05] text-bone-50 max-w-4xl"
          style={{ fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)' }}
        >
          El arroz exige un{' '}
          <span className="italic text-emerald-glow">ecosistema preciso</span>{' '}
          para prosperar.
        </motion.h2>

        <div
          ref={ref}
          className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8"
        >
          {conditions.map((c, i) => {
            const Icon = icons[c.icon]
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 border border-bone-50/10 bg-ink-900/40 backdrop-blur-sm rounded-sm transition-colors hover:border-emerald-accent/50"
              >
                <div className="text-emerald-accent mb-6 group-hover:text-emerald-glow transition-colors">
                  {Icon && <Icon size={28} strokeWidth={1.3} />}
                </div>
                <h3 className="font-display text-2xl text-bone-50 leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-bone-300 text-[0.95rem] leading-relaxed font-light">
                  {c.desc}
                </p>
                <span className="absolute top-6 right-6 eyebrow text-bone-300/40">
                  0{i + 1}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionFrame>
  )
}
