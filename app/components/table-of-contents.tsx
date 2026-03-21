import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { createPath, useLocation } from "react-router";

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

export function TableOfContents({
  ref,
  additionalActions,
}: TableOfContentsProps) {
  const [show, setShow] = useState(false);
  const tocRef = useRef<HTMLDivElement>(null);

  const { pathname } = useLocation();

  const pathnameWithoutTrailingSlash = useMemo(
    () => (pathname.endsWith("/") ? pathname.slice(0, -1) : pathname),
    [pathname],
  );

  useEffect(() => {
    if (!show) return;

    const controller = new AbortController();

    const handleSameElementTargetAction = (event: Event) => {
      const target = event.target as HTMLElement;

      const sameElementTarget =
        tocRef.current?.contains(target) || tocRef.current?.isSameNode(target);

      if (!sameElementTarget) setShow(false);
    };

    const addListener = <K extends keyof DocumentEventMap>(event: K) =>
      document.addEventListener(event, handleSameElementTargetAction, {
        signal: controller.signal,
      });

    addListener("click");
    addListener("focusin");

    return () => {
      controller.abort();
    };
  }, [show]);

  const headings: Heading[] = useMemo(() => {
    if (!ref.current) return [];

    const elements =
      ref.current.querySelectorAll<HTMLHeadingElement>("[data-heading]");

    const stack: Heading[] = [];
    const headings: Heading[] = [];

    for (const element of elements) {
      const level = parseInt(element.tagName[1]);

      const heading: Heading = {
        slug: element.id,
        text: element.textContent,
        headings: [],
        level,
      };

      while (stack.length > 0 && stack[stack.length - 1].level! >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        headings.push(heading);
      } else {
        const parent = stack[stack.length - 1];
        if (parent) parent.headings.push(heading);
      }

      stack.push({ ...heading, level });
    }

    return headings;
  }, [ref.current]);

  const renderHeading = useCallback(
    (heading: Heading) => {
      return (
        <TableOfContentsItem key={heading.slug}>
          <TableOfContentsLink
            onClick={() => setShow(false)}
            href={createPath({
              pathname: pathnameWithoutTrailingSlash,
              hash: heading.slug,
            })}
          >
            {heading.text}
          </TableOfContentsLink>
          <TableOfContentsList indent>
            {heading.headings.map(renderHeading)}
          </TableOfContentsList>
        </TableOfContentsItem>
      );
    },
    [pathnameWithoutTrailingSlash],
  );

  const renderHeadings = useCallback(() => {
    return (
      <ScrollArea className="h-max max-h-90">
        <TableOfContentsList className="relative h-full max-h-90">
          {renderHeading({
            slug: TOP_ELEMENT_ID,
            level: 2,
            text: "Przegląd",
            headings: [],
          })}
          {headings.map(renderHeading)}
        </TableOfContentsList>
      </ScrollArea>
    );
  }, [headings, renderHeading]);

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
              className={cn(
                "transition-transform duration-100",
                show && "rotate-90",
              )}
            />
            Spis treści
          </Button>

          {show && (
            <Card
              ref={tocRef}
              className="absolute container top-11/12 w-auto inset-x-5 bg-card border py-2 h-max max-h-96"
            >
              {renderHeadings()}
            </Card>
          )}

          {additionalActions && (
            <div className="flex items-center sm:gap-1">
              {additionalActions}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
