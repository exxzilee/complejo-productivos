import SectionFrame from './SectionFrame'
import RevealText from './RevealText'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

export default function Definition() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })

  return (
    <SectionFrame id="definicion" eyebrow="Definición" index="I">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="lg:col-span-7" ref={ref}>
          <RevealText
            as="h2"
            text="Un complejo productivo es la red de actividades y actores que llevan un producto desde su origen hasta el consumidor."
            className="font-display font-light leading-[1.05] text-bone-50"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4.2rem)' }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease, delay: 0.6 }}
          className="lg:col-span-5 lg:pl-10 flex flex-col justify-end"
        >
          <span className="eyebrow text-gold-accent mb-4">Marco conceptual</span>
          <p className="text-bone-100/80 text-lg leading-relaxed font-light max-w-md">
            Reúne la materia prima, los procesos de transformación y la
            comercialización. En el caso del arroz, esa cadena conecta el
            campo, los molinos y los mercados internos y externos.
          </p>
          <div className="mt-10 h-[1px] w-24 bg-gold-accent/50" />
        </motion.div>
      </div>
    </SectionFrame>
  )
}
