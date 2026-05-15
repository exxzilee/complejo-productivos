import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function AnimatedCounter({
  to,
  from = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.5 })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v)
    })
    return () => controls.stop()
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
