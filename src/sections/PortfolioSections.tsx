import { portfolioSections } from '../data/sections'

export function PortfolioSections() {
  return (
    <div className="portfolio-deck">
      {portfolioSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="portfolio-section"
          aria-labelledby={`${section.id}-title`}
        >
          <details className="portfolio-card" open>
            <summary aria-controls={`${section.id}-content`}>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <span className="portfolio-card__toggle" aria-hidden="true">+</span>
            </summary>
            <p id={`${section.id}-content`} className="portfolio-section__placeholder">
              {section.description}
            </p>
          </details>
        </section>
      ))}
    </div>
  )
}