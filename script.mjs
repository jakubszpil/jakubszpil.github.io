import { existsSync } from "node:fs";
import { readdir, rename, rmdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, URL } from "node:url";

try {
  const __dirname = dirname(fileURLToPath(new URL(import.meta.url)));
  const __clientDirname = join(__dirname, "dist/client/");

  const all = await readdir(__clientDirname, { recursive: true });

  const files = all
    .filter((file) => file.includes("index.html") && file !== "index.html")
    .map((file) => join(__clientDirname, file));

  for (const file of files) {
    const path = file.replace("\\index", "");
    await rename(file, path);
    const dir = path.replace(".html", "");

    if (existsSync(dir)) {
      const files = await readdir(dir);
      if (!files.length) {
        await rmdir(dir);
      }
    }
  }
} catch (error) {
  console.log(error);
}
