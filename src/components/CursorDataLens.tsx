import { useEffect, useRef, useState } from 'react'

const lensMediaQuery = [
  '(min-width: 52.01rem)',
  '(hover: hover)',
  '(pointer: fine)',
  '(prefers-reduced-motion: no-preference)',
].join(' and ')

export function CursorDataLens() {
  const [isEnabled, setIsEnabled] = useState(false)
  const lensRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const media = window.matchMedia(lensMediaQuery)
    const syncEnabled = () => setIsEnabled(media.matches)

    syncEnabled()
    media.addEventListener('change', syncEnabled)
    return () => media.removeEventListener('change', syncEnabled)
  }, [])

  useEffect(() => {
    const lens = lensRef.current
    const hero = lens?.parentElement
    if (!isEnabled || !lens || !hero) return

    let frameId = 0
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const applyPosition = () => {
      lens.style.setProperty('--lens-x', `${currentX}px`)
      lens.style.setProperty('--lens-y', `${currentY}px`)
    }

    const animatePosition = () => {
      currentX += (targetX - currentX) * 0.14
      currentY += (targetY - currentY) * 0.14

      if (Math.abs(targetX - currentX) <= 0.5 && Math.abs(targetY - currentY) <= 0.5) {
        currentX = targetX
        currentY = targetY
        frameId = 0
      } else {
        frameId = window.requestAnimationFrame(animatePosition)
      }

      applyPosition()
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      const bounds = hero.getBoundingClientRect()
      targetX = event.clientX - bounds.left
      targetY = event.clientY - bounds.top

      if (lens.dataset.visible !== 'true') {
        // Appear at the pointer instead of gliding in from the last exit point.
        currentX = targetX
        currentY = targetY
        applyPosition()
        lens.dataset.visible = 'true'
      }

      if (!frameId) frameId = window.requestAnimationFrame(animatePosition)
    }

    const handlePointerLeave = () => {
      lens.dataset.visible = 'false'
    }

    hero.addEventListener('pointermove', handlePointerMove, { passive: true })
    hero.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove)
      hero.removeEventListener('pointerleave', handlePointerLeave)
      if (frameId) window.cancelAnimationFrame(frameId)
      lens.dataset.visible = 'false'
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div
      ref={lensRef}
      className="cursor-data-lens"
      aria-hidden="true"
      data-visible="false"
    >
      <div className="cursor-data-lens__light" />
      <svg className="cursor-data-lens__details" viewBox="0 0 1200 760" preserveAspectRatio="none">
        <path d="M98 496 230 404 355 445 484 305 625 354 760 244 884 286 1018 172" />
        <path d="M176 182 355 445 548 202 760 244 892 512 1018 172" />
        <path d="M236 132h30m-15-15v30M944 438h30m-15-15v30" />
        <circle cx="230" cy="404" r="4" />
        <circle cx="548" cy="202" r="5" />
        <circle cx="760" cy="244" r="4" />
        <circle cx="892" cy="512" r="5" />
        <circle cx="1018" cy="172" r="4" />
      </svg>
    </div>
  )
}