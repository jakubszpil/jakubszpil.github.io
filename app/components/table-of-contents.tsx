import { useCallback, type ReactNode } from "react";
import { useLocation, createPath } from "react-router";

import {
  TableOfContentsItem,
  TableOfContentsLink,
  TableOfContentsList,
  TableOfContentsTitle,
} from "./ui/toc";
import { ScrollArea } from "./ui/scroll-area";
import type { Heading } from "~/lib/headings";

export function TableOfContents({
  children,
  withQuizLink,
  headings,
}: {
  children: ReactNode;
  withQuizLink?: boolean;
  headings: Heading[];
}) {
  const { pathname, hash } = useLocation();

  const pathnameWithoutTrailingSlash = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  const currentId = decodeURIComponent(hash.replace("#", ""));

  const renderTocHeading = useCallback(
    (heading: Heading) => {
      return (
        <TableOfContentsItem key={heading.id}>
          <TableOfContentsLink
            isActive={
              heading.id === "_top"
                ? !currentId || currentId === heading.id
                : currentId === heading.id
            }
            href={createPath({
              pathname: pathnameWithoutTrailingSlash,
              hash: heading.id,
            })}
          >
            {heading.label}
          </TableOfContentsLink>
          <TableOfContentsList indent>
            {heading.headings.map(renderTocHeading)}
          </TableOfContentsList>
        </TableOfContentsItem>
      );
    },
    [currentId, pathnameWithoutTrailingSlash],
  );

  return (
    <>
      <div className="container py-0 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
        <div className="container hidden lg:block px-0 text-sm! lg:order-2 lg:pt-0 sticky! max-h-[calc(100dvh-(var(--spacing))*37)] h-full top-19 bg-background z-40 rounded-tr-lg">
          <ScrollArea className="h-full relative">
            <TableOfContentsList className="relative h-max">
              <TableOfContentsTitle className="bg-background sticky top-0 text-base text-emerald-600 dark:text-emerald-500 font-semibold left-0 pb-3 mb-0">
                Spis treści
              </TableOfContentsTitle>
              {renderTocHeading({
                id: "_top",
                level: 2,
                label: "Przegląd",
                headings: [],
              })}
              {headings.map(renderTocHeading)}
              {withQuizLink &&
                renderTocHeading({
                  id: "quiz",
                  level: 2,
                  label: "Quiz",
                  headings: [],
                })}
            </TableOfContentsList>
          </ScrollArea>
        </div>

        <div className="container px-0 lg:col-span-2 lg:pt-0">{children}</div>
      </div>
    </>
  );
}
