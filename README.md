# Zubab Rana â€” Beyond the Frame

An editorial portfolio built from selected concept 2, using authentic photographs supplied in E:/zubab.rana.zip.

## Run locally
From this folder:

    npm install
    npm run dev -- --host 127.0.0.1 --port 4173 --strictPort

Open http://127.0.0.1:4173/.

## Build

    npm run build
    npm run test:sites

The build creates dist/client and the bundled hosting worker. Nothing has been published.

## Included
Responsive editorial homepage, local fonts, curated gallery with category filters, keyboard-accessible photo viewer, selected TV credits, biography, six playable reels, and enquiry draft download flow.

## Before publishing
- Supply the professional contact address and connect actual enquiry delivery.
- Confirm official status, photo usage rights and photographer/campaign credits.
- Review biography and selected credits.
- Six user-selected reels are included in public/reels, with original video quality, still previews and playback controls.

The current form clearly states that it has not sent anything. It downloads a local text draft and does not store or transmit visitors' details.

Photographs are in public/media. Source mapping is in media-provenance.json. UI code is in src/App.jsx; styling in src/styles.css. Review screenshots and comparison are in review/. Verification notes are in design-qa.md.

## Source structure
- `src/App.jsx`: page composition only.
- `src/components/`: Header, Hero, Gallery, PhotoViewer, Reels, ScreenCredits, About, Gulab, Enquiries, and Footer. Interactive state stays with the section that uses it.
- `src/data/`: photos, new photo entries, reels, and screen credits.
- `src/utils/media.js`: shared image URL helper.
- `src/main.jsx`: React entry point, fonts, and global stylesheet.

Gallery owns selection, filtering, and pagination and passes selection/navigation callbacks to PhotoViewer. Enquiries links directly to the artist’s Instagram.
