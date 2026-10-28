import { navigationItems } from '../data/navigation'

export function Navigation() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href="#home" aria-label="Iyanna portfolio home">
          Iyanna · Portfolio
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <ul className="site-nav__list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}