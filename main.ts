import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "She hands me her phone, unlocked.",
  "\u2018Your turn,\u2019 she says. \u2018Look.\u2019",
  "The screen glows open \u2014 her messages, her photographs,",
  "her whole life waiting on my thumb.",
  "I lock it. I hand it back.",
  "The screen goes dark in her hand, unopened.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
