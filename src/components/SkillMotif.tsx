import type { SkillMotif as Motif } from '../types/skill'

const motifPaths: Record<Motif, string> = {
  // Ascending bars
  data: 'M5 19v-5M12 19V9M19 19V5',
  // Code brackets
  digital: 'M9 7 4 12l5 5M15 7l5 5-5 5',
  // Four-point spark
  ai: 'M12 3c.6 4.3 2.7 6.4 7 7-4.3.6-6.4 2.7-7 7-.6-4.3-2.7-6.4-7-7 4.3-.6 6.4-2.7 7-7Z',
  // Two leaves from one stem
  creative: 'M12 21c0-6 2.6-10.6 8-13-.9 6-3.6 10.2-8 13Zm0 0c0-6-2.6-10.6-8-13 .9 6 3.6 10.2 8 13Z',
}

export function SkillMotif({ motif, className }: { motif: Motif; className?: string }) {
  return (
    <span className={`skill-motif skill-motif--${motif}${className ? ` ${className}` : ''}`} aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d={motifPaths[motif]} />
      </svg>
    </span>
  )
}
