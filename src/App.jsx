import { useRef, useEffect } from 'react'
import Hero from './components/Hero'
import Definition from './components/Definition'
import MapSection from './components/MapSection'
import GeoConditions from './components/GeoConditions'
import ProcessDiagram from './components/ProcessDiagram'
import SectorDetail from './components/SectorDetail'
import ActorsGrid from './components/ActorsGrid'
import Destination from './components/Destination'
import ImpactSection from './components/ImpactSection'
import Closing from './components/Closing'
import ProgressBar from './components/ProgressBar'
import SectionIndex from './components/SectionIndex'
import { sectors } from './data/slides'

export default function App() {
  const scrollRef = useRef(null)

  // Keyboard navigation: arrows + Page Up/Down + Space jump section-by-section.
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const getSections = () => Array.from(el.querySelectorAll('section[id]'))

    const findCurrentIndex = () => {
      const sections = getSections()
      const center = el.scrollTop + el.clientHeight / 2
      let best = 0
      sections.forEach((s, i) => {
        if (s.offsetTop <= center) best = i
      })
      return best
    }

    const handler = (e) => {
      const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Home', 'End']
      if (!keys.includes(e.key)) return
      e.preventDefault()
      const sections = getSections()
      let i = findCurrentIndex()
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') i = Math.min(sections.length - 1, i + 1)
      if (e.key === 'ArrowUp' || e.key === 'PageUp') i = Math.max(0, i - 1)
      if (e.key === 'Home') i = 0
      if (e.key === 'End') i = sections.length - 1
      sections[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <ProgressBar target={scrollRef} />
      <SectionIndex container={scrollRef} />
      <main ref={scrollRef} className="snap-scroll relative">
        <Hero />
        <Definition />
        <MapSection />
        <GeoConditions />
        <ProcessDiagram />
        <SectorDetail
          id="agrario"
          eyebrow="Sector agrario"
          index="V"
          sector={sectors[0]}
        />
        <SectorDetail
          id="industrial"
          eyebrow="Sector industrial"
          index="VI"
          sector={sectors[1]}
          reverse
        />
        <SectorDetail
          id="comercial"
          eyebrow="Sector comercial"
          index="VII"
          sector={sectors[2]}
        />
        <ActorsGrid />
        <Destination />
        <ImpactSection />
        <Closing />
      </main>
    </>
  )
}
