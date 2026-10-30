import profilePhoto from '../assets/iyanna-blackburn-profile.jpg'
import { DashboardCard } from '../components/DashboardCard'
import { DashboardNotes } from '../components/DashboardNotes'
import { SkillExplorer } from '../components/SkillExplorer'
import { WorkExplorer } from '../components/WorkExplorer'
import { profile } from '../data/profile'

export function HomeSection() {
  return (
    <div id="dashboard" className="dashboard-grid">
      <DashboardCard id="identity" className="identity-card" variant="hero" labelledBy="identity-title">
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
      </DashboardCard>

      <DashboardCard id="about" className="profile-card" labelledBy="profile-name">
        <div className="profile-photo">
          <img src={profilePhoto} alt="Iyanna Blackburn" width={1146} height={926} decoding="async" />
        </div>
        <div className="profile-card__content">
          <p className="card-kicker">{profile.kicker}</p>
          <h2 id="profile-name">{profile.name}</h2>
          <p>{profile.about}</p>
          <a className="text-link" href="#skills">Explore focus <span aria-hidden="true">↗</span></a>
        </div>
      </DashboardCard>

      <WorkExplorer />
      <SkillExplorer />
      <DashboardNotes />
    </div>
  )
}
