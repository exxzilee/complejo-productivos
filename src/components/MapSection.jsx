import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionFrame from './SectionFrame'
import AnimatedCounter from './AnimatedCounter'
import mapaImg from '../../MapaPNG/MapaArgentino.png'
import corrientesImg from '../../MapaPNG/Corrientes.png'
import entreRiosImg from '../../MapaPNG/EntreRios.png'

const ease = [0.22, 1, 0.36, 1]

const BASE_FILTER = 'invert(1)'

const PROVINCES = {
  corrientes: {
    id: 'corrientes',
    name: 'Corrientes',
    subtitle: 'Mayor productor',
    description: 'Provincia líder en producción arrocera nacional.',
    asset: corrientesImg,
    accent: '#7BC68B',
    accentSoft: 'rgba(123, 198, 139, 0.18)',
    // Visual center over the base map (percentage of container)
    point: { top: '21.5%', left: '69%' }
  },
  entrerios: {
    id: 'entrerios',
    name: 'Entre Ríos',
    subtitle: 'Segundo polo',
    description: 'Segundo polo productor del litoral argentino.',
    asset: entreRiosImg,
    accent: '#E8C268',
    accentSoft: 'rgba(232, 194, 104, 0.18)',
    point: { top: '29%', left: '65%' }
  }
}

function MapMarker({ province, isActive, prefersReducedMotion, onSelect }) {
  return (
    <button
      type="button"
      aria-label={`Ver ${province.name}`}
      onClick={() => onSelect(province.id)}
      className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
      style={{ top: province.point.top, left: province.point.left }}
    >
      {/* Outer pulse — only when not active and motion allowed */}
      {!prefersReducedMotion && !isActive && (
        <motion.span
          aria-hidden
          className="absolute inset-0 m-auto rounded-full"
          style={{
            width: 28,
            height: 28,
            border: `1px solid ${province.accent}`,
            opacity: 0.35
          }}
          initial={{ scale: 0.6, opacity: 0.35 }}
          animate={{ scale: [0.6, 1.7], opacity: [0.35, 0] }}
          transition={{ duration: 2.6, ease, repeat: Infinity }}
        />
      )}

      {/* Hit area + halo */}
      <span
        className="relative flex items-center justify-center rounded-full transition-all duration-500 ease-cinema group-hover:scale-110 group-focus-visible:scale-110"
        style={{
          width: 26,
          height: 26,
          background: 'transparent'
        }}
      >
        {/* Soft ring */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full transition-opacity duration-500"
          style={{
            border: `1px solid ${province.accent}`,
            opacity: isActive ? 0.9 : 0.55,
            boxShadow: isActive
              ? `0 0 18px ${province.accent}55`
              : '0 0 0 rgba(0,0,0,0)'
          }}
        />
        {/* Inner dot */}
        <span
          aria-hidden
          className="rounded-full transition-all duration-500"
          style={{
            width: isActive ? 8 : 6,
            height: isActive ? 8 : 6,
            background: province.accent,
            boxShadow: `0 0 10px ${province.accent}AA`
          }}
        />
      </span>

      {/* Label appears on hover/focus */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-[0.22em] uppercase opacity-0 translate-y-[-4px] transition-all duration-500 ease-cinema group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
        style={{ color: province.accent }}
      >
        {province.name}
      </span>
    </button>
  )
}

export default function MapSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.35, once: false })
  const [selected, setSelected] = useState(null) // 'corrientes' | 'entrerios' | null
  const prefersReducedMotion = useReducedMotion()

  // Escape key returns to overview
  useEffect(() => {
    if (!selected) return
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  const active = selected ? PROVINCES[selected] : null

  return (
    <SectionFrame id="mapa" eyebrow="Ubicación geográfica" index="II">
      <div
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-8 md:px-16 lg:px-24 pt-24 md:pt-32 pb-16 md:pb-20 items-center"
        ref={ref}
      >
        {/* ── Stats column ── */}
        <div className="lg:col-span-5 order-2 lg:order-1 relative min-h-[1px]">
          <AnimatePresence mode="wait">
            {!active && (
              <motion.div
                key="overview-text"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.7, ease }}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, ease }}
                  className="font-display font-light leading-[1.05] text-bone-50"
                  style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
                >
                  El cultivo se concentra en el{' '}
                  <span className="italic text-emerald-glow">litoral argentino</span>.
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, ease, delay: 0.35 }}
                  className="mt-12 space-y-10"
                >
                  <div>
                    <div
                      className="font-display text-bone-50 leading-none"
                      style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
                    >
                      <AnimatedCounter to={90} suffix="%" />
                      <span className="text-gold-accent">+</span>
                    </div>
                    <p className="eyebrow text-bone-300 mt-3">
                      de la producción nacional — Corrientes y Entre Ríos
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-5 max-w-md">
                    <button
                      type="button"
                      onClick={() => setSelected('corrientes')}
                      className="group text-left border border-bone-50/10 pl-4 py-4 transition-all duration-500 ease-cinema hover:border-emerald-accent/80 hover:bg-emerald-deep/20 focus:outline-none focus-visible:border-emerald-accent/80"
                    >
                      <div className="font-display text-xl text-bone-50">Corrientes</div>
                      <p className="text-xs text-bone-300 mt-1">Mayor productor</p>
                      <div className="mt-3 h-[1px] w-4 bg-emerald-accent transition-all duration-500 group-hover:w-full group-focus-visible:w-full" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelected('entrerios')}
                      className="group text-left border border-bone-50/10 pl-4 py-4 transition-all duration-500 ease-cinema hover:border-gold-accent/80 hover:bg-earth-deep/20 focus:outline-none focus-visible:border-gold-accent/80"
                    >
                      <div className="font-display text-xl text-bone-50">Entre Ríos</div>
                      <p className="text-xs text-bone-300 mt-1">Segundo polo</p>
                      <div className="mt-3 h-[1px] w-4 bg-gold-accent transition-all duration-500 group-hover:w-full group-focus-visible:w-full" />
                    </button>
                  </div>

                  <p className="eyebrow text-bone-300 min-h-[1.5em]">
                    Tocá un punto del mapa para enfocar una provincia
                  </p>
                </motion.div>
              </motion.div>
            )}

            {active && (
              <motion.div
                key={`detail-${active.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.8, ease, delay: 0.15 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block h-[1px] w-8"
                    style={{ background: active.accent }}
                  />
                  <span
                    className="text-[10px] tracking-[0.22em] uppercase"
                    style={{ color: active.accent }}
                  >
                    {active.subtitle}
                  </span>
                </div>

                <h2
                  className="font-display font-light leading-[1.02] text-bone-50"
                  style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
                >
                  {active.name}
                </h2>

                <p className="text-bone-300 max-w-md leading-relaxed">
                  {active.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="group inline-flex items-center gap-3 text-bone-300 hover:text-bone-50 focus:outline-none focus-visible:text-bone-50 transition-colors duration-500"
                >
                  <span
                    aria-hidden
                    className="inline-block h-[1px] w-6 bg-bone-300 transition-all duration-500 group-hover:w-10 group-hover:bg-bone-50 group-focus-visible:w-10 group-focus-visible:bg-bone-50"
                  />
                  <span className="text-[10px] tracking-[0.22em] uppercase">
                    Volver al mapa
                  </span>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-bone-500 hidden md:inline">
                    · Esc
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Map column ── */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center relative">
          <motion.div
            initial={false}
            animate={{
              x: active ? (prefersReducedMotion ? 0 : '-55%') : 0,
              opacity: active ? 0.12 : 1,
              scale: active ? 0.85 : 1
            }}
            transition={{ duration: 1, ease }}
            className="relative w-full max-w-[360px] lg:max-w-[420px]"
          >
            <div
              className="relative w-full"
              style={{
                aspectRatio: '504 / 1056',
                background: 'transparent',
                isolation: 'isolate'
              }}
            >
              <img
                src={mapaImg}
                alt="Mapa de Argentina"
                draggable={false}
                className="absolute inset-0 w-full h-full object-contain select-none"
                style={{
                  filter: `${BASE_FILTER} opacity(0.45)`,
                  mixBlendMode: 'screen'
                }}
              />

              {/* Province markers */}
              {Object.values(PROVINCES).map((p) => (
                <MapMarker
                  key={p.id}
                  province={p}
                  isActive={selected === p.id}
                  prefersReducedMotion={prefersReducedMotion}
                  onSelect={setSelected}
                />
              ))}
            </div>
          </motion.div>

          {/* Selected province PNG — overlays the map column area, click to close */}
          <AnimatePresence>
            {active && (
              <motion.button
                type="button"
                aria-label={`Volver al mapa — cerrar ${active.name}`}
                onClick={() => setSelected(null)}
                key={`prov-${active.id}`}
                initial={{ opacity: 0, scale: 0.85, x: prefersReducedMotion ? 0 : 30, y: prefersReducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: active.id === 'corrientes' ? '12%' : 0 }}
                exit={{ opacity: 0, scale: 0.92, x: prefersReducedMotion ? 0 : 10 }}
                transition={{ duration: 1, ease, delay: 0.1 }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                className="group absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none"
              >
                <div
                  className="relative w-full max-w-[520px] lg:max-w-[640px] xl:max-w-[720px]"
                  style={{ aspectRatio: '504 / 1056' }}
                >
                  <img
                    src={active.asset}
                    alt={`Provincia de ${active.name}`}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-contain select-none transition-all duration-700 ease-cinema"
                    style={{
                      filter: `${BASE_FILTER} drop-shadow(0 0 60px ${active.accent}99) drop-shadow(0 0 120px ${active.accent}55)`,
                      mixBlendMode: 'screen'
                    }}
                  />

                  {/* Close hint — appears on hover over the province */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 bottom-[6%] -translate-x-1/2 flex items-center gap-2 opacity-60 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500"
                    style={{ color: active.accent }}
                  >
                    <span
                      className="inline-flex items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110"
                      style={{
                        width: 28,
                        height: 28,
                        border: `1px solid ${active.accent}`,
                        background: 'rgba(10,11,13,0.55)',
                        backdropFilter: 'blur(2px)'
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[10px] tracking-[0.22em] uppercase">
                      Cerrar
                    </span>
                  </span>
                </div>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Click-outside catcher when a province is active (desktop) */}
        {active && (
          <button
            type="button"
            aria-label="Volver al mapa"
            onClick={() => setSelected(null)}
            className="absolute inset-0 -z-10 cursor-default"
            tabIndex={-1}
          />
        )}
      </div>
    </SectionFrame>
  )
}
