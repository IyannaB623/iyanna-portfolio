import { portfolioSections } from '../data/sections'

export function PortfolioSections() {
  return (
    <>
      {portfolioSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="portfolio-section"
          aria-labelledby={`${section.id}-title`}
        >
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          <p className="portfolio-section__placeholder">{section.description}</p>
        </section>
      ))}
    </>
  )
}