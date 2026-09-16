# Design QA

final result: passed

## Evidence
- Source visual truth: C:/Users/ahmad/.codex/generated_images/01a0ab3f-4008-72d3-95fb-acf9785d3a18/exec-9032fc8a-4a09-49be-ab47-6ed7d085d050.png (selected option 2).
- Implementation: review/desktop.png; review/full-page.png; review/mobile.png.
- Combined comparison: review/comparison.png, source left and implementation right.
- Desktop viewport: 1440 x 1100 CSS pixels, deviceScaleFactor 1. Actual screenshot 1440 x 1100; source normalized to 1440 x 1100. State: top of page, all photographs selected, dialogs closed.
- Mobile viewport: 390 x 844 CSS pixels, density 1.
- Test browser: separate Playwright-controlled Microsoft Edge, explicitly authorized by the user after the in-app browser runtime failed to initialize.

## Findings and comparison history
1. P2: introductory title wrapped onto three lines at desktop instead of the source's two. Reduced its desktop type size. Final screenshot confirms two lines.
2. P2: masthead side annotation overflowed at 768px. Removed the annotation at intermediate widths and adjusted masthead scale. Checked 390, 768, 1024 and 1440px: no horizontal overflow.
3. P2: secondary portrait was framed too widely. Added an overflow-hidden crop with an enlarged photograph and deliberate focal position. Final evidence shows a closer portrait.
4. P2: mobile photograph note overlaid a dark part of the real image with poor contrast. Omitted the decorative note on mobile.
5. Capture correction: reload preserved the earlier scroll position. Reset scroll instantly before taking the final desktop screenshot; the final combined comparison represents the same state.

## Required fidelity surfaces
- Typography: locally hosted Bodoni Moda and DM Sans. Editorial hierarchy, oversized masthead, italics and restrained labels maintained. Bodoni's exact letterforms differ from the generated reference; accepted font approximation. No clipping in final captures.
- Spacing/layout: three-column hero, narrow introduction, dominant central photograph and smaller right portrait; generous margins and divider-based section structure retained. Below-fold gallery expands the reference into a usable photo collection and separate screen-work section.
- Colors: warm ivory #f8f6f0, ink #191815, oxblood #823638, muted rules. No generic card backgrounds or decorative gradients.
- Images: user-supplied authentic photographs replace all generated likenesses. Champagne series selected to preserve the source palette; crops deliberately adapt to actual photographs. WebP exports and lazy loading for secondary images. Original supplied archive remains unchanged.
- Copy: reference introduction preserved. Biography and selected credits use linked reporting. No invented endorsements, awards, social statistics or management contacts. Photo titles are editorial labels, not claims of campaign authorship.
- Full comparison plus original-resolution desktop view were inspected; key typography, crop and spacing details were legible without additional focused composites.

## Interaction checks
Passed gallery filters (8 total / 3 moments), modal opening, next/previous navigation, arrow keys, Escape dismissal, credit expansion, required form fields, draft generation, download and edit with data retained, mobile menu navigation. Native modal provides focus containment. Reduced-motion styles implemented. No browser page errors observed.

## Open questions / limitations
Professional contact email is pending. The enquiry form explicitly prepares and downloads a draft; it does not send mail or falsely claim delivery. This is a local portfolio concept, not a published or officially endorsed site. Six explicitly selected videos have now been added in the Reels section. Photographer/campaign attribution should be added once supplied.

## Follow-up polish
P3: optional bespoke wordmark and closer typeface match; optional descriptive reel titles.

## Implementation checklist
- [x] Desktop and mobile composition reviewed.
- [x] P2 issues fixed and recaptured.
- [x] Core interactions exercised.
- [x] Contact limitations accurately communicated.


## Reels update verification
- Six supplied MP4s copied without alteration into public/reels; mapping in reels-provenance.json.
- Still previews extracted from the actual videos. No autoplay; native controls and inline mobile playback; only one reel plays at a time.
- Playback verified for all six videos, each advancing beyond time zero. Verified one active player after switching reels, and no page errors.
- Checked widths 390, 768 and 1440: no horizontal overflow.
- Screenshots: review/reels-desktop.png and review/reels-mobile.png. Editorial fonts, ivory surface and divider treatment retained. Three columns on desktop, two on tablet, one on phones.
- Production build passed after this change.
- final result: passed

## Career and gallery refresh — 16 September 2026
Gallery expanded to 12 supplied photographs, including 4 Moments. Selected credits expanded to eight, newest verified releases first, with year/channel labels and source links. Biography updated and the older interview explicitly labelled 2019. Sources and unresolved freshness limits recorded in content-sources.md.

Verified: gallery count, Moments filter, new-photo lightbox, eight credits, official Sauda link, no overflow at 390/768/1440, no page errors. Inspected review/work-updated.png for work-section layout and hierarchy. Production build passed.

final result: passed

## Gulab addition
Added a dedicated editorial brand section and navigation anchor. Ownership is based on the user's explicit confirmation; profile details were inaccessible. No official logo or product imagery was invented. Verified supplied Instagram destination, navigation and no overflow at 390/768/1024/1440 widths. Desktop and mobile screenshots inspected: review/gulab-desktop.png and review/gulab-mobile.png. Build passed; no page errors.

final result: passed

## Supplied media refresh
Added eight attached photographs and two attached videos from Downloads, with unique asset names to avoid overwriting older 55/56 files. The supplied window portrait and brick-wall portrait now lead the hero. Gallery: 20 total, eight New additions. Reels: eight total, newly supplied clips first. Instagram account link added.

Instagram could not be fetched, so no additional remote media or live chronology was verified. Asset origins are recorded in recent-media-provenance.json. Originals preserved.

Verified gallery filters, new lightbox image, both new video playback paths, single-player behavior, no page errors and no overflow at 390/768/1440. Inspected review/recent-desktop.png and review/recent-mobile.png. New hero crops retain faces and preserve the selected editorial layout. Build passed.

final result: passed

## Media expansion — 17 September 2026
Added 25 optimized gallery photographs and supplied Gulab artwork. Imported five unique MP4s and generated their posters; one byte-identical MP4 duplicate was skipped (SHA-256 recorded in batch-media-provenance.json). Gallery total: 45; reel total: 13.
Gallery initially renders 12 photos and appends 12 per click, with a live count and keyboard focus moved to the first new card. Category changes reset the batch. Images remain lazy loaded; videos use preload=none.
Validation: production build passed. Automated Edge checks passed for 12/24/36/45 pagination, unique cards, all 45 image decodes, filter reset, lightbox navigation and Escape, playback of each new video and single active playback, 390/768/1440 widths without overflow, and no page errors. Desktop gallery and Gulab screenshots reviewed.

## Component refactor — 17 September 2026
Extracted ten focused components and moved photos, reels, and credits into src/data. App now handles page composition only. State is owned by Gallery, Header, Reels, ScreenCredits, and EnquiryForm; PhotoViewer receives controlled selection and navigation callbacks. Fonts are loaded by main.jsx and media URLs share one helper. Existing styles and content are preserved.
Validation: production build passed. Existing gallery/media regression checks passed (45 images, pagination, filters, viewer, five new videos, single playback, responsive widths, no runtime errors). Additional browser checks passed for mobile menu, exclusive credit expansion/collapse, enquiry draft download contents, edit value retention, and dialog body-scroll restoration. The first browser attempt timed out on initial navigation; rerun completed successfully.

## Final artist review — 17 September 2026
Fixed section links using a shared SectionLink component with explicit scrolling, URL updates, and focus handling. Header stays visible; section offsets account for it. Replaced the draft enquiry form with the user-selected Instagram contact link. Added favicon and social sharing metadata.
Verified all six navigation destinations at 1440, 768, and 390 pixels; hero and footer links; accordion; 45-photo load-more/filter/viewer flow; all six currently selected reels; no horizontal overflow or runtime errors. Production build and all four hosting worker tests pass.
Hosted version 1 uses commit 280bbbbb602158b9166ab045c9eb42e97ddca409. Site access remains private pending the user's choice of public-link or invited-viewer sharing.
