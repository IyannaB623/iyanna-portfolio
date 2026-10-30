import { contact } from '../data/contact'

const newTabProps = { target: '_blank', rel: 'noopener noreferrer' } as const

export function ContactPanel() {
  const { email, profiles, resume } = contact

  return (
    <div className="contact-panel">
      <ul className="contact-panel__links">
        <li>
          <a href={`mailto:${email}`}>
            <span className="contact-panel__label">Email</span>
            <span className="contact-panel__value">{email}</span>
          </a>
        </li>
        {profiles.map((profile) => (
          <li key={profile.href}>
            <a href={profile.href} {...newTabProps}>
              <span className="contact-panel__value">{profile.label}</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
              <span className="contact-panel__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
      {resume.url ? (
        <a className="contact-panel__resume-link" href={resume.url} {...newTabProps}>
          Résumé
          <span className="visually-hidden"> (opens in a new tab)</span>
          <span className="contact-panel__arrow" aria-hidden="true">↗</span>
        </a>
      ) : (
        <p className="contact-panel__status">{resume.status}</p>
      )}
    </div>
  )
}
