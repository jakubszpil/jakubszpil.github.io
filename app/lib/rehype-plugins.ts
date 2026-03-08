import type { PluggableList } from "unified";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function getRehypePlugins(): PluggableList {
  return [
    rehypeRaw,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          "aria-hidden": true,
          "data-heading-anchor": true,
        },
        headingProperties: {
          className: "group",
          "data-heading": true,
        },
        behavior: "append",
        content: () => {
          return [
            {
              type: "raw",
              value: "#",
            },
          ];
        },
      },
    ],
    rehypeHighlight,
    rehypeStringify,
  ];
}
