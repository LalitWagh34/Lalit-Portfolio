# Lalit Wagh — Portfolio

Responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons.

## Local development

Run `npm install`, then `npm run dev`. Open http://localhost:3000.

Run `npm run build` for a production build and `npm run typecheck` for TypeScript validation.

## Structure

- `app/page.tsx`: server-rendered page composition.
- `components/`: section components, reusable UI primitives, project previews, and accessible project dialog.
- `data/profile.ts`: profile, links, navigation, and skill groups.
- `data/projects.ts`: typed project content.
- `app/globals.css`: design tokens, layouts, and responsive styles.
- `app/project-visuals.css`: styles for the illustrative product previews.
- `public/profile.jpg`: locally stored public GitHub profile image.

Client components are limited to navigation tracking, project filtering/dialogs, and copying the contact email. Other sections render as server components. No environment variables or database are required.

Project previews are interface studies rather than live product screenshots; architecture diagrams are conceptual. All source links point to the public repositories. Contact opens an email client; no form submission service is implied. Add a resume link when a resume file is supplied.

## Resume and architecture update

The hero, navigation, and journey section link to the supplied resume. Education, achievements, and research contribution are based on that document. Project architecture diagrams now use repository documentation and selected implementation files, with source links inside every diagram. See SOURCES.md for provenance and verification scope.

New components include a pointer-responsive CSS 3D scene, a reusable interactive architecture renderer, and a scroll-reveal observer. The design uses charcoal surfaces and cyan/mint/amber/rose accents. Reduced-motion preferences disable animations while preserving content and static 3D depth.
