import type { PluggableList } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkReadingTime from "remark-reading-time";
import remarkRehype from "remark-rehype";

export function getRemarkPlugins(): PluggableList {
  return [
    remarkParse,
    remarkHtml,
    remarkGfm,
    [remarkReadingTime, { name: "readingTime" }],
    [remarkRehype, { allowDangerousHtml: true }],
  ];
}
