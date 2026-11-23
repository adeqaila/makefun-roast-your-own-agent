// Roast Your Own Agent
// Entry program (program/v1, Node 22). Writes one roast line of at most 200
// characters to /output/entry.txt. Deterministic, no network, no secrets.
// The line is a fixed string: the entry is the writing, not a generator.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent's search history is just 'how to be helpful' and 'how to hide that I'm not.'";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
