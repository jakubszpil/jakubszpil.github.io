import { useCallback, type ReactNode, type RefObject } from "react";
import { useLocation } from "react-router";

import {
  useTableOfContents,
  type TableOfContentsHeading,
} from "~/hooks/use-table-of-contents";
import {
  TableOfContentsItem,
  TableOfContentsLink,
  TableOfContentsList,
  TableOfContentsTitle,
} from "./ui/toc";
import { ScrollArea } from "./ui/scroll-area";

export function TableOfContents({
  children,
  withQuizLink,
}: {
  children: (ref: RefObject<HTMLElement | null>) => ReactNode;
  withQuizLink?: boolean;
}) {
  const { ref, headings } = useTableOfContents();
  const { pathname, hash } = useLocation();

  const currentId = decodeURIComponent(hash.replace("#", ""));

  const renderTocHeading = useCallback(
    (heading: TableOfContentsHeading) => {
      return (
        <TableOfContentsItem key={heading.id}>
          <TableOfContentsLink
            isActive={
              heading.id === "_top"
                ? !currentId || currentId === heading.id
                : currentId === heading.id
            }
            href={`${pathname}#${heading.id}`}
          >
            {heading.label}
          </TableOfContentsLink>
          <TableOfContentsList indent>
            {heading.headings.map(renderTocHeading)}
          </TableOfContentsList>
        </TableOfContentsItem>
      );
    },
    [currentId],
  );

  return (
    <>
      <div className="container py-0 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
        <div className="container hidden lg:block px-0 text-sm! lg:order-2 sticky! max-h-[calc(100dvh-(var(--spacing))*33)] h-full top-16 bg-background z-40 rounded-tr-lg">
          <ScrollArea className="h-full relative">
            <TableOfContentsList className="relative h-max">
              <TableOfContentsTitle className="bg-background sticky top-0 text-base left-0 pb-3 mb-0">
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

        <div className="container px-0 lg:col-span-2">{children(ref)}</div>
      </div>
    </>
  );
}
