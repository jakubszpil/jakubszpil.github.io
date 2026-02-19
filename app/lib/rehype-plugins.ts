import type { PluggableList } from "unified";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

function getAnchorContentBasedOnLevel(level: number): string {
  let content = "";
  for (let i = 0; i < level; i++) {
    content += ">";
  }
  return content;
}

export function getRehypePlugins(): PluggableList {
  return [
    rehypeRaw,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className:
            "mr-2 no-underline hover:underline focus-visible:underline select-none",
        },
        headingProperties: {
          className: "scroll-mt-20",
        },
        behavior: "prepend",
        content: (element: { tagName: string }) => {
          const tag = element.tagName;
          const level = parseInt(tag[tag.length - 1], 10);

          return [
            {
              type: "raw",
              value: getAnchorContentBasedOnLevel(level),
            },
          ];
        },
      },
    ],
    rehypeHighlight,
    rehypeStringify,
  ];
}
