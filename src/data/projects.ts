import type { Project } from '../types/project'

// To add a project, append one object. See src/types/project.ts for the fields.
export const projects: readonly Project[] = [
  {
    id: 'coincide',
    title: 'Coincide',
    category: 'Product Design / Working Prototype',
    status: 'Working prototype',
    summary:
      'A peer-connection platform for MSBA students built around a repeatable Match, Spar, and Review experience.',
    description:
      'Coincide matches students based on their interests and availability, gives them a space to practice through live conversations, and provides AI-supported feedback to help them improve.',
    features: [
      'Interest- and availability-based matching',
      'Live peer conversation practice',
      'AI-supported coaching and feedback',
      'Repeatable Match → Spar → Review experience',
    ],
    role: 'UI/UX Design · Product Concept · Presentation',
    contribution:
      'Shaped the product concept, led much of the UI/UX direction, collaborated with the team on the working prototype, and helped present the final product.',
  },
  {
    id: 'career-intelligence-agent',
    title: 'Career Intelligence Agent',
    category: 'Automation / Career Technology',
    status: 'Active project',
    summary:
      'A personalized career intelligence system that delivers daily job and internship matches by email.',
    description:
      'The system provides job and internship recommendations along with relevant articles and industry updates based on my professional interests.',
    features: [
      'Daily job and internship recommendations',
      'Personalized email delivery',
      'Curated industry articles',
      'Career and industry trend discovery',
    ],
  },
  {
    id: 'community-safety-resource-planner',
    title: 'Community Safety Resource Planner',
    category: 'Data Analytics',
    status: 'Phase 2 backend complete',
    summary:
      'A reproducible analysis of recorded LAPD offenses by area and time period to support human review of possible non-enforcement community safety resources.',
    description:
      'The project cleans, validates, and analyzes 471,285 LAPD NIBRS offense records. It identifies descriptive patterns that may help planners review where outreach, lighting, transit support, victim services, or late-night service capacity could be useful. It does not predict behavior or label neighborhoods as dangerous.',
    features: [
      'Reproducible data-cleaning pipeline',
      'Analysis by LAPD area and time period',
      'Data-quality flags and record-level validation',
      'Privacy-conscious inspection samples',
      'Automated backend tests',
      'Documented assumptions and limitations',
    ],
    technologies: ['Python', 'pandas', 'Jupyter Notebook', 'unittest'],
    role: 'Data Analyst and Developer · Individual Project',
    note: 'A Flask and Plotly interface is planned for Phase 3.',
  },
  {
    id: 'aroundsc',
    title: 'AroundSC',
    category: 'Web Application / Event Discovery',
    status: 'Working prototype',
    summary:
      'A USC campus event-discovery prototype that helps students find relevant events through natural-language search, interactive filters, and map and list views.',
    description:
      'AroundSC combines curated public USC listings with showcase data in one discovery experience. Students can search by interest, date, time, and campus location, review event details, save local RSVPs, and export events to their calendars.',
    features: [
      'Rule-based natural-language event search',
      'Interactive map and list views',
      'Category, date, time, and location filtering',
      'Local RSVP persistence',
      'Calendar exports and external registration links',
      'Responsive and reduced-motion support',
    ],
    technologies: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'JavaScript',
      'History API',
      'Local Storage',
      'Intersection Observer',
      'Node test runner',
    ],
  },
]
