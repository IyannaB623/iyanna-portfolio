const expertiseItems = [
  'DATA ANALYTICS',
  'ARTIFICIAL INTELLIGENCE',
  'DEVELOPMENT',
  'CREATIVE DIRECTION',
]

function MarqueeGroup() {
  return (
    <span className="expertise-marquee__group">
      {expertiseItems.map((item) => (
        <span className="expertise-marquee__item" key={item}>
          {item}
          <span className="expertise-marquee__separator" aria-hidden="true">•</span>
        </span>
      ))}
    </span>
  )
}

export function ExpertiseMarquee() {
  return (
    <section className="expertise-marquee" aria-label="Areas of focus">
      <p className="visually-hidden">
        DATA ANALYTICS • ARTIFICIAL INTELLIGENCE • DEVELOPMENT • CREATIVE DIRECTION•
      </p>
      <div className="expertise-marquee__viewport">
        <div className="expertise-marquee__track" aria-hidden="true">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>
    </section>
  )
}