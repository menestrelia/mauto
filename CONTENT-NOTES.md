# M Auto Poltava — research and implementation
Checked 2026-10-24. Owner-private design proposal.
Official Instagram: https://www.instagram.com/m_avto_service/
Logo: unchanged current profile image, not a recreated logo.
Photos: local downloads of official reel covers published October 2026. Exact provenance in assets-sources.json. Low source resolution (portrait covers) limits large-screen sharpness. No stock imagery substituted.
Current profile lists ТО, diagnostics, suspension/engine repair and tyre service. No verified 2026 prices found; no numeric prices or old reviews included.
Addresses corroborated by https://mobicard.com.ua/card/mavto_pl . Hours differ among listings and were omitted.
Previously missed domains mavtoservice-p.com and mavtoservice-sh.com appear in business directories but returned unavailable responses. User informed.
Pauls Auto reference was not found in personal context or local files; this is an original design.
Form validates inputs and prepares SMS to the public service number. Does not store or automatically send personal data. Backend email/CRM not configured; no false success confirmation. Test used dummy data and did not send SMS.
QA: browser inspected desktop hero, local assets and successful form preparation; JavaScript syntax checked. Responsive layouts implemented, mobile device not separately emulated.

## Revision 2
Removed all arrow glyphs. Centered cinematic hero with edge masks, original photo edited using built-in ImageGen (hero-refined.png); original gallery retained. Prompt: remove social overlay; improve blur/compression; preserve gold Kia, lift, mechanic, workshop; extend landscape; dark photographic grading. This is an AI-enhanced interpretation, not an untouched documentary image.
Added loader, continuous background drift, pause control, reduced-motion support, reading progress, service accordions and gallery modal.
Review source: https://top20.ua/ru/pl/avto-moto/avtoservisi-sto/m-avto-sto.html . Виталий, 2026-01-09, 5/5. Only 2026 positive review with verified date found. Selected 16-word excerpt, with author/date/source visible. Did not substitute older testimonials or imply an aggregate rating.
Browser checked hero, review visibility and image modal. Mobile layout provided via CSS; not separately emulated.

## Revision 3
Removed the Instagram gallery, its captions and photo modal per user feedback. Replaced with four practical concern cards and restrained line icons. Cards select an existing service and prepare an editable message without overwriting user-written text. Updated navigation label. Browser verified tyre card sets Шиномонтаж and its matching prompt. Hero and review preserved.
