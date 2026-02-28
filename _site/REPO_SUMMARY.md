# Repo Summary

## Session Notes

- [Applied] Softer palette kept and enforced in `css/custom.css`.
  - Light mode now uses an off-white background with softer section contrast.
  - Dark mode now uses neutral charcoal surfaces with a warm accent color.

- [Applied] Dark-mode distill footnotes hardened in `css/custom.css`.
  - Footnote text, footnote links, and appendix footnotes now use a readable warm accent in dark mode.
  - Added explicit `opacity: 1 !important` safeguards to prevent low-opacity/light-gray fallbacks.

- [Applied] Added visible blog-style header bar under navbar on `blog/2022/distill_MAP/index.html`.

- [Applied] Adjusted dark accent and homepage selector scope after UI regression feedback.
  - Replaced yellow-leaning accent with a softer warm rose tone.
  - Removed global `body.dark a` overrides so `index.html` highlights/news keep their intended styling.

- [Applied] Added navbar + visible blog-style header bar to `articles/philosophical/phmind_intelligence.html`.
  - Header bar now appears on `articles/philosophical/phmind_intelligence.html?src=phmind_intelligence.md` directly under the navbar.

- [Applied] Synced philosophical article navbar items with homepage navigation.
  - Updated the article page navbar to: `Home`, `Highlights`, `Publications`, `Philosophy`, `Contact`.

- [Applied] Removed extra page-level blog header text block from philosophical article page.
  - Deleted the visible “Philosophical Article / Blog entry header bar” section and kept only the navbar.

- [Applied] Matched philosophical article content width to publication column width behavior.
  - Publication rows use `col-lg-10` (83.333% of container); article wrapper max width updated from `900px` to `1075px` to align on large screens.

- [Applied] Improved philosophical essay readability and heading presentation.
  - Updated essay card/text colors for clearer light and dark mode readability.
  - Restyled the H1 title with stronger typography and divider treatment.
  - Added an author/reviewer credit line directly below the essay title.

- [Applied] Added Jan 2026 news item to homepage feed.
  - Added IJCV acceptance update with Springer link in `data/site-content.json`.

- [Applied] Refined recent homepage news text formatting.
  - Removed the trailing exclamation mark from the Jan 2026 IJCV news item.
  - Added an emoji to the Dec 2025 MIT lab news item.

- [Applied] Switched Dec 2025 MIT news item emoji placement to leading icon.
  - Removed inline `🧠` from the text and changed the news icon to `fas fa-brain`.

- [Applied] Updated Dec 2025 MIT news icon to an airplane-style symbol.
  - Changed leading icon to `fas fa-plane-departure`.
