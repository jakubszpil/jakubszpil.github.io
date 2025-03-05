import { readdir, rename } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, URL } from "node:url";

const __dirname = join(dirname(fileURLToPath(new URL(import.meta.url))), "..");
const __clientDirname = join(__dirname, "dist/client/");

const files = await readdir(__clientDirname, { recursive: true });

for (const file of files) {
  if (file.includes("index.html") && file !== "index.html") {
    const path = join(__clientDirname, file);
    const targetPath = `${join(path, "..")}.html`;
    await rename(path, targetPath);
  }
}
