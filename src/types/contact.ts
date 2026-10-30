export type ContactLink = {
  label: string
  href: string
}

export type ContactDetails = {
  email: string
  /** External profiles; these open in a new tab. */
  profiles: readonly ContactLink[]
  resume: {
    /** Add the résumé URL here to replace the status message with a link. */
    url?: string
    status: string
  }
}
