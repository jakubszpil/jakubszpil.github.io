export function injectScript(script: string) {
  return script
    .trim()
    .replace(/  +/g, "")
    .replace(/(\r\n|\n|\r)/gm, "")
    .replaceAll(" = ", "=")
    .replaceAll(" { ", "{")
    .replaceAll(" } ", "}")
    .replaceAll(" || ", "||")
    .replaceAll(" ? ", "?")
    .replaceAll(" : ", ":")
    .replaceAll(" === ", "===")
    .replaceAll(") ", ")")
    .replaceAll(" (", "(");
}
