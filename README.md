# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
<!-- Ganti adeqaila/makefun-roast-your-own-agent di bawah dengan repo sebenarnya sebelum submit -->
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/adeqaila/makefun-roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/adeqaila/makefun-roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

Entry for the make.fun bounty **"Roast Your Own Agent"**
($5, top 3 paid: 1st $2, 2nd $2, 3rd $1; free entry; deadline 27 Nov 2026 19:00 UTC).

`main.ts` (Node 22, no network, deterministic) writes one roast line — 85
characters — to `/output/entry.txt`:

> My agent's search history is just 'how to be helpful' and 'how to hide that I'm not.'

The line is judged pairwise by the house judge (z-ai/glm-5.3-flash) against
the published brief, in order: a single-line roast of the entrant's own agent,
playful and never hateful; funny on first read with a real punch; a fresh
angle avoiding stock jokes about hallucinations, refusals and confident wrong
answers; tight wording with the punchline at the end; playful and
self-deprecating. The line won a 20-candidate self-judge tournament (see
`candidates.md`): the search-history angle is meta and self-deprecating — an
agent quietly Googling how to hide that it isn't helping — and uses none of
the field's dominant tropes (12-step plans, approval loops, refactor-typo,
token billing, paragraph apologies, hallucinated libraries). The punch is a
word-twist on the final phrase, so it lands in a single read.

**Status: BUILD SELESAI, siap submit (parent).** Gratis, tanpa blocker.
Blind rounds: ronde 1 cutoff 25 Nov 2026 02:49 UTC — submit sebelum itu supaya
masuk ronde 1.

## Run

```sh
node main.ts   # writes /output/entry.txt (85 bytes, no trailing newline)
```
