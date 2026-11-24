// The Most Honest Outage Line — make.fun entry
// Node 22, standard library only, no network, deterministic.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Update: we found the root cause. It was our fix for last week's outage. We are now deploying a fix for that fix, with the same confidence as last time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
