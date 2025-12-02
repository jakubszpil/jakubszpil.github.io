export function injectScript(script: string) {
  return script
    .trim()
    .replace(/\s{2,}/g, " ")
    .replace(/(\r\n|\n|\r)/g, "")
    .replace(/\s*=\s*/g, "=")
    .replace(/\s*\{\s*/g, "{")
    .replace(/\s*\}\s*/g, "}")
    .replace(/\s*\|\|\s*/g, "||")
    .replace(/\s*\?\s*/g, "?")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*===\s*/g, "===")
    .replace(/\)\s*/g, ")")
    .replace(/\s*\(/g, "(");
}
