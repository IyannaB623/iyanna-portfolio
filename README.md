# Iyanna's Portfolio

A responsive personal portfolio focused on data analytics, AI, development, and
creative direction, built around the brand statement “Where data meets
creativity.” The visual direction is a “Garden Glass Dashboard”: sage and
pistachio greens, light blush, warm white, and botanical charcoal, with
translucent glass cards and light and dark (“night garden”) themes.

## Requirements

- Node.js (current LTS recommended)
- npm

## Setup

Install the project dependencies:

```sh
npm install
```

## Development

Start the local Vite development server:

```sh
npm run dev
```

Vite prints a local address in the terminal. Open that address in a browser to
view the site. The development server updates the page as source files change.

## Checks

Create a production build:

```sh
npm run build
```

Run the configured linter:

```sh
npm run lint
```

## Project structure

- `src/components/` — reusable interface components
- `src/sections/` — page sections
- `src/data/` — editable content: projects, skills, profile, contact, and
  navigation
- `src/types/` — TypeScript types for the content data
- `src/styles/` — design tokens (`tokens.css`) and shared styling
- `src/assets/` — imported images, such as the profile photo
- `public/` — static files served as-is, such as the favicon

To add a project, append one object to `src/data/projects.ts`; optional fields
that are left out are not rendered. Skills, contact links, and the résumé URL
are updated the same way in their data files.

Some copy is still draft or placeholder text, such as the “Now Building” and
“Creative Signal” notes; replace it with approved details as they become
available.