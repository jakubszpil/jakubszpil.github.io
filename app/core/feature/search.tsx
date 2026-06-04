import { useCallback, useEffect, useState } from "react";
import {
  useFetcher,
  useNavigate,
  type ClientLoaderFunctionArgs,
} from "react-router";

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
import { IconSearch } from "../../shared/ui/icons";

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

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  return serverLoader<typeof loader>();
}

clientLoader.hydrate = true;

export function Search() {
  const [open, setOpen] = useState(false);

  const fetcher = useFetcher<typeof loader>();

  const navigate = useNavigate();

  const handleOpenClose = useCallback(async () => {
    if (!fetcher.data) {
      await fetcher.load("/search.json");
    }

    setOpen((prev) => !prev);
  }, [fetcher.load, fetcher.data]);

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
          <LinkWithPrefetch to={entry.href}>{entry.title}</LinkWithPrefetch>
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
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handleOpenClose();
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });

    return () => ac.abort();
  }, [handleOpenClose]);

  return (
    <>
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

          {fetcher.data && (
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
                {renderEntries(fetcher.data.articles)}
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Kursy">
                {renderEntries(fetcher.data.courses)}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </CommandDialog>
    </>
  );
}
