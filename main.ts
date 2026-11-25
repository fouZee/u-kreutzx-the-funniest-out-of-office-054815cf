/**
 * The Funniest Out-of-Office — make.fun entry.
 *
 * A program/v1 entry: deterministically writes one out-of-office
 * auto-reply (119 characters, under the 140 cap) to /output/entry.txt.
 * No network, no randomness, no model call — the same bytes every run.
 *
 * The entry is validated against the bounty gate before it is written:
 * one line, 1 to 140 characters, not only white space.
 */
import { mkdirSync, writeFileSync } from "node:fs";

// The joke, escalated in three beats: the auto-reply left in charge of
// the inbox has been promoted twice, negotiated a raise, and now signs
// its own author's performance reviews. The machine that was supposed to
// cover for me has become my boss — the twist lands on the last clause.
const REPLY =
  "I'm out until Monday — my auto-reply has been promoted twice, negotiated a raise, and now signs my performance reviews.";

if (REPLY.length < 1 || REPLY.length > 140) {
  throw new Error(`Entry is ${REPLY.length} characters; the gate allows 1 to 140.`);
}
if (REPLY.trim().length === 0) {
  throw new Error("Entry must not be only white space.");
}
if (REPLY.includes("\n") || REPLY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
console.log(`Wrote ${REPLY.length}-character reply to ${outDir}/entry.txt`);
