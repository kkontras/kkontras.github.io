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

- [Applied] Professional homepage design pass for early-career researcher positioning.
  - Reworked top-right intro into a focused hero block with concise positioning, CTA buttons, and research signal chips.
  - Improved News readability (larger text and cleaner line height).
  - Reduced highlights visual heaviness by removing fullscreen behavior and adding a compact highlight card strip.
  - Improved publication scannability by styling venue/journal text as metadata chips.
  - Unified accent usage and corrected `Febr 2025` typo to `Feb 2025`.

- [Applied] Second professional refinement pass focused on visual restraint and whitespace control.
  - Removed the extra highlight mini-card strip to reduce clutter.
  - Tightened section vertical spacing (`About`, `Highlights`, `Publications`, `Philosophy`, `Contact`) to reduce empty areas.
  - Reduced highlights carousel height and hero paddings/margins for denser, cleaner composition.
  - Simplified profile/publication card geometry (smaller radii, tighter paddings).
  - Shortened and formalized hero headline copy.

- [Applied] Removed the boxed hero intro block in About after visual feedback.
  - Replaced it with a single compact summary line.
  - Deleted unused hero-specific styles and preserved tighter spacing.

- [Applied] Refined About intro to plain professional lead paragraphs.
  - Kept an intro but removed headline/chip-style presentation.
  - Replaced with two concise lead paragraphs and lightweight typography.

- [Applied] Updated profile role line in About card.
  - Changed `PostDoc Researcher KU Leuven` to `PostDoc at MIT & KU Leuven`.

- [Applied] Added new Feb 2026 CVPR acceptance news item.
  - Added “The More, the Merrier: Contrastive Fusion for Higher-Order Multimodal Alignment” with the same publications link (`https://arxiv.org/abs/2511.21331`).

- [Applied] Cleaned CVPR news title phrasing.
  - Removed the “The More, the Merrier:” prefix from the Feb 2026 CVPR news item label.

- [Applied] Updated CVPR paper venue label in Publications list.
  - Changed the entry badge from `ArXiv 2025` to `CVPR 2026` for the Contrastive Fusion paper.

- [Applied] Refined About intro affiliation wording.
  - Updated the intro to: `MIT Media Lab and KU Leuven (Biomed, ESAT), working with Paul Liang and Maarten De Vos`.

- [Applied] Removed parentheses in About intro affiliation phrase.
  - Reworded to inline `KU Leuven Biomed, ESAT` format.

- [Applied] Refined About affiliation text and highlights visual balance.
  - Updated affiliation wording to `KU Leuven Biomed-ESAT`.
  - Increased highlights height to a medium layout (`440px` desktop, `340px` mobile) after small-height feedback.

- [Applied] Citation integrity pass across all listed homepage publications.
  - Added/fixed all BibTeX files referenced by `data-filename` in `index.html` so each Cite button resolves to an existing file.
  - Updated citation metadata using current online sources (arXiv records, Springer IJCV page, IEEE/PubMed metadata, and KU Leuven repository link).

- [Applied] Fixed dark-mode citation modal text contrast.
  - Added explicit dark-mode styles for citation modal content, code block, buttons, and error text so BibTeX text remains readable.

- [Applied] Switched MCR publication reference from arXiv to official NeurIPS page.
  - Updated `index.html` publication link to NeurIPS virtual poster URL.
  - Replaced `mcr.bib` entry with a NeurIPS conference-style citation and NeurIPS URL.

- [Applied] Added dual citation entries for BMVC-IJCV publication.
  - Updated `multiloss.bib` to include both BMVC 2024 conference citation and IJCV 2026 journal citation.

- [Applied] Renamed BMVC-IJCV BibTeX keys for consistency.
  - Changed keys to `kontras2024MLB` (BMVC) and `kontras2026MLB` (IJCV).

- [Applied] Added auto-updating GitHub activity snippet below profile box.
  - Inserted a `Recent GitHub Activity` card under the profile card in `index.html`.
  - Added client-side GitHub API loader (`js/github-activity.js`) that lists repositories from recent push events.
  - Added light/dark styling for the activity card in `css/custom.css`.

- [Applied] Refined GitHub activity widget content rules.
  - Excluded `kkontras/kkontras.github.io` from the recent repos list.
  - Added an auto-updating `Website last updated: ...` line sourced from the latest commit date of this repository.

- [Applied] Reduced visual weight of GitHub activity panel under profile.
  - Removed card-like background/border radius and switched to a subtle top-divider style.
  - Decreased heading/body/meta type sizes and opacity so profile identity remains the primary visual focus.

- [Applied] Reframed GitHub panel from commit tracking to popular repositories.
  - Replaced recent push/recency logic with a popularity view based on stars/forks/language from public repos.
  - Updated widget heading/subtitle and loading/fallback copy to match the new purpose.

- [Applied] Switched GitHub panel to a curated featured-repositories list.
  - Updated heading to `Selected Public Repositories`.
  - Configured fixed repo set to include `kkontras/SynIB`, `kkontras/MCR`, `kkontras/CoRe-Sleep`, and `kkontras/MLB`.
  - Kept live metadata (stars/forks/language) fetched from GitHub API.

- [Applied] Simplified GitHub panel heading structure.
  - Removed the redundant subtitle under `Selected Public Repositories`.

- [Applied] Adjusted spacing in GitHub repositories panel.
  - Added extra space between the `Selected Public Repositories` title and the repository list.

- [Applied] Tuned typography for About narrative and News readability.
  - Increased `News` item text size/line-height for cleaner scanability.
  - Increased About intro/body paragraph font sizes and line-height for better long-form readability.

- [Applied] Reduced About and News text sizing after follow-up feedback.
  - Scaled down News and About font sizes/line-heights for a tighter visual density.

- [Applied] De-emphasized News list visual weight.
  - Removed per-item box treatment (background/border/radius) in light and dark themes.
  - Reduced icon size and softened icon color to make News feel less dominant.

- [Applied] Added structural separation above News and removed remaining highlight feel.
  - Inserted a horizontal divider above the `News` heading.
  - Removed remaining background-emphasis traits from News items and softened link weight.

- [Applied] Removed residual dark-mode News background source rules.
  - Deleted grouped dark-theme selectors that were reintroducing `.news-item` background highlight.

- [Applied] Converted News into a timeline-style list with year rails.
  - Added a left vertical line per entry with extracted year labels from news dates.
  - Updated news rendering (`js/site-content.js`) and styling (`css/custom.css`) to support the timeline layout.

- [Applied] Grouped News timeline years to avoid repetition.
  - Year is now shown only on the first entry of each year block; subsequent entries in the same year hide the repeated year label.

- [Applied] Simplified News timeline text and markers.
  - Removed displayed month/year prefixes (e.g., `Feb 2026:`) from news text while keeping year grouping rails.
  - Switched to a neutral circular marker instead of per-item emoji-like icons.

- [Applied] Removed News timeline bullet markers entirely.
  - Kept only year rails and text entries (no dot/bullet symbols).

- [Applied] Refined grouped-year timeline continuity and spacing.
  - Kept vertical rail continuity for entries within the same year block.
  - Reduced vertical spacing between entries that belong to the same year.

- [Applied] Reworked News timeline rail to a single continuous line.
  - Replaced per-item segmented rails with one list-level vertical line to avoid dashed/fragmented appearance.

- [Applied] Prevented timeline rail from crossing year labels.
  - Shifted the vertical line to the right of year labels and added year-label background shielding for light/dark themes.

- [Applied] Adjusted News rail to pass through year column with stop/continue gaps at labels.
  - Centered line back in the year column and kept masking only on visible year labels to create the intended interrupted effect.

- [Applied] Tuned News vertical spacing by year grouping.
  - Reduced spacing between entries within the same year.
  - Increased separation at transitions between different years.

- [Applied] Reworded Jan 2026 IJCV news entry and kept paper-only link.
  - Updated text to `Accepted at IJCV` and linked only the paper title `Self-Balancing Multimodal Models via Multi-Loss Gradient Modulation`.

- [Applied] Condensed About narrative copy while preserving advisor/supervisor names.
  - Shortened PhD and pre-PhD paragraphs for faster scanning and kept all named supervisors in place.

- [Applied] Normalized emphasis in About PhD sentence.
  - Changed `Multimodal Fusion` and `Multimodal Competition` to lowercase, non-bold text.

- [Applied] Merged About intro lines and updated research-focus phrasing.
  - Combined the first two intro sentences into one paragraph.
  - Updated focus text to `multimodal learning, training dynamics, and reliable models and information theory`.

- [Applied] Reworded News entries to use explicit action verbs.
  - Updated event phrasing to consistent verb-led forms (`Accepted`, `Received`, `Presented`, `Delivered`, `Defended`).
  - Updated seminar wording to `seminar on Multimodal Competition at KU Leuven and FORTH`.

- [Applied] Updated NeurIPS spotlight phrasing in News.
  - Changed to `Accepted at NeurIPS as Spotlight for` followed by the linked paper title.

- [Applied] Updated Multimodal Competition seminar link to FORTH video source.
  - Replaced KU Leuven YouTube URL with `https://www.youtube.com/watch?v=5H4Hf5yx9Co`.

- [Applied] Refined publication card spacing between authors and tags.
  - Adjusted `pub-details` gap and added subtle `pub-meta`/`pub-footer` margin tuning for cleaner separation.

- [Applied] Tightened publication author-tag spacing after review.
  - Reduced the separation margins to bring author names and tags slightly closer.

- [Applied] Normalized News punctuation style.
  - Added trailing periods to all news entries except the `officially a doctor!` item, per requested consistency rule.

- [Applied] Added dual-email contact lines.
  - Added `konstantinos dot kontras @kuleuven.be` and `kkontras @mit.edu` in the Contact section.

- [TODO] Preserve current section on browser refresh.
  - Refresh currently resets to Home/top when scrolling sections without URL hash.
  - Add state persistence so refresh restores the last active section (for example Publications).

- [Applied] Added dual-link support in News items and split seminar links.
  - Updated News renderer to support `links` arrays (multiple links with separators).
  - Updated Oct 2024 seminar entry to include separate links for `KU Leuven` and `FORTH`.

- [Applied] Refined VSC grant link scope in News entries.
  - Made only `VSC Tier-1` clickable and moved `Compute Grant` to plain text in both VSC grant news items.

- [Applied] Updated MIT-KU Leuven Seed Fund news phrasing.
  - Changed wording to `Received the MISTI: MIT-KU Leuven Seed Fund €30k.`

- [Applied] Updated NeurIPS spotlight news linked title.
  - Replaced `Balancing multimodal training through game-theoretic regularization` with `Multimodal Competition Regularizer`.

- [Applied] Added dedicated publication thumbnails for all homepage paper entries.
  - Replaced placeholder figures in `index.html` with per-paper visuals (`MCR_Cover.svg`, `contrastive_fusion_thumb.png`, `thesis_thumb.svg`, `MLB_site.svg`, `core-site.drawio.png`).
  - Added a first-page PDF snapshot thumbnail for Contrastive Fusion (`media/contrastive_fusion_thumb.png`) and a custom thesis thumbnail (`media/thesis_thumb.svg`).

- [Applied] Replaced stylized publication thumbnails with figure-centric paper previews.
  - Generated figure-based thumbnails from publication PDFs (MCR, Contrastive Fusion, MLB, CoRe-Sleep) and updated `index.html` to use `media/mcr_thumb.png`, `media/contrastive_thumb.png`, `media/mlb_thumb.png`, and `media/coresleep_thumb.png`.
  - Kept thesis entry on `media/thesis_thumb.svg` as fallback because a direct thesis PDF download endpoint could not be reliably resolved from this environment.

- [Applied] Removed interim non-final contrastive thumbnail assets.
  - Deleted `media/contrastive_fusion_thumb.png` and `media/contrastive_fusion_thumb.svg` after replacing them with `media/contrastive_thumb.png`.

- [Applied] Updated NeurIPS MCR thumbnail source to `media/mcr_methods_fig.pdf`.
  - Re-rendered `media/mcr_thumb.png` from `mcr_methods_fig.pdf` and cropped it to focus on the methods figure for the Publications card.

- [Applied] Updated BMVC-IJCV thumbnail source to `media/Methods_MLB.png`.
  - Rebuilt `media/mlb_thumb.png` from the methods figure asset with a wide crop so the publication card shows the paper figure directly.

- [Applied] Improved homepage mobile flow and panel color consistency.
  - Moved `Selected Public Repositories` below News on phone screens by rendering a mobile-only activity block in the main content column (`d-lg-none`) while keeping a desktop-only block under the profile (`d-none d-lg-block`).
  - Updated `js/github-activity.js` to populate multiple repository widgets via shared class hooks instead of single IDs.
  - Unified navbar/header and profile card backgrounds per theme (`--kk-panel-light`, `--kk-panel-dark`) so both elements share the same surface color in light and dark modes.

- [Applied] Recentered NeurIPS MCR publication thumbnail after visual QA.
  - Re-cropped `media/mcr_thumb.png` from `mcr_methods_fig.pdf` with balanced framing to avoid left clipping and preserve the full method diagram.

- [Applied] Enforced identical header/profile panel colors across themes.
  - Added explicit light/dark overrides for `.page-header`, `.header--fixed`, `#navbar-main`, and `#profile` so the navbar header and profile block always use the same background color in both modes.

- [Applied] Updated MCR publication thumbnail to include both key figures.
  - Added rendered assets from `mcr_methods_fig.pdf` and `game_fig-1.pdf` (`media/mcr_methods_fig.png`, `media/mcr_game_fig.png`).
  - Replaced the single MCR thumbnail image with a stacked two-figure layout (methods on top, game figure below) to reduce empty whitespace.

- [Applied] Finalized MCR thumbnail as one centered composite image.
  - Combined methods and game figures into a single `media/mcr_thumb.png` with auto-cropped figure bounds and centered top/bottom placement to avoid excessive whitespace.
  - Restored Publications card markup back to a single image element for MCR (removed temporary stacked-figure HTML/CSS).

- [Applied] Upgraded MCR composite thumbnail to vector format.
  - Generated `media/mcr_thumb.pdf` by composing `game_fig-1.pdf` (top) and `mcr_methods_fig.pdf` (bottom) into one vector PDF thumbnail.
  - Updated the MCR publication figure to load the vector PDF via `<object>` with PNG fallback for compatibility.

- [Applied] Corrected MCR publication figure rendering to a proper single image card.
  - Replaced the `<object>` PDF embed with a normal `<img src=\"./media/mcr_thumb.png\">` thumbnail so it renders cleanly in the list.
  - Kept the combined PDF (`media/mcr_thumb.pdf`) as the linked source when opening the figure.

- [Applied] Final MCR thumbnail quality and behavior refinement.
  - Removed click-through behavior from the MCR thumbnail in Publications (image is now non-clickable).
  - Re-rendered `media/mcr_thumb.png` from vector `media/mcr_thumb.pdf` at high resolution (`2400x1760`) for significantly better zoom quality.

- [Applied] Rebuilt MCR composite with centered area-of-interest crops before stitching.
  - Cropped both source PDF figures around their content regions with balanced margins, then stitched them into one new page (`media/mcr_thumb.pdf`) with top/bottom layout.
  - Re-exported `media/mcr_thumb.png` from the rebuilt composition at `2400x1760` (matching card aspect ratio) for high-fidelity display.

- [Applied] Updated CVPR publication figure to Confu asset.
  - Switched the Contrastive Fusion card thumbnail from `media/contrastive_thumb.png` to `media/confu.png`.

- [Applied] Refined thesis publication thumbnail using `Cover_Intro`.
  - Generated `media/thesis_cover_intro.png` from `media/Cover_Intro-1.pdf` and wired thesis card to `media/thesis_thumb.png`.
  - Added thesis-specific thumbnail styling (`object-fit: contain` with soft background) to keep the cover fully visible and visually clean in the publication card.

- [Applied] Fixed CVPR Confu thumbnail cropping in publication card.
  - Added a dedicated `confu-figure` class and switched to `object-fit: contain` with centered placement so the full figure is visible without left/right clipping.

- [Applied] Removed custom Confu thumbnail background override.
  - Dropped the extra background/padding on `.confu-figure` so the image uses its own native background while preserving full-fit scaling.

- [Applied] Tuned Confu thumbnail band color to match figure background.
  - Set `.confu-figure` background to `#f6f6f6` so top/bottom letterbox space blends with the image instead of showing a contrasting panel tone.

- [Applied] Set Confu thumbnail letterbox background to white.
  - Updated `.confu-figure` background to `#ffffff` per latest visual preference.

- [Applied] Lightened publication figure containers in dark mode.
  - Updated dark-mode `.pub-figure img` panel background and border to a light style so the rounded container is no longer dark/heavy.

- [Applied] Switched thesis publication image to thesis cover asset.
  - Updated thesis card thumbnail source from `media/thesis_thumb.png` to `media/thesis_cover.png`.

- [Applied] Removed inner whitespace from thesis thumbnail container.
  - Updated `.thesis-figure` to `object-fit: cover` with zero padding/background so the image fully fills the rounded square without visible white gaps.

- [Applied] Updated philosophy publication figure asset.
  - Replaced the philosophy card thumbnail placeholder with `media/metabolic_mind.png` for `The Metabolic Mind` entry.
