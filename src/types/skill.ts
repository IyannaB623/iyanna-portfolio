/** Small decorative SVG motifs; a new category can reuse any of them. */
export type SkillMotif = 'data' | 'digital' | 'ai' | 'creative'

export type SkillCategory = {
  id: string
  label: string
  motif: SkillMotif
  skills: readonly string[]
}
