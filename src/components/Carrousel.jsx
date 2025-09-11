// src/components/Carrousel.jsx
import { useEffect, useRef, useState } from 'react'
import { ReliefButtonSm } from './ReliefButtonSm'

export default function Carrousel({ images = [], alt = '', className = '' }) {
  const [i, setI] = useState(0)
  const containerRef = useRef(null)

  const hasSlides = Array.isArray(images) && images.length > 0
  if (!hasSlides) return null

  const wrap = (n) => (n + images.length) % images.length
  const go   = (n) => setI((v) => wrap(v + n))

  // Clavier ← →
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  go(-1)
      if (e.key === 'ArrowRight') go(+1)
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [])

  // Swipe
  const touch = useRef({ x: 0 })
  const onTouchStart = (e) => { touch.current.x = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x
    if (Math.abs(dx) > 40) go(dx < 0 ? +1 : -1)
  }

return (
  <div
    ref={containerRef}
    tabIndex={0}
    className={`relative w-full select-none outline-none ${className}`}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    aria-roledescription="carousel"
    aria-label="Images du projet"
  >
      <div className="relative h-[720px] w-full flex items-center justify-center overflow-hidden rounded-lg border-2 border-black bg-white">
        <img
          src={images[i]}
          alt={alt || `Slide ${i + 1}`}
          className="max-h-full max-w-full object-contain"
          draggable={false}
        />
      </div>
    <div className="flex items-center justify-center gap-10 mt-4">
      <ReliefButtonSm
          type="button"
          onClick={() => go(-1)}
          className="pointer-events-auto absolute left-2"
          aria-label="Précédent"
        >
          ‹
      </ReliefButtonSm>

      <div className="mt-2 flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Aller à l’image ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full border-2 border-black ${idx === i ? 'bg-black' : 'bg-white'}`}
          />
        ))}
      </div>

      <ReliefButtonSm
        type="button"
        onClick={() => go(+1)}
        className="pointer-events-auto absolute right-3 z-10"
        aria-label="Suivant"
      >
        ›
      </ReliefButtonSm>
    </div>
  </div>
  )
} 
