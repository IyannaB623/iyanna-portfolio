const notes = [
  {
    id: 'now-building',
    number: '03',
    title: 'Now Building',
    preview: 'A space for work in progress.',
    detail: 'Current experiments and works in progress can be shared here later.',
    className: 'note-card note-card--building',
  },
  {
    id: 'creative-signal',
    number: '04',
    title: 'Creative Signal',
    preview: 'Ideas, references, and process.',
    detail: 'A small window into creative interests and process can live here later.',
    className: 'note-card note-card--signal',
  },
  {
    id: 'contact-panel',
    number: '05',
    title: 'Contact Panel',
    preview: 'A place to start a conversation.',
    detail: 'Contact links and details will be added when they are ready to share.',
    className: 'note-card note-card--contact',
  },
]

export function DashboardNotes() {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <details id={note.id} className={`glass-card ${note.className}`} key={note.id}>
          <summary>
            <span className="note-card__number">{note.number}</span>
            <span className="note-card__body">
              <span className="note-card__title">{note.title}</span>
              <span className="note-card__preview">{note.preview}</span>
            </span>
            <span className="note-card__toggle" aria-hidden="true">+</span>
          </summary>
          <p className="note-card__detail">{note.detail}</p>
        </details>
      ))}
    </div>
  )
}
