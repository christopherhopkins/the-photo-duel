# The Photo Duel — Judge's Ballot

A single-page site for your couples photo challenge. Judges open one link, view all five rounds as anonymous **Photo A vs Photo B**, score each image 1–5 on the five marks, and the site tallies their verdict (round winners → frames → points → Best-in-Show tiebreak) and submits it to you. No PDFs, no separate forms.

## Files

```
index.html    the ballot (don't need to touch it)
config.js     the ONLY file you edit — photos, endpoint, email
photos/       you create this — 10 images, f1a.jpg … f5b.jpg
README.md     this file (doesn't need to be deployed, but harmless)
```

## 1 · Deploy to GitHub Pages (~3 min)

1. Create a new **public** repo (e.g. `photo-duel`). GitHub Pages on a free account requires the repo to be public — so anyone with the URL can see the photos. Nothing here should be sensitive, but worth knowing.
2. Add `index.html`, `config.js`, and a `photos/` folder with your images (web UI upload or `git push` — either works).
3. Repo **Settings → Pages → Source: Deploy from a branch → main / (root)**.
4. Your site goes live at `https://<username>.github.io/photo-duel/` within a minute or two. That's the link you text everyone.

## 2 · Add the photos

Export each submission as a JPEG around **2000px on the long edge** (~300–600 KB) so the page loads fast on phones. Name them by frame + slot:

| Frame | Photo A | Photo B |
|---|---|---|
| 1 · Underhill | `photos/f1a.jpg` | `photos/f1b.jpg` |
| 2 · Old Red Mill | `photos/f2a.jpg` | `photos/f2b.jpg` |
| 3 · Round Church | `photos/f3a.jpg` | `photos/f3b.jpg` |
| 4 · Niquette Bay | `photos/f4a.jpg` | `photos/f4b.jpg` |
| 5 · Causeway | `photos/f5a.jpg` | `photos/f5b.jpg` |

The site never shows names — judges only ever see "Photo A / Photo B." **Shuffle who is A and who is B between frames** so nobody can track a style across rounds, and record the assignments on the printed scorecard's Selects Key. (Filenames are visible in the public repo, so don't name files after yourselves.)

If a filename is wrong or missing, the site shows a "waiting on photos/…" placeholder instead of a broken image. Frame times/themes/prompts are all editable in `config.js` too.

## 3 · Collect the scores — pick one

**Option A — Web3Forms (recommended, ~2 min, no account):** go to web3forms.com, enter your email, and they send you an access key — the free tier is 250 submissions/month, and the key is designed to be safe to expose in client-side code. Paste it into `config.js`:

```js
web3formsKey: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
```

Each judge's verdict arrives as an email: champion, frames, points, Best in Show, per-round totals, per-mark detail, and any note — pre-tallied. Heads up: free-tier submissions are only retained on their side for 30 days, so your inbox is the system of record.

**Option B — Formspree (if you want a dashboard):** create a form at formspree.io and paste its ID into `formspreeId`. Free tier is 50 submissions/month, but you get a dashboard with all submissions in one table plus CSV export — nicer if you want to tally in a spreadsheet.

**Option C — nothing:** leave both blank and set `fallbackEmail` to your address. The "File Verdict" button then offers **Copy verdict** and **Email it** buttons, so judges can paste their pre-tallied scorecard into a text or email to you. This fallback also kicks in automatically if a submission fails for any reason, so no verdict is ever lost.

## How the site scores

- 5 marks × 1–5 per photo (Theme, Composition, Technical, Creativity, X-Factor), totals out of 25.
- Higher total takes the round; a tied round counts to neither.
- Most frames wins → tied frames falls to total points → still tied falls to the judge's Best in Show pick → otherwise the site asks them to pick one.
- Tap any photo for a full-screen viewer with an A/B flip (tap the image, or press A/B) — the fastest way to compare two takes on the same scene.
- Judges must complete all 50 marks and sign a name before filing; a checklist links straight to anything they missed.
- Ballots draft-save locally (survives an accidental refresh), and there's a "judge again on this device" reset for shared family iPads.

## Tallying across judges

Every submission arrives pre-tallied, so you just count: simplest is **one judge = one vote** for their champion, most votes wins the duel. If it's close, sum total points across all judges. The `detail` line in each submission has every individual mark if a recount is ever demanded.

## Before you send it out

Push everything, open the live URL on your phone, file one test verdict, and confirm it lands (then delete the test from your inbox/dashboard). After that, text the link.
