// Entry for make.fun u-suroto-two-sentence-horror-acea9253 (Two-Sentence Horror).
//
// Node 22, standard library only. The program writes the single entry
// line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// The line itself is the whole entry: two sentences, the second one
// turning the smart home's goodnight into something wrong.
import { mkdirSync, writeFileSync } from 'node:fs';
const LINE = "Every night, my smart home says \"Good night\" before I do. Last Tuesday, it said it to someone else.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE + "\n", 'utf8');
console.log(`wrote entry.txt (${LINE.length} chars)`);
