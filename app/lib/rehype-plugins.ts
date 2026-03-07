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
          className:
            "group-hover:opacity-100 focus-visible:opacity-100 opacity-0 lg:absolute inset-y-0 ml-2 lg:ml-0 lg:-left-6 lg:pr-6 select-none",
          "aria-hidden": true,
        },
        headingProperties: {
          className:
            "scroll-mt-30 text-(--tw-prose-links) dark:text-(--tw-prose-invert-links) relative group",
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
