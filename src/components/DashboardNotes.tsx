import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ContactPanel } from './ContactPanel'
import { DashboardCard } from './DashboardCard'

type Note = {
  id: string
  number: string
  title: string
  preview: string
  content: ReactNode
  className: string
}

const notes: readonly Note[] = [
  {
    id: 'now-building',
    number: '03',
    title: 'Now Building',
    preview: 'A space for work in progress.',
    content: <p>Current experiments and works in progress can be shared here later.</p>,
    className: 'note-card note-card--building',
  },
  {
    id: 'creative-signal',
    number: '04',
    title: 'Creative Signal',
    preview: 'Ideas, references, and process.',
    content: <p>A small window into creative interests and process can live here later.</p>,
    className: 'note-card note-card--signal',
  },
  {
    id: 'contact-panel',
    number: '05',
    title: 'Contact Panel',
    preview: 'A place to start a conversation.',
    content: <ContactPanel />,
    className: 'note-card note-card--contact',
  },
]

function getNoteIdFromHash(hash: string | null | undefined) {
  const id = hash?.startsWith('#') ? hash.slice(1) : ''
  return notes.some((note) => note.id === id) ? id : null
}

export function DashboardNotes() {
  const [openNoteId, setOpenNoteId] = useState<string | null>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  // In-page links to a note (such as the Contact nav link) open it and move focus
  // to its button. Clicks cover repeat visits to the same hash, which fire no
  // hashchange; hashchange covers back/forward; the initial hash covers page load.
  useEffect(() => {
    const openNote = (id: string, shouldScroll: boolean) => {
      setOpenNoteId(id)
      // Wait for the browser's own jump to the anchor before moving focus.
      window.requestAnimationFrame(() => {
        const trigger = triggerRefs.current[id]
        if (!trigger) return
        if (shouldScroll) trigger.closest('article')?.scrollIntoView({ block: 'start' })
        trigger.focus({ preventScroll: true })
      })
    }

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || !(event.target instanceof Element)) return
      const id = getNoteIdFromHash(event.target.closest('a')?.getAttribute('href'))
      if (id) openNote(id, false)
    }

    const handleHashChange = () => {
      const id = getNoteIdFromHash(window.location.hash)
      if (id) openNote(id, false)
    }

    const initialId = getNoteIdFromHash(window.location.hash)
    if (initialId) openNote(initialId, true)

    document.addEventListener('click', handleClick)
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div className="notes-grid">
      {notes.map((note) => {
        const isOpen = openNoteId === note.id
        const panelId = `${note.id}-detail`

        return (
          <DashboardCard as="article" id={note.id} className={note.className} key={note.id}>
            <h2 className="note-card__heading">
              <button
                ref={(element) => { triggerRefs.current[note.id] = element }}
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
              <div className="note-card__detail">{note.content}</div>
            </div>
          </DashboardCard>
        )
      })}
    </div>
  )
}
