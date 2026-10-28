# Project guidance

## Goal

Build a polished, career-focused personal portfolio for recruiters and hiring
managers. Present Iyanna as strategic, technically capable, professional, and
creative, with emphasis on data analytics, AI, development, and creative
direction. The central brand statement is “WHERE DATA MEETS CREATIVITY.”

## Design direction

- Use a sophisticated black, off-white, and pink visual identity.
- Keep layouts clear, confident, and professional; avoid visual clutter.
- Use regular CSS and reusable custom properties in `src/styles/tokens.css`.
- Do not add a framework or package when standard React, TypeScript, and CSS
  already solve the need.
- Keep content data separate from reusable presentation where practical.

## Coding conventions

- Use React function components and TypeScript.
- Keep components focused and reuse shared components instead of duplicating UI.
- Use semantic HTML and descriptive, consistent class names.
- Keep user-facing content easy to update in the data or section files.
- Run `npm run build` and `npm run lint` after meaningful changes.

## Responsive accessibility requirement

Every change must preserve a responsive experience on small and large screens.
Use semantic landmarks, clear heading order, keyboard-accessible controls,
visible focus styles, sufficient color contrast, and reduced-motion preferences
where motion is introduced. Do not rely on color alone to communicate meaning.