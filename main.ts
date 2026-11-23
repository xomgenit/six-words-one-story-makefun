// Six words, one story — 39 chars, inside the 1-60 gate.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Grandma's recipe died with her. Almost.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, entry, "utf8");
