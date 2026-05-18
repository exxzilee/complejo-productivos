import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

const ACCENTS = {
  agrario:    { num: 'text-emerald-accent', border: 'border-emerald-accent/35', dot: 'text-emerald-accent' },
  industrial: { num: 'text-gold-accent',    border: 'border-gold-accent/35',    dot: 'text-gold-accent'    },
  comercial:  { num: 'text-emerald-glow',   border: 'border-emerald-glow/35',   dot: 'text-emerald-glow'   }
}

export default function SectorDetail({ id, eyebrow, index, sector, reverse = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.3, once: false })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  const accent = ACCENTS[sector.id] ?? ACCENTS.agrario

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen min-h-[100svh] w-full flex items-center overflow-hidden bg-ink-950"
    >
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.8, ease }}
        className="absolute top-10 left-8 md:left-16 lg:left-24 z-20 flex items-center gap-4"
      >
        <span className="font-display italic text-bone-300/60 text-sm">{index}</span>
        <span className="eyebrow flex items-center">
          <span className="rule" />
          {eyebrow}
        </span>
      </motion.div>

      {/* Grid — image and text swap sides per `reverse` */}
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[100svh]">

        {/* ── Image panel ── */}
        <div className={`relative overflow-hidden min-h-[45vh] lg:min-h-screen ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <motion.div style={{ y: yImg }} className="absolute inset-0">
            <img
              src={sector.image}
              alt={sector.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover cinema-img"
            />
            {/* Gradient fades toward text side */}
            <div
              className="absolute inset-0"
              style={{
                background: reverse
                  ? 'linear-gradient(to left, #0A0B0D 0%, rgba(10,11,13,0.35) 60%, transparent 100%)'
                  : 'linear-gradient(to right, #0A0B0D 0%, rgba(10,11,13,0.35) 60%, transparent 100%)'
              }}
            />
            {/* Bottom fade on mobile */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent lg:hidden" />
          </motion.div>
        </div>

        {/* ── Text panel ── */}
        <div className={`relative z-10 flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-0 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="max-w-lg">
            {/* Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
              className={`font-display italic leading-none ${accent.num}`}
              style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
            >
              {sector.n}
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.28 }}
              className="mt-3 font-display font-light leading-[1.02] text-bone-50"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}
            >
              {sector.name}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.42 }}
              className="mt-6 text-bone-100/80 text-lg leading-relaxed font-light"
            >
              {sector.desc}
            </motion.p>

            {/* Bullets */}
            <motion.ul
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.09, delayChildren: 0.58 } }
              }}
              className="mt-10 space-y-4"
            >
              {sector.bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease } }
                  }}
                  className="flex items-baseline gap-4 text-bone-100"
                >
                  <span className={`text-[0.55rem] shrink-0 ${accent.dot}`}>●</span>
                  <span className="text-base leading-snug">{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

      </div>
    </section>
  )
}
