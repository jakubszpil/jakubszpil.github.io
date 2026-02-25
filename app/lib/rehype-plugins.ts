import { visit } from "unist-util-visit";
import type { Element, Nodes } from "hast";
import type { PluggableList, Plugin } from "unified";
import { headingRank } from "hast-util-heading-rank";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import type { Heading } from "./headings";

const rehypeTocPlugin: Plugin = () => {
  const getHeadingElement = (node: Nodes): Element | null => {
    if (node.type === "element") {
      if (headingRank(node) !== undefined) return node;
    }
    return null;
  };

  const processLabel = (element: Element, divider = ""): string => {
    const parts: string[] = [];

    const children = element.children;

    for (const child of children) {
      if (child.type === "element") {
        if (child.tagName === "a") continue;

        if (child.tagName === "code") {
          parts.push(processLabel(child, " "));
          continue;
        }
      }

      if (child.type === "text") {
        parts.push(child.value);
      }
    }

    return parts.join(divider);
  };

  const processHeadings = (elements: Element[]): Heading[] => {
    const stack: Heading[] = [];
    const result: Heading[] = [];

    for (const element of elements) {
      const level = parseInt(element.tagName[1]);

      const item: Heading = {
        id: String(element.properties.id),
        label: processLabel(element),
        headings: [],
        level,
      };

      while (stack.length > 0 && stack[stack.length - 1].level! >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        result.push(item);
      } else {
        const parent = stack[stack.length - 1];
        if (parent) parent.headings.push(item);
      }

      stack.push({ ...item, level });
    }

    return result;
  };

  return function (tree, file) {
    const headingElements: Element[] = [];

    visit(tree, "element", (element) => {
      const heading = getHeadingElement(element);

      if (heading) {
        headingElements.push(heading);
      }
    });

    const headings = processHeadings(headingElements);

    file.data["headings"] = headings;
  };
};

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
            "scroll-mt-19 text-(--tw-prose-links) dark:text-(--tw-prose-invert-links) relative group ",
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
    rehypeTocPlugin,
    rehypeHighlight,
    rehypeStringify,
  ];
}
