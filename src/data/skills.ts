import type { SkillCategory } from '../types/skill'

// To add a skill, append it to a category's list; to add a category, append one object.
export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    motif: 'data',
    skills: ['SQL', 'Python', 'pandas', 'Excel', 'Tableau', 'Power BI'],
  },
  {
    id: 'digital',
    label: 'Digital',
    motif: 'digital',
    skills: ['Development', 'UI/UX Design'],
  },
  {
    id: 'ai',
    label: 'AI',
    motif: 'ai',
    skills: ['AI Automation'],
  },
  {
    id: 'creative',
    label: 'Creative',
    motif: 'creative',
    skills: ['Creative Direction'],
  },
]
