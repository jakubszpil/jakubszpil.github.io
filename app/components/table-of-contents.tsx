import { Transition } from "@headlessui/react";
import {
  useCallback,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";
import { createPath, useLocation } from "react-router";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  TableOfContentsItem,
  TableOfContentsLink,
  TableOfContentsList,
} from "./ui/toc";
import { ScrollArea } from "./ui/scroll-area";
import { IconChevronRight } from "./ui/icons";
import { useHydrated } from "~/hooks/use-hydrated";
import { TOP_ELEMENT_ID } from "~/lib/config";

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

  const handleClose = useCallback(
    (heading: Heading, event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const element = document.getElementById(heading.slug);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setShow(false);
      }
    },
    [],
  );

  return (
    <div className="sticky top-[calc(var(--spacing)*14.25-1px)] z-10">
      <Card className="p-0 shadow-none rounded-none">
        <div className="container py-2 px-3 flex justify-between items-center">
          <Button
            onClick={() => setShow((prev) => !prev)}
            size="sm"
            variant="link"
            className="cursor-pointer select-none"
          >
            <IconChevronRight /> Spis treści
          </Button>

          {hydrated && (
            <Transition show={show}>
              <Card className="absolute container top-11/12 w-full left-0 right-0 bg-card border py-2 h-max max-h-96 duration-75 transition-all data-closed:opacity-0 data-closed:invisible data-enter:translate-y-0 data-enter:data-closed:translate-y-24">
                <TableOfContentsContent ref={ref} onClick={handleClose} />
              </Card>
            </Transition>
          )}

          {additionalActions && (
            <div className="flex items-center gap-1">{additionalActions}</div>
          )}
        </div>
      </Card>
    </div>
  );
}

export function TableOfContentsContent({
  ref,
  onClick,
}: {
  ref: RefObject<HTMLElement | null>;
  onClick: (heading: Heading, event: MouseEvent<HTMLAnchorElement>) => void;
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
            onClick={(event) => onClick(heading, event)}
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
