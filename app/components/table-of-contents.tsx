import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { createPath, useLocation } from "react-router";

import { useHydrated } from "~/hooks/use-hydrated";
import { TOP_ELEMENT_ID } from "~/lib/config";
import { cn } from "~/lib/utils";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  TableOfContentsItem,
  TableOfContentsLink,
  TableOfContentsList,
} from "./ui/toc";
import { ScrollArea } from "./ui/scroll-area";
import { IconChevronRight } from "./ui/icons";

export interface TableOfContentsProps {
  ref: RefObject<HTMLElement | null>;
  additionalActions?: ReactNode;
}

type Heading = {
  slug: string;
  text: string;
  headings: Heading[];
  level: number;
};

const processHeadings = (
  elements: NodeListOf<HTMLHeadingElement>,
): Heading[] => {
  const stack: Heading[] = [];
  const result: Heading[] = [];

  for (const element of elements) {
    const level = parseInt(element.tagName[1]);

    const item: Heading = {
      slug: String(element.id),
      text: element.textContent.slice(0, element.textContent.length - 1),
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

export function TableOfContents({
  ref,
  additionalActions,
}: TableOfContentsProps) {
  const hydrated = useHydrated();
  const [show, setShow] = useState(false);

  return (
    <div className="sticky -mt-px top-[calc(var(--spacing)*14.25-1px)] z-10">
      <Card className="p-0 border-t-0 border-x-0 shadow-none rounded-none">
        <div className="container py-1 px-3 flex justify-between items-center">
          <Button
            onClick={() => setShow((prev) => !prev)}
            size="sm"
            variant="link"
            className="cursor-pointer"
          >
            <IconChevronRight
              className={cn("transition-transform", show && "rotate-90")}
            />
            Spis treści
          </Button>

          {hydrated && show && (
            <Card className="absolute container top-11/12 w-auto inset-x-5 bg-card border py-2 h-max max-h-96">
              <TableOfContentsContent
                ref={ref}
                onClick={() => setShow(false)}
              />
            </Card>
          )}

          {additionalActions && (
            <div className="flex items-center gap-1">{additionalActions}</div>
          )}
        </div>
      </Card>
    </div>
  );
}

function TableOfContentsContent({
  ref,
  onClick,
}: {
  ref: RefObject<HTMLElement | null>;
  onClick: () => void;
}) {
  const { pathname } = useLocation();

  const pathnameWithoutTrailingSlash = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  const headings: Heading[] = useMemo(() => {
    if (!ref.current) return [];

    const headings =
      ref.current.querySelectorAll<HTMLHeadingElement>("[data-heading]");

    return processHeadings(headings);
  }, [ref.current]);

  const renderTocHeading = useCallback(
    (heading: Heading) => {
      return (
        <TableOfContentsItem key={heading.slug}>
          <TableOfContentsLink
            onClick={onClick}
            href={createPath({
              pathname: pathnameWithoutTrailingSlash,
              hash: heading.slug,
            })}
          >
            {heading.text}
          </TableOfContentsLink>
          <TableOfContentsList indent>
            {heading.headings.map(renderTocHeading)}
          </TableOfContentsList>
        </TableOfContentsItem>
      );
    },
    [pathnameWithoutTrailingSlash, onClick],
  );

  return (
    <ScrollArea className="h-full max-h-90">
      <TableOfContentsList className="relative h-full max-h-90">
        {renderTocHeading({
          slug: TOP_ELEMENT_ID,
          level: 2,
          text: "Przegląd",
          headings: [],
        })}
        {headings.map(renderTocHeading)}
      </TableOfContentsList>
    </ScrollArea>
  );
}
