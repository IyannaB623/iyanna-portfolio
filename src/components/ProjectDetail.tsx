import type { Project } from '../types/project'

type ProjectDetailProps = {
  project: Project
  id: string
  labelledBy: string
}

function hasItems<T>(items: readonly T[] | undefined): items is readonly T[] {
  return items !== undefined && items.length > 0
}

export function ProjectDetail({ project, id, labelledBy }: ProjectDetailProps) {
  const { status, category, description, features, technologies, role, contribution, note, links } = project
  const hasOverview = Boolean(description || role || contribution)
  const hasSpecifics = hasItems(features) || hasItems(technologies)

  return (
    <div id={id} className="work-detail" role="tabpanel" aria-labelledby={labelledBy} tabIndex={0}>
      <div className="work-detail__art" aria-hidden="true">
        <span className="work-detail__orbit work-detail__orbit--one" />
        <span className="work-detail__orbit work-detail__orbit--two" />
        <span className="work-detail__seed" />
        <span className="work-detail__stem" />
        <span className="work-detail__leaf work-detail__leaf--one" />
        <span className="work-detail__leaf work-detail__leaf--two" />
      </div>

      <header className="work-detail__header">
        {(status || category) && (
          <dl className="work-detail__meta">
            {status && (
              <div>
                <dt className="visually-hidden">Status</dt>
                <dd className="work-detail__status">{status}</dd>
              </div>
            )}
            {category && (
              <div>
                <dt className="visually-hidden">Category</dt>
                <dd className="work-detail__category">{category}</dd>
              </div>
            )}
          </dl>
        )}
        <h3>{project.title}</h3>
        <p className="work-detail__summary">{project.summary}</p>
      </header>

      {(hasOverview || hasSpecifics) && (
        <div className="work-detail__body">
          {hasOverview && (
            <div className="work-detail__column">
              {description && <p className="work-detail__description">{description}</p>}
              {(role || contribution) && (
                <dl className="work-detail__facts">
                  {role && (
                    <div>
                      <dt>Role</dt>
                      <dd>{role}</dd>
                    </div>
                  )}
                  {contribution && (
                    <div>
                      <dt>Contribution</dt>
                      <dd>{contribution}</dd>
                    </div>
                  )}
                </dl>
              )}
            </div>
          )}
          {hasSpecifics && (
            <div className="work-detail__column">
              {hasItems(features) && (
                <div>
                  <h4>Key features</h4>
                  <ul className="work-detail__features">
                    {features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </div>
              )}
              {hasItems(technologies) && (
                <div>
                  <h4>Technologies</h4>
                  <ul className="work-detail__tags">
                    {technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {note && <p className="work-detail__note">{note}</p>}

      {hasItems(links) && (
        <ul className="work-detail__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
