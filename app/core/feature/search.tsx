import { useForesight } from "@foresightjs/react";
import { SearchIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { getArticles } from "../../blog/data-access/articles";
import { getCourses } from "../../learning/data-access/courses";
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
import { LinkWithPrefetch } from "../../shared/ui/link-with-prefetch";
import { Button } from "../../shared/ui/button";

export async function loader() {
  const articles = await getArticles();
  const courses = await getCourses();

  return {
    articles: articles.map((article) => ({
      href: `/blog/${article.slug}`,
      title: article.title,
    })),
    courses: courses.map((course) => ({
      href: `/learning/${course.slug}`,
      title: course.title,
    })),
  };
}

type SearchData = Awaited<ReturnType<typeof loader>>;

export function Search() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<SearchData | null>(null);

  const fetchData = useCallback(async () => {
    if (data) {
      return;
    }

    try {
      const response = await fetch("/search.json");
      const results = await response.json();

      setData(results);
    } catch (error) {
      console.error(error);
      setData(null);
    }
  }, [data]);

  const { elementRef } = useForesight<HTMLButtonElement>({
    callback: fetchData,
  });

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleNavigate = useCallback(
    async (href: string) => {
      await navigate(href);
      setOpen(false);
    },
    [navigate],
  );

  const renderItemWithSlug = useCallback(
    (entry: { href: string; title: string }) => {
      return (
        <CommandItem
          key={entry.href}
          onSelect={() => handleNavigate(entry.href)}
          asChild
        >
          <LinkWithPrefetch prefetch="viewport" to={entry.href}>
            {entry.title}
          </LinkWithPrefetch>
        </CommandItem>
      );
    },
    [handleNavigate],
  );

  const renderEntries = useCallback(
    (entries: Array<{ href: string; title: string }>) => {
      return entries.map((entry) => renderItemWithSlug(entry));
    },
    [renderItemWithSlug],
  );

  useEffect(() => {
    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      const isValidCommand = (e.metaKey || e.ctrlKey) && e.key === "k";
      const isValidKey = e.key === "/";

      if (isValidCommand || isValidKey) {
        e.preventDefault();
        handleOpen();
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });

    return () => ac.abort();
  }, []);

  return (
    <>
      <Button
        onClick={handleOpen}
        size="icon"
        variant="ghost"
        className="inline-flex items-center justify-center cursor-pointer"
        aria-label="Szukaj"
        title="Szukaj ⌘K lub /"
        ref={elementRef}
      >
        <span className="sr-only">Szukaj</span>
        <SearchIcon className="size-6" />
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="top-18 translate-y-0 h-auto flex flex-col max-h-[calc(100dvh-(var(--spacing)*24))]"
      >
        <Command>
          <CommandInput placeholder="Szukaj..." />

          {data && (
            <CommandList>
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
                {renderEntries(data.articles)}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Kursy">
                {renderEntries(data.courses)}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </CommandDialog>
    </>
  );
}
