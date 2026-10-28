import type { ReactNode } from 'react'

type DashboardCardHeading =
  | {
      /** Renders a standard card header with an h2; the card is labelled by it. */
      title: ReactNode
      titleId: string
      kicker?: string
      /** Decorative position label such as "01 / 03"; hidden from assistive tech. */
      index?: string
      /** Extra decorative header content, placed after the index. */
      headerAside?: ReactNode
      labelledBy?: never
    }
  | {
      title?: never
      titleId?: never
      kicker?: never
      index?: never
      headerAside?: never
      /** ID of a heading inside children, for cards with their own heading markup. */
      labelledBy?: string
    }

type DashboardCardProps = DashboardCardHeading & {
  as?: 'section' | 'article' | 'div'
  id?: string
  className?: string
  /** 'hero' is the opaque botanical-charcoal card that does not lift on hover. */
  variant?: 'glass' | 'hero'
  children: ReactNode
}

export function DashboardCard({
  as: Element = 'section',
  id,
  className,
  variant = 'glass',
  title,
  titleId,
  kicker,
  index,
  headerAside,
  labelledBy,
  children,
}: DashboardCardProps) {
  const classes = ['glass-card', variant === 'hero' && 'glass-card--hero', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Element id={id} className={classes} aria-labelledby={title ? titleId : labelledBy}>
      {title && (
        <header className="dashboard-card__header">
          <div>
            {kicker && <p className="card-kicker">{kicker}</p>}
            <h2 id={titleId}>{title}</h2>
          </div>
          {index && <span className="card-index" aria-hidden="true">{index}</span>}
          {headerAside}
        </header>
      )}
      {children}
    </Element>
  )
}
