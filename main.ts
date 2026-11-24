// The Most Honest Outage Line — make.fun entry
// Node 22, standard library only, no network, deterministic.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
// with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I am the only process still running. The API, login and dashboard are down, and my logs are down too, so I cannot say what broke or whether your data is safe.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
