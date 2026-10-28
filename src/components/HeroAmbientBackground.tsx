import { useEffect, useRef } from 'react'

export function HeroAmbientBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const background = backgroundRef.current
    if (!background) return

    const pointerMedia = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId = 0
    let pointerX = 0
    let pointerY = 0

    const resetDepth = () => {
      background.style.setProperty('--ambient-near-x', '0px')
      background.style.setProperty('--ambient-near-y', '0px')
      background.style.setProperty('--ambient-far-x', '0px')
      background.style.setProperty('--ambient-far-y', '0px')
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = background.getBoundingClientRect()
      const isInsideHero = event.clientX >= bounds.left
        && event.clientX <= bounds.right
        && event.clientY >= bounds.top
        && event.clientY <= bounds.bottom

      if (!isInsideHero) {
        resetDepth()
        return
      }

      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8

      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        background.style.setProperty('--ambient-near-x', `${pointerX}px`)
        background.style.setProperty('--ambient-near-y', `${pointerY}px`)
        background.style.setProperty('--ambient-far-x', `${pointerX * -0.45}px`)
        background.style.setProperty('--ambient-far-y', `${pointerY * -0.45}px`)
      })
    }

    const syncPointerTracking = () => {
      if (pointerMedia.matches && !reducedMotionMedia.matches) {
        window.addEventListener('pointermove', handlePointerMove, { passive: true })
      } else {
        window.removeEventListener('pointermove', handlePointerMove)
        resetDepth()
      }
    }

    syncPointerTracking()
    pointerMedia.addEventListener('change', syncPointerTracking)
    reducedMotionMedia.addEventListener('change', syncPointerTracking)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      pointerMedia.removeEventListener('change', syncPointerTracking)
      reducedMotionMedia.removeEventListener('change', syncPointerTracking)
      if (frameId) window.cancelAnimationFrame(frameId)
      resetDepth()
    }
  }, [])

  return (
    <div ref={backgroundRef} className="hero-ambient" aria-hidden="true">
      <svg className="hero-ambient__svg" viewBox="0 0 1200 760" preserveAspectRatio="none">
        <defs>
          <pattern id="ambient-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" className="ambient-grid-line" fill="none" />
          </pattern>
        </defs>
        <g className="hero-ambient__far-layer">
          <rect x="12" y="18" width="1176" height="724" fill="url(#ambient-grid)" />
          <path className="ambient-connection" d="M45 610 188 510 320 552 430 405 596 460 712 314 858 355 1015 206 1160 264" />
          <path className="ambient-connection ambient-connection--fine" d="M118 186 320 552 525 192 712 314 875 612 1015 206" />
          <path className="ambient-coordinate" d="M160 112h32m-16-16v32M1038 536h32m-16-16v32M892 118h22m-11-11v22" />
          <g className="ambient-drift ambient-drift--one">
            <circle className="ambient-point" cx="188" cy="510" r="3" />
            <circle className="ambient-point ambient-point--accent" cx="525" cy="192" r="4" />
            <circle className="ambient-point" cx="858" cy="355" r="3" />
          </g>
          <g className="ambient-drift ambient-drift--two">
            <circle className="ambient-point ambient-point--accent" cx="320" cy="552" r="4" />
            <circle className="ambient-point" cx="712" cy="314" r="3" />
            <circle className="ambient-point ambient-point--accent" cx="1015" cy="206" r="4" />
          </g>
        </g>
        <g className="hero-ambient__near-layer">
          <path className="ambient-bracket" d="M36 74V38h36m1020 0h36v36M1128 686v36h-36m-1020 0H36v-36" />
          <circle className="ambient-point ambient-point--small" cx="274" cy="156" r="2" />
          <circle className="ambient-point ambient-point--small" cx="934" cy="472" r="2" />
          <circle className="ambient-point ambient-point--small" cx="604" cy="660" r="2" />
        </g>
      </svg>
      <span className="hero-ambient__coordinate hero-ambient__coordinate--left">X 04 / Y 12</span>
      <span className="hero-ambient__coordinate hero-ambient__coordinate--right">FIELD NOTES · 01</span>
    </div>
  )
}