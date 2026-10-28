import { DashboardNotes } from '../components/DashboardNotes'
import { SkillExplorer } from '../components/SkillExplorer'
import { WorkExplorer } from '../components/WorkExplorer'

export function HomeSection() {
  return (
    <div id="dashboard" className="dashboard-grid">
      <section id="identity" className="glass-card identity-card" aria-labelledby="identity-title">
        <div className="identity-card__art" aria-hidden="true">
          <span className="identity-shape identity-shape--garden" />
          <span className="identity-shape identity-shape--blush" />
          <span className="identity-card__ring identity-card__ring--one" />
          <span className="identity-card__ring identity-card__ring--two" />
          <span className="identity-card__seed" />
        </div>
        <div className="identity-card__content">
          <p className="identity-card__eyebrow">DATA ANALYST <i /> DEVELOPER <i /> CREATIVE</p>
          <h1 id="identity-title">Where data<br />meets creativity.</h1>
          <p className="identity-card__supporting">
            I turn complex information into clear, compelling digital experiences
            through analytics, AI, and thoughtful design.
          </p>
          <div className="identity-card__actions">
            <a className="dashboard-button dashboard-button--primary" href="#work">
              Explore Work <span aria-hidden="true">↗</span>
            </a>
            <a className="dashboard-button dashboard-button--quiet" href="#skills">
              Quick Tour <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <span className="identity-card__index" aria-hidden="true">IB · 01</span>
      </section>

      <section id="about" className="glass-card profile-card" aria-labelledby="profile-name">
        <div className="profile-photo">
          <span className="profile-photo__frame" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="profile-photo__label">PORTRAIT<br />SPACE RESERVED</span>
          <span className="profile-photo__monogram" aria-hidden="true">IB</span>
        </div>
        <div className="profile-card__content">
          <p className="card-kicker">The person behind the work</p>
          <h2 id="profile-name">Iyanna Blackburn</h2>
          <p>Data analytics · AI · Development · Creative direction</p>
          <a className="text-link" href="#skills">Explore focus <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <WorkExplorer />
      <SkillExplorer />
      <DashboardNotes />
    </div>
  )
}
