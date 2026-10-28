import { DataConstellation } from '../components/DataConstellation'
import { CursorDataLens } from '../components/CursorDataLens'
import { ExpertiseMarquee } from '../components/ExpertiseMarquee'
import { HeroAmbientBackground } from '../components/HeroAmbientBackground'

export function HomeSection() {
  return (
    <>
      <section id="home" className="hero-section" aria-labelledby="hero-name">
        <HeroAmbientBackground />
        <CursorDataLens />
        <div className="hero-section__copy">
          <p className="eyebrow">DATA ANALYST <i /> DEVELOPER <i /> CREATIVE</p>
          <h1 id="hero-name">Iyanna Blackburn</h1>
          <p className="hero-section__statement">
            Where data meets <span>creativity.</span>
          </p>
          <p className="hero-section__note">
            I turn complex information into clear, compelling digital experiences
            through analytics, AI, and thoughtful design.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#selected-work">
              View Selected Work <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--secondary" href="#contact">
              Let’s Connect <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-status">
            <span className="hero-status__marker" aria-hidden="true" />
            <span>Portfolio in progress</span>
            <span className="hero-status__divider" aria-hidden="true" />
            <span>Thoughtfully taking shape</span>
          </p>
        </div>
        <div className="hero-section__visual">
          <DataConstellation />
        </div>
      </section>
      <ExpertiseMarquee />
    </>
  )
}