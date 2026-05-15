import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionFrame from './SectionFrame'
import AnimatedCounter from './AnimatedCounter'

const ease = [0.22, 1, 0.36, 1]

export default function Destination() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4, once: false })

  return (
    <SectionFrame id="destino" eyebrow="Destino de la producción" index="IX">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="lg:col-span-7" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="font-display font-light leading-[0.95] text-bone-50"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
          >
            Del litoral argentino al{' '}
            <span className="italic text-gold-glow">resto del mundo</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.4 }}
            className="mt-8 text-bone-100/80 text-lg max-w-xl leading-relaxed font-light"
          >
            La producción abastece el mercado interno y se exporta a la
            región. Su principal comprador internacional define la balanza.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease, delay: 0.7 }}
            className="mt-14 grid grid-cols-2 gap-8 max-w-2xl"
          >
            <div className="border-l border-bone-50/15 pl-5">
              <span className="eyebrow text-bone-300">Mercado interno</span>
              <p className="mt-3 font-display text-2xl text-bone-50 leading-snug">
                Consumo nacional
              </p>
            </div>
            <div className="border-l border-gold-accent/60 pl-5">
              <span className="eyebrow text-gold-accent">Exportación</span>
              <p className="mt-3 font-display text-2xl text-bone-50 leading-snug">
                Brasil, principal comprador
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
            className="relative aspect-square max-w-xs md:max-w-md mx-auto border border-bone-50/10 bg-ink-900/40 p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow text-bone-300">Principal destino</span>
              <ArrowUpRight className="text-gold-accent" size={28} strokeWidth={1.2} />
            </div>
            <div>
              <div
                className="font-display text-bone-50 leading-none italic"
                style={{ fontSize: 'clamp(4rem, 9vw, 7rem)' }}
              >
                Brasil
              </div>
              <div className="mt-6 flex items-end gap-4">
                <div className="font-display text-4xl text-gold-accent">
                  <AnimatedCounter to={1} decimals={0} prefix="N°" />
                </div>
                <p className="text-bone-300 text-sm leading-tight pb-1">
                  comprador internacional<br />del arroz argentino
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold-accent/50" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold-accent/50" />
          </motion.div>
        </div>
      </div>
    </SectionFrame>
  )
}
