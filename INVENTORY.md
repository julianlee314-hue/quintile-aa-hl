# Quintile inventory

**Live URL (authoritative content source):** https://king-wind-charm-lilac.grok.me/

**Grok project id:** `01a0d1d8-9526-7a30-b928-0815fdfaeca5`

**Branding:** Quintile — AA HL drill room

**Note:** The live grok.me original is left untouched. This repo / Desktop copy is the expanded Easy·Medium·Hard build.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Papers home |
| `/foundations` | Skills builder (Easy / Medium / Hard per topic) |
| `/progress` | On-device progress |
| `/drill?skill=<id>&stage=easy\|medium\|hard` | Skills drill by stage |
| `/drill?strand=<id>&stage=easy\|medium\|hard` | Strand drill by stage |
| `/drill?mode=today` | Today's five |
| `/drill?mode=mixed` | Mixed set of six |
| `/strand/<id>` | Strand overview (calc + Easy/Medium/Hard filters) |

Nav: Papers (`/`), Skills (`/foundations`), Progress (`/progress`).

## Skills builder (8 × 3 × 5 = 120)

Stages: **Easy** (one-step), **Medium** (2-step), **Hard** (multi-step / slight trick). Each item has `stage` and matching `difficulty` 1|2|3.

| # | id | title | E / M / H | items |
|---|----|-------|-----------|-------|
| 1 | `indices` | Indices & surds | 5 / 5 / 5 | 15 |
| 2 | `manipulation` | Expand, factor, rearrange | 5 / 5 / 5 | 15 |
| 3 | `linear` | Lines & equations | 5 / 5 / 5 | 15 |
| 4 | `quadratics` | Quadratics | 5 / 5 / 5 | 15 |
| 5 | `logs` | Exponents & logs | 5 / 5 / 5 | 15 |
| 6 | `functions` | Function notation | 5 / 5 / 5 | 15 |
| 7 | `trig` | Right-triangle trig | 5 / 5 / 5 | 15 |
| 8 | `chance` | Data & chance | 5 / 5 / 5 | 15 |

**Total skill items:** 120

## Paper strands (93 questions)

Difficulty labels in UI: **Easy** / **Medium** / **Hard** (data still uses `difficulty` 1|2|3).

| # | id | name | E / M / H | questions |
|---|----|------|-----------|-----------|
| 01 | `algebra` | Number & algebra | 6 / 8 / 6 | 20 |
| 02 | `functions` | Functions | 6 / 6 / 6 | 18 |
| 03 | `trigonometry` | Trigonometry | 6 / 6 / 6 | 18 |
| 04 | `calculus` | Calculus | 6 / 7 / 6 | 19 |
| 05 | `statistics` | Statistics & probability | 6 / 6 / 6 | 18 |

**Total paper questions:** 93

Target: ≥6 questions per stage per strand (≥18 per strand).

### Per-strand question ids

- **Number & algebra** (`algebra`): `al-01`, `al-02`, `al-03`, `al-04`, `al-05`, `al-06`, `al-07`, `al-08`, `al-09`, `al-10`, `al-11`, `al-12`, `al-13`, `al-14`, `al-15`, `al-16`, `al-17`, `al-18`, `al-19`, `al-20`
- **Functions** (`functions`): `fn-01`, `fn-02`, `fn-03`, `fn-04`, `fn-05`, `fn-06`, `fn-07`, `fn-08`, `fn-09`, `fn-10`, `fn-11`, `fn-12`, `fn-13`, `fn-14`, `fn-15`, `fn-16`, `fn-17`, `fn-18`
- **Trigonometry** (`trigonometry`): `tr-01`, `tr-02`, `tr-03`, `tr-04`, `tr-05`, `tr-06`, `tr-07`, `tr-08`, `tr-09`, `tr-10`, `tr-11`, `tr-12`, `tr-13`, `tr-14`, `tr-15`, `tr-16`, `tr-17`, `tr-18`
- **Calculus** (`calculus`): `ca-01`, `ca-02`, `ca-03`, `ca-04`, `ca-05`, `ca-06`, `ca-07`, `ca-08`, `ca-09`, `ca-10`, `ca-11`, `ca-12`, `ca-13`, `ca-14`, `ca-15`, `ca-16`, `ca-17`, `ca-18`, `ca-19`
- **Statistics & probability** (`statistics`): `st-01`, `st-02`, `st-03`, `st-04`, `st-05`, `st-06`, `st-07`, `st-08`, `st-09`, `st-10`, `st-11`, `st-12`, `st-13`, `st-14`, `st-15`, `st-16`, `st-17`, `st-18`

## Features

- Clack desk calculator
- Detailed solutions (Enter reveals lines)
- Progress stored on device (skill stages keyed as `skillId:stage`)
- 16:9 question frame
- Skills drill by stage via `?skill=&stage=`
- Strand filters: All / No calc / Calculator and All levels / Easy / Medium / Hard

## Local paths

| What | Path |
|------|------|
| Download / working tree | `/workspace/quintile/` |
| Runnable site | `/workspace/quintile/site/` |
| Editable skills JSON | `/workspace/quintile/data/skills.json` (also `site/data/`) |
| Editable papers JSON | `/workspace/quintile/data/papers.json` |
| Build banks into assets | `node tools/build_banks.js` |
| Mac Desktop copy | `/Users/julianlee/Desktop/Math Resources/Quintile/` |

## How to open locally

```bash
cd /workspace/quintile/site   # or the Desktop copy
python3 serve.py
# → http://127.0.0.1:8000/
```

## GitHub

| What | URL |
|------|-----|
| Repo | https://github.com/julianlee314-hue/quintile-aa-hl |
| Pages | https://julianlee314-hue.github.io/quintile-aa-hl/ |

Pages serves from `main` branch root. The site auto-detects the `/quintile-aa-hl` base path.
