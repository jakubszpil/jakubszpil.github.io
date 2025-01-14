import { readdir, rename } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, URL } from "node:url";

const __dirname = dirname(fileURLToPath(new URL(import.meta.url)));
const __clientDirname = join(__dirname, "dist/client/");

const all = await readdir(__clientDirname, { recursive: true });

const files = all
  .filter((file) => file.includes("index.html") && file !== "index.html")
  .map((file) => join(__clientDirname, file));

for (const file of files) await rename(file, `${join(file, "..")}.html`);
