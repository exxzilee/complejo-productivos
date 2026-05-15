import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { id: 'hero', label: 'Apertura' },
  { id: 'definicion', label: 'Definición' },
  { id: 'mapa', label: 'Ubicación' },
  { id: 'condiciones', label: 'Geografía' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'agrario', label: 'Agrario' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'comercial', label: 'Comercial' },
  { id: 'actores', label: 'Actores' },
  { id: 'destino', label: 'Destino' },
  { id: 'impacto', label: 'Impacto' },
  { id: 'cierre', label: 'Cierre' }
]

export default function SectionIndex({ container }) {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    if (!container?.current) return
    const root = container.current
    const sections = items.map((i) => root.querySelector(`#${i.id}`)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { root, threshold: 0.5 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [container])

  const go = (id) => {
    const root = container.current
    const el = root?.querySelector(`#${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav aria-label="Índice de secciones" className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => go(it.id)}
          className="group flex items-center gap-3 justify-end focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-accent/70 rounded-sm"
          aria-label={`Ir a ${it.label}`}
          aria-current={active === it.id ? 'true' : undefined}
        >
          <AnimatePresence>
            {active === it.id && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="eyebrow text-bone-50"
              >
                {it.label}
              </motion.span>
            )}
          </AnimatePresence>
          <span
            className={`block h-[1px] transition-all duration-500 ease-cinema ${
              active === it.id ? 'w-8 bg-gold-accent' : 'w-3 bg-bone-300/40 group-hover:w-5 group-hover:bg-bone-300/80'
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
