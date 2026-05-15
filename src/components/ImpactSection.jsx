import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionFrame from './SectionFrame'
import { impacts } from '../data/slides'

const ease = [0.22, 1, 0.36, 1]

export default function ImpactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.25, once: false })

  return (
    <SectionFrame id="impacto" eyebrow="Impacto y desafíos" index="X" bg="bg-ink-900">
      <div className="px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="font-display font-light leading-[1.05] text-bone-50 max-w-5xl"
          style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
        >
          Producir arroz también significa{' '}
          <span className="italic text-earth-accent">administrar tensiones</span>.
        </motion.h2>

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {impacts.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.15 }}
              className="relative pt-8 border-t border-bone-50/15"
            >
              <span className="absolute -top-[0.6rem] left-0 bg-ink-900 pr-3 eyebrow text-gold-accent whitespace-nowrap">
                0{i + 1} · {it.kind}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-bone-50 leading-tight">
                {it.title}
              </h3>
              <p className="mt-5 text-bone-300 text-[0.95rem] leading-relaxed font-light">
                {it.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  )
}
