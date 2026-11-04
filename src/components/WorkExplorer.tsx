import { useRef, useState, type KeyboardEvent } from 'react'
import { projects } from '../data/projects'
import { DashboardCard } from './DashboardCard'
import { ProjectDetail } from './ProjectDetail'

const panelId = 'work-panel'
const defaultProjectId = (projects.find((project) => project.featured) ?? projects[0]).id

const formatPosition = (position: number) => String(position).padStart(2, '0')
const getTabId = (projectId: string) => `work-tab-${projectId}`

export function WorkExplorer() {
  const [selectedProjectId, setSelectedProjectId] = useState(defaultProjectId)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const selectedIndex = Math.max(0, projects.findIndex((project) => project.id === selectedProjectId))
  const selectedProject = projects[selectedIndex]

  const selectAndFocus = (index: number) => {
    const nextIndex = (index + projects.length) % projects.length
    setSelectedProjectId(projects[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  // Tabs pattern: arrow keys move between projects (and wrap), Home/End jump.
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const nextIndexByKey: Record<string, number> = {
      ArrowRight: selectedIndex + 1,
      ArrowDown: selectedIndex + 1,
      ArrowLeft: selectedIndex - 1,
      ArrowUp: selectedIndex - 1,
      Home: 0,
      End: projects.length - 1,
    }
    const nextIndex = nextIndexByKey[event.key]
    if (nextIndex === undefined) return

    event.preventDefault()
    selectAndFocus(nextIndex)
  }

  return (
    <DashboardCard
      id="work"
      className="work-card"
      kicker="A few directions"
      title="Selected work"
      titleId="work-title"
      index={`${formatPosition(selectedIndex + 1)} / ${formatPosition(projects.length)}`}
    >
      <div className="work-explorer">
        <div className="work-selector" role="tablist" aria-label="Projects" onKeyDown={handleKeyDown}>
          {projects.map((project, index) => {
            const isSelected = index === selectedIndex

            return (
              <button
                key={project.id}
                ref={(element) => { tabRefs.current[index] = element }}
                id={getTabId(project.id)}
                className="work-selector__item"
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={panelId}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <span className="work-selector__number" aria-hidden="true">{formatPosition(index + 1)}</span>
                <span>{project.title}</span>
                <span className="work-selector__arrow" aria-hidden="true">↗</span>
              </button>
            )
          })}
        </div>
        <ProjectDetail project={selectedProject} id={panelId} labelledBy={getTabId(selectedProject.id)} />
      </div>
    </DashboardCard>
  )
}
