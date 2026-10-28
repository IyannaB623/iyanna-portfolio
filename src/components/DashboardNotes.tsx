import { useState } from 'react'
import { DashboardCard } from './DashboardCard'

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
  const [openNoteId, setOpenNoteId] = useState<string | null>(null)

  return (
    <div className="notes-grid">
      {notes.map((note) => {
        const isOpen = openNoteId === note.id
        const panelId = `${note.id}-detail`

        return (
          <DashboardCard as="article" id={note.id} className={note.className} key={note.id}>
            <h2 className="note-card__heading">
              <button
                className="note-card__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenNoteId(isOpen ? null : note.id)}
              >
                <span className="note-card__number">{note.number}</span>
                <span className="note-card__body">
                  <span className="note-card__title">{note.title}</span>
                  <span className="note-card__preview">{note.preview}</span>
                </span>
                <span className="note-card__toggle" aria-hidden="true">+</span>
              </button>
            </h2>
            <div id={panelId} className="note-card__panel" hidden={!isOpen}>
              <p className="note-card__detail">{note.detail}</p>
            </div>
          </DashboardCard>
        )
      })}
    </div>
  )
}
