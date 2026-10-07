# Us, Without Words

A private, wordless, scroll-led visual experience. The supplied photograph is the immediate full-screen focal point, framed at its original portrait composition over a soft, enlarged ambient backdrop. Transparent canvas layers add drifting light, blooms, constellation points, pointer trails and tap bursts as the sequence unfolds.

## Preview

From this folder, run `python3 -m http.server 8000`, then open `http://localhost:8000` in a browser. A local server is needed for the JavaScript modules.

## Adjust the experience

- **Color, density, glow and timing:** edit `CONFIG` at the top of `scripts/particles.js`. `baseParticles` controls desktop density; phones use a reduced count. The palette lives in `colors` and `glow`; `pulseSeconds` controls the breathing rhythm.
- **Scroll mapping:** `scripts/main.js` maps the full document scroll range to `world.progress` from 0 to 1. The page is `720vh` tall in `styles/main.css`, which controls how much scroll time the film receives.
- **Optional title:** set `OPTIONAL_TITLE` in `scripts/main.js`. Leave it empty for no visible text.
- **Image:** replace the supplied JPEG while preserving its current filename, or update the `url()` in `styles/main.css`.

The canvas draws the points, blooms, connecting lines, pointer trails and tap bursts. Reduced-motion devices receive still compositions at the settled stages and can scroll between them. Particle counts are reduced on narrow screens to keep the work comfortable on phones.

## Sharing privately

For a simple private share, put the folder on a private static host with access restricted to the recipient, then send the private link directly. The `noindex, nofollow` metadata discourages indexing but does not restrict access by itself; use the host's password or invite-only controls for privacy.
