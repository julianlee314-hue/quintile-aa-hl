# Quintile — AA HL drill room

Local fork of the IB Mathematics Analysis & Approaches HL drill site.

## Open locally

```bash
cd site
python3 serve.py
# open http://127.0.0.1:8000/
```

Or plain static (deep links under `/drill`, `/strand/...` need `serve.py` or use the folder `index.html` copies):

```bash
python3 -m http.server 8000
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Papers home (5 strands) |
| `/foundations` | Skills builder (8 sets × 5) |
| `/progress` | On-device progress |
| `/drill?...` | Drill room (skill / strand / today / mixed) |
| `/strand/:id` | Strand overview |

## Content sources (editable JSON)

- `data/skills.json` — 8 Skills builder sets
- `data/papers.json` — 49 paper questions across 5 strands
- `data/catalog.json` — strand metadata

The live UI still loads the bundled JS (`assets/skills-*.js`, `assets/types-*.js`). Edit JSON for maintainability; re-bundle or swap modules in a later pass to wire JSON into the UI.

## Live reference

https://king-wind-charm-lilac.grok.me/

## GitHub Pages

Published at: https://julianlee314-hue.github.io/quintile-aa-hl/

The site auto-detects the `/quintile-aa-hl` prefix when hosted on GitHub Pages.
Local `python3 serve.py` continues to use `/`.
