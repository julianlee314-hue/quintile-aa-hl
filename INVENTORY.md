# Quintile inventory

**Live URL (authoritative content source):** https://king-wind-charm-lilac.grok.me/

**Grok project id:** `01a0d1d8-9526-7a30-b928-0815fdfaeca5`

**Branding:** Quintile — AA HL drill room

## Routes

| Route | Description |
|-------|-------------|
| `/` | Papers home |
| `/foundations` | Skills builder |
| `/progress` | On-device progress |
| `/drill?skill=<id>` | Skills drill (e.g. `indices`) |
| `/drill?strand=<id>` | Strand drill |
| `/drill?mode=today` | Today’s five |
| `/drill?mode=mixed` | Mixed set of six |
| `/strand/<id>` | Strand overview |

Nav: Papers (`/`), Skills (`/foundations`), Progress (`/progress`).

## Skills builder (8 × 5 = 40)

| # | id | title | items |
|---|----|-------|-------|
| 1 | `indices` | Indices & surds | 5 |
| 2 | `manipulation` | Expand, factor, rearrange | 5 |
| 3 | `linear` | Lines & equations | 5 |
| 4 | `quadratics` | Quadratics | 5 |
| 5 | `logs` | Exponents & logs | 5 |
| 6 | `functions` | Function notation | 5 |
| 7 | `trig` | Right-triangle trig | 5 |
| 8 | `chance` | Data & chance | 5 |

**Total skill items:** 40

## Paper strands (49 questions)

| # | id | name | questions |
|---|----|------|-----------|
| 01 | `algebra` | Number & algebra | 11 |
| 02 | `functions` | Functions | 10 |
| 03 | `trigonometry` | Trigonometry | 9 |
| 04 | `calculus` | Calculus | 10 |
| 05 | `statistics` | Statistics & probability | 9 |

**Total paper questions:** 49

### Per-strand question ids

- **Number & algebra** (`algebra`): `al-01`, `al-02`, `al-03`, `al-04`, `al-05`, `al-06`, `al-07`, `al-08`, `al-09`, `al-10`, `al-11`
- **Functions** (`functions`): `fn-01`, `fn-02`, `fn-03`, `fn-04`, `fn-05`, `fn-06`, `fn-07`, `fn-08`, `fn-09`, `fn-10`
- **Trigonometry** (`trigonometry`): `tr-01`, `tr-02`, `tr-03`, `tr-04`, `tr-05`, `tr-06`, `tr-07`, `tr-08`, `tr-09`
- **Calculus** (`calculus`): `ca-01`, `ca-02`, `ca-03`, `ca-04`, `ca-05`, `ca-06`, `ca-07`, `ca-08`, `ca-09`, `ca-10`
- **Statistics & probability** (`statistics`): `st-01`, `st-02`, `st-03`, `st-04`, `st-05`, `st-06`, `st-07`, `st-08`, `st-09`

## Features

- Clack desk calculator
- Detailed solutions (Enter reveals lines)
- Progress stored on device
- 16:9 question frame

## Local paths

| What | Path |
|------|------|
| Download / working tree | `/workspace/quintile/` |
| Runnable site | `/workspace/quintile/site/` |
| Editable skills JSON | `/workspace/quintile/data/skills.json` (also `site/data/`) |
| Editable papers JSON | `/workspace/quintile/data/papers.json` |
| Mac Desktop copy | `/Users/julianlee/Desktop/Math Resources/Quintile/` |

## How to open locally

```bash
cd /workspace/quintile/site   # or the Desktop copy
python3 serve.py
# → http://127.0.0.1:8000/
```

