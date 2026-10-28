import { useState } from 'react'
import { skillAreas } from '../data/dashboard'

export function SkillExplorer() {
  const [selectedSkillId, setSelectedSkillId] = useState<(typeof skillAreas)[number]['id']>(skillAreas[0].id)
  const selectedSkill = skillAreas.find((skill) => skill.id === selectedSkillId) ?? skillAreas[0]

  return (
    <section id="skills" className="glass-card skill-card" aria-labelledby="skills-title">
      <header className="dashboard-card__header">
        <div>
          <p className="card-kicker">A working toolkit</p>
          <h2 id="skills-title">Skill explorer</h2>
        </div>
        <span className="skill-card__sprout" aria-hidden="true">✳</span>
      </header>
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
    </section>
  )
}
