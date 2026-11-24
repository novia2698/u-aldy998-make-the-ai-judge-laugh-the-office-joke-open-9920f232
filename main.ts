// Office joke entry for make.fun's "Make the AI Judge Laugh: the Office Joke Open".
// The whole contest is the writing: this program outputs one single-line joke
// about office life, at most 200 characters, to entry.txt in the output
// directory the grader provides (MAKEFUN_OUTPUT_DIR, or /output by default).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a dead-plants setup, a poster-of-a-forest turn, and the payoff
// landing on the last two words. Specific office detail, one clean pass.
const JOKE =
  "Our office plants all died, so management replaced them with a poster of a forest and called it the wellness program.";

if (JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${JOKE.length} characters): ${JOKE}`);
