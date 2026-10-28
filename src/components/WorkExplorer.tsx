import { useState } from 'react'
import { projects } from '../data/dashboard'
import { DashboardCard } from './DashboardCard'

export function WorkExplorer() {
  const [selectedProjectId, setSelectedProjectId] = useState<(typeof projects)[number]['id']>(projects[0].id)
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0]

  return (
    <DashboardCard
      id="work"
      className="work-card"
      kicker="A few directions"
      title="Selected work"
      titleId="work-title"
      index="01 / 03"
    >
      <div className="work-explorer">
        <div className="work-selector" role="group" aria-label="Select a project">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className="work-selector__item"
              type="button"
              aria-pressed={selectedProject.id === project.id}
              onClick={() => setSelectedProjectId(project.id)}
            >
              <span className="work-selector__number">0{index + 1}</span>
              <span>{project.label}</span>
              <span className="work-selector__arrow" aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <article className="work-detail" aria-live="polite" aria-atomic="true">
          <div className="work-detail__art" aria-hidden="true">
            <span className="work-detail__orbit work-detail__orbit--one" />
            <span className="work-detail__orbit work-detail__orbit--two" />
            <span className="work-detail__seed" />
            <span className="work-detail__stem" />
            <span className="work-detail__leaf work-detail__leaf--one" />
            <span className="work-detail__leaf work-detail__leaf--two" />
          </div>
          <p className="card-kicker">Selected project</p>
          <h3>{selectedProject.label}</h3>
          <p>{selectedProject.description}</p>
          <span className="work-detail__note">Details to come</span>
        </article>
      </div>
    </DashboardCard>
  )
}
