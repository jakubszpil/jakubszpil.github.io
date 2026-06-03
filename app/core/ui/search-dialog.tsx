import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import type { loader } from "../feature/search";
import type { ArticleFeed } from "../../blog/data-access/articles";
import type { CourseFeed } from "../../learning/data-access/courses";
import { Button } from "../../shared/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../../shared/ui/command";
import { IconSearch } from "../../shared/ui/icons";
import { LinkWithPrefetch } from "../../shared/ui/link-with-prefetch";

type SearchData = Awaited<ReturnType<typeof loader>>;

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<SearchData | null>(null);

  const navigate = useNavigate();

  const handleOpenClose = useCallback(async () => {
    if (!data) {
      const response = await fetch("/search.json");
      const results = await response.json();
      setData(results);
    }

    setOpen((prev) => !prev);
  }, [data]);

  const handleNavigate = useCallback(
    async (href: string) => {
      await navigate(href);
      setOpen(false);
    },
    [navigate],
  );

  const renderItemWithSlug = useCallback(
    (params: { title: string; href: string }) => {
      return (
        <CommandItem
          key={params.href}
          onSelect={() => handleNavigate(params.href)}
          asChild
        >
          <LinkWithPrefetch to={params.href}>{params.title}</LinkWithPrefetch>
        </CommandItem>
      );
    },
    [handleNavigate],
  );

  const renderArticles = useCallback(
    (articles: ArticleFeed[]) => {
      return articles.map((article) =>
        renderItemWithSlug({
          href: `/blog/${article.slug}`,
          title: article.title,
        }),
      );
    },
    [renderItemWithSlug],
  );

  const renderCourses = useCallback(
    (courses: CourseFeed[]) => {
      return courses.map((course) =>
        renderItemWithSlug({
          href: `/learning/${course.slug}`,
          title: course.title,
        }),
      );
    },
    [renderItemWithSlug],
  );

  useEffect(() => {
    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handleOpenClose();
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });

    return () => ac.abort();
  }, [handleOpenClose]);

  return (
    <div>
      <Button
        onClick={handleOpenClose}
        size="icon"
        variant="ghost"
        className="inline-flex items-center justify-center cursor-pointer"
        aria-label="Szukaj"
        title="Szukaj (CTRL+K)"
      >
        <span className="sr-only">Szukaj</span>
        <IconSearch className="size-6" />
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="top-18 translate-y-0 h-auto flex flex-col max-h-[calc(100dvh-(var(--spacing)*24))]"
      >
        <Command>
          <CommandInput placeholder="Szukaj..." />

          {data && (
            <CommandList className="max-h-full sm:max-h-75">
              <CommandEmpty>Brak rezultatów.</CommandEmpty>

              <CommandGroup heading="Nawigacja">
                {renderItemWithSlug({
                  href: "/",
                  title: "Strona główna",
                })}
                {renderItemWithSlug({
                  href: "/blog",
                  title: "Blog",
                })}
                {renderItemWithSlug({
                  href: "/learning",
                  title: "Learning",
                })}
                {renderItemWithSlug({
                  href: "/portfolio",
                  title: "Portfolio",
                })}
                {renderItemWithSlug({
                  href: "/me",
                  title: "O mnie",
                })}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Artykuły">
                {renderArticles(data.articles)}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Kursy">
                {renderCourses(data.courses)}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </CommandDialog>
    </div>
  );
}
