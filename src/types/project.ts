export type ProjectLink = {
  label: string
  href: string
}

/**
 * A portfolio project. Only id, title, and summary are required; any optional
 * field left out (or given as an empty list) is simply not rendered.
 */
export type Project = {
  id: string
  title: string
  summary: string
  category?: string
  status?: string
  description?: string
  features?: readonly string[]
  technologies?: readonly string[]
  role?: string
  contribution?: string
  /** A short, low-emphasis aside, such as planned next steps. */
  note?: string
  /** The first featured project is selected by default. */
  featured?: boolean
  links?: readonly ProjectLink[]
}
