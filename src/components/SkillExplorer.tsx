import { useState } from 'react'
import { skillAreas } from '../data/dashboard'
import { DashboardCard } from './DashboardCard'

export function SkillExplorer() {
  const [selectedSkillId, setSelectedSkillId] = useState<(typeof skillAreas)[number]['id']>(skillAreas[0].id)
  const selectedSkill = skillAreas.find((skill) => skill.id === selectedSkillId) ?? skillAreas[0]

  return (
    <DashboardCard
      id="skills"
      className="skill-card"
      kicker="A working toolkit"
      title="Skill explorer"
      titleId="skills-title"
      headerAside={<span className="skill-card__sprout" aria-hidden="true">✳</span>}
    >
      <div className="skill-explorer">
        <div className="skill-selector" role="group" aria-label="Explore skills">
          {skillAreas.map((skill) => (
            <button
              key={skill.id}
              className="skill-selector__item"
              type="button"
              aria-pressed={selectedSkill.id === skill.id}
              onClick={() => setSelectedSkillId(skill.id)}
            >
              {skill.label}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div className="skill-detail" aria-live="polite" aria-atomic="true">
          <p className="card-kicker">Related capabilities</p>
          <h3>{selectedSkill.label}</h3>
          <p>{selectedSkill.capabilities}</p>
        </div>
      </div>
    </DashboardCard>
  )
}
