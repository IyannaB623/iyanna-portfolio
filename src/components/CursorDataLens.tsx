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
    let isMoving = false
    let hasPosition = false
    let currentX = -1000
    let currentY = -1000
    let targetX = -1000
    let targetY = -1000

    const animatePosition = () => {
      currentX += (targetX - currentX) * 0.13
      currentY += (targetY - currentY) * 0.13

      lens.style.setProperty('--lens-x', `${currentX}px`)
      lens.style.setProperty('--lens-y', `${currentY}px`)

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        frameId = window.requestAnimationFrame(animatePosition)
      } else {
        currentX = targetX
        currentY = targetY
        lens.style.setProperty('--lens-x', `${currentX}px`)
        lens.style.setProperty('--lens-y', `${currentY}px`)
        frameId = 0
      }
    }

    const hideLens = () => {
      lens.dataset.visible = 'false'
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect()
      const isInsideHero = event.clientX >= bounds.left
        && event.clientX <= bounds.right
        && event.clientY >= bounds.top
        && event.clientY <= bounds.bottom

      if (!isInsideHero) {
        hideLens()
        return
      }

      targetX = event.clientX - bounds.left
      targetY = event.clientY - bounds.top

      if (!hasPosition) {
        currentX = targetX
        currentY = targetY
        lens.style.setProperty('--lens-x', `${currentX}px`)
        lens.style.setProperty('--lens-y', `${currentY}px`)
        hasPosition = true
      }

      lens.dataset.visible = 'true'

      if (!frameId) {
        isMoving = true
        frameId = window.requestAnimationFrame(animatePosition)
      }
    }

    const handlePointerLeave = () => {
      isMoving = false
      hideLens()
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
      if (frameId) window.cancelAnimationFrame(frameId)
      if (isMoving) hideLens()
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