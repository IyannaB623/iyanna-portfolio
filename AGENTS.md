# Project guidance

## Goal

Build a polished, career-focused personal portfolio for recruiters and hiring
managers. Present Iyanna as strategic, technically capable, professional, and
creative, with emphasis on data analytics, AI, development, and creative
direction. The central brand statement is “Where data meets creativity.”

## Design direction

- Follow the approved “Garden Glass Dashboard” direction: soft garden greens
  (sage, pistachio, fresh leaf, and subtle moss), light blush pink, warm white,
  and deep botanical charcoal.
- Do not use aqua, cyan, blue-mint, neon green, or berry pink. Use warm
  yellow/garden undertones in green-to-blush gradients.
- Use translucent white cards, backdrop blur, thin semi-transparent white
  borders, soft green-undertone shadows, and 24–28px corner radii. Always
  provide an opaque card fallback for browsers without backdrop-filter.
- Maintain accessible contrast. Reserve blur and transparency for major glass
  surfaces rather than applying it indiscriminately to all elements.
- Keep organic background movement slow and elegant, and honor reduced-motion
  preferences. Cards should be interactive without hiding essential information
  behind hover.
- Avoid excessive glow, generic SaaS clutter, arbitrary skill percentages, and
  invented projects, results, biography, or professional claims.
- Use regular CSS and reusable custom properties in `src/styles/tokens.css`.
- Use original CSS or SVG details for visual storytelling; do not copy another
  portfolio's layout, colors, illustrations, card arrangement, or interactions.
- Do not add a framework or package when standard React, TypeScript, and CSS
  already solve the need.
- Keep content data separate from reusable presentation where practical.
- Later sections may include project case studies with measurable impact,
  personal interests and creative details, a playful interactive contact
  section, and local-time or other small personality-driven elements. Do not
  invent facts or build these features until requested.
- The future contact finale may be an interactive section conceptually inspired
  by a draggable idea board. It may include a personal photo, career focus or
  opportunities, email, résumé, local time, selected interests, GitHub and
  LinkedIn, and one playful personal card. Do not build it or invent its content
  until requested.

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