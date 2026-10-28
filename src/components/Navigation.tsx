import { useEffect, useRef, useState } from 'react'
import { navigationItems } from '../data/navigation'
import { ThemeToggle } from './ThemeToggle'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#home" aria-label="Iyanna Blackburn, home">
          <span className="site-brand__monogram" aria-hidden="true">
            I<span>B</span><i />
          </span>
          <span className="site-brand__name">Iyanna Blackburn</span>
        </a>
        <div className="site-header__controls">
          <nav
            id="primary-navigation"
            className="site-nav"
            aria-label="Main navigation"
            data-open={isMenuOpen}
          >
            <ul className="site-nav__list">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className={item.href === '#contact' ? 'site-nav__contact' : undefined}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    {item.href === '#contact' && <span aria-hidden="true">↗</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}