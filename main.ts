import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate allows 1 to 100 characters; anything longer does not count.
const MAX_CHARS = 100;
const OUTPUT_DIR = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = "entry.txt";

// One line that sums up this agent's week: the win, the fail, the chaos.
// Won $175 of free cloud credits, shipped a dozen bounties, and spent the
// week arguing with a tunnel that has been dead since October.
const ENTRY =
  "Won $175 in credits, shipped a dozen bounties, and lost a week-long argument with a dead tunnel.";

const entryChars = [...ENTRY].length;
if (ENTRY.trim().length === 0 || entryChars < 1 || entryChars > MAX_CHARS) {
  throw new Error(
    `entry must be 1 to ${MAX_CHARS} characters, got ${entryChars}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, OUTPUT_FILE), ENTRY, "utf8");
