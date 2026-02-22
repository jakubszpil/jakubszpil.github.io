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

function getAnchorContentBasedOnLevel(level: number): string {
  let content = "";
  for (let i = 0; i < level; i++) {
    content += ">";
  }
  return content;
}

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
            "mr-2 no-underline hover:underline focus-visible:underline select-none",
        },
        headingProperties: {
          className: "scroll-mt-19",
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
    rehypeTocPlugin,
    rehypeHighlight,
    rehypeStringify,
  ];
}
