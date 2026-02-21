import { useMemo } from "react";
import { useReactiveRef } from "./use-reactive-ref";

export type TableOfContentsHeading = {
  id: string;
  label: string;
  level: number;
  headings: TableOfContentsHeading[];
};

const isCharacterData = (node: ChildNode): node is CharacterData =>
  "data" in node;

const isElement = (node: ChildNode): node is HTMLElement => "tagName" in node;

const processLabel = (element: HTMLElement): string => {
  const parts: string[] = [];

  const nodes = [...element.childNodes];

  for (const node of nodes) {
    if (isCharacterData(node)) {
      parts.push(node.data);
      continue;
    }

    if (isElement(node)) {
      if (node.tagName === "A") continue;
    }

    const codeNode = node.childNodes[0];

    if (isCharacterData(codeNode)) {
      parts.push(codeNode.data);
    }
  }

  return parts.join(" ");
};

const processHeadings = (
  elements: NodeListOf<HTMLHeadingElement>,
): TableOfContentsHeading[] => {
  const stack: TableOfContentsHeading[] = [];
  const result: TableOfContentsHeading[] = [];

  for (const element of elements) {
    const level = parseInt(element.tagName[1]);

    const item: TableOfContentsHeading = {
      id: element.id,
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

export function useTableOfContents() {
  const { ref, element } = useReactiveRef<HTMLElement>();

  const headingElements = useMemo(
    () => element?.querySelectorAll<HTMLHeadingElement>("[data-heading]"),
    [element],
  );

  const headings = useMemo(() => {
    if (!headingElements) return [];

    return processHeadings(headingElements);
  }, [headingElements]);

  return { ref, headings };
}
