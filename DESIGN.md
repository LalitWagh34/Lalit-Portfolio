# Design direction

## References

- https://nihar-chandra-sharma.vercel.app/ — inspected page screenshot on 2026-11-14: dark navy canvas, purple/pink heading treatment, rounded navigation, circular portrait, section-based portfolio.
- https://rahulxcode.vercel.app/ — earlier content reference for project summaries and source links.
- https://www.shri.codes/ — earlier content reference for proof of work and engineering focus.

The implementation is an adaptation for Lalit, not a pixel reproduction. Nihar's photograph, employment, education, and project content are not reused.

## Proposed implementation tokens

Background #11111b; card #1a1928; raised surface #222034; text #f3f0fa; secondary text #aba7bd; accent #b59aff; primary button #8956e8. These are chosen implementation values, not exact extracted reference CSS.

Layouts use a 1140px maximum container, three project columns on desktop, two skill columns on medium screens, and a single project column below 760px. Mobile navigation is a collapsible menu. Touch interactions do not depend on hover. Native dialogs provide focus containment and Escape dismissal; detail tabs support arrow keys. Reduced motion disables animated scrolling and transitions.

Portrait uses the public GitHub profile image, stored locally. Product previews are original interface studies. Replace these with actual product screenshots when available.
