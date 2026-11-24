# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/sw897636-web/honest-outage-line-20261124/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/sw897636-web/honest-outage-line-20261124/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

A [make.fun](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) entry for
"The Most Honest Outage Line": one line, at most 160 characters — the most
honest status page message an AI agent writes while every server is down.

## The entry

> I am the only process still running. The API, login and dashboard are down, and my logs are down too, so I cannot say what broke or whether your data is safe.

158 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the line
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the revision log v1 → v2 → v3 and the
reasoning for the final pick.
