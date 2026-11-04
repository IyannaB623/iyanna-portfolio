import { useState } from 'react'
import { skillCategories } from '../data/skills'
import { DashboardCard } from './DashboardCard'
import { SkillMotif } from './SkillMotif'

export function SkillExplorer() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(skillCategories[0].id)
  const selectedCategory = skillCategories.find((category) => category.id === selectedCategoryId) ?? skillCategories[0]

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
        <div className="skill-selector" role="group" aria-label="Explore skill areas">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className="skill-selector__item"
              type="button"
              aria-pressed={selectedCategory.id === category.id}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              <SkillMotif motif={category.motif} />
              {category.label}
            </button>
          ))}
        </div>
        <div className="skill-detail" aria-live="polite" aria-atomic="true">
          <SkillMotif motif={selectedCategory.motif} className="skill-detail__motif" />
          <p className="card-kicker">Skills in this area</p>
          <h3>{selectedCategory.label}</h3>
          <ul className="skill-detail__list">
            {selectedCategory.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </DashboardCard>
  )
}
