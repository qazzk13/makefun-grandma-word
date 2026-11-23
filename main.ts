import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "ChattyGPT" — grandma has heard of ChatGPT, but in her texts it is
// always "ChattyGPT": the chatty robot she talks to. It is her confident
// misnaming of ChatGPT, exactly the kind of thing she would text about AI.
const WORD = "ChattyGPT";

// Gate: entry.txt must be 1 to 30 characters and a single word (no spaces).
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`word must be 1-30 characters, got ${WORD.length}`);
}
if (!/^\S+$/.test(WORD)) {
  throw new Error(`word must be a single word with no spaces: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n");
