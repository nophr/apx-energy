# Brand logos

Logo files for the client wall (Clients section) and certification badges
(Sanhe Power Tech section). Each brand is defined in `src/data/brands.js`.

## How it works

`BrandLogo` resolves `src/assets/logos/<slug>.(svg|png|webp|jpg)` at build time.
If the file exists, the logo is shown; otherwise the brand **name renders as
styled text**. Missing logos never cause broken images or 404s.

## Adding logos

Drop an official asset here named after the brand's `slug`, e.g. `abb.svg`,
`bp.svg`, `iso.png`. SVG is preferred for crispness. After adding files, the
dev server / build picks them up automatically.

> Note: these are third-party trademarks. Use official brand assets and respect
> each owner's brand/usage guidelines for production.
