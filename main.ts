/**
 * The Funniest Out-of-Office — make.fun entry.
 *
 * A program/v1 entry: deterministically writes one out-of-office
 * auto-reply (112 characters, under the 140 cap) to /output/entry.txt.
 * No network, no randomness, no model call — the same bytes every run.
 */
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: the auto-reply has been promoted twice and now outranks its
// own author. The machine that was supposed to cover for me has taken
// over — the twist is the promotion, delivered deadpan.
const REPLY =
  "Out until Monday. My inbox is with my auto-reply, which has been promoted twice and now technically outranks me.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
console.log(`Wrote ${REPLY.length}-character reply to ${outDir}/entry.txt`);
