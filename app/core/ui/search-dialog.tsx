import { useCallback, useEffect, useState } from "react";
import { useFetcher, useNavigate } from "react-router";

import type { loader } from "../feature/search";
import type { SearchEntry } from "../data-access/search";
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

export function SearchDialog() {
  const [open, setOpen] = useState(false);

  const fetcher = useFetcher<typeof loader>();

  const navigate = useNavigate();

  const handleOpenClose = useCallback(async () => {
    if (!fetcher.data) {
      await fetcher.load("/search.json");
    }

    setOpen((prev) => !prev);
  }, [fetcher]);

  const handleNavigate = useCallback(
    async (href: string) => {
      await navigate(href);
      setOpen(false);
    },
    [navigate],
  );

  const renderItemWithSlug = useCallback(
    (entry: SearchEntry) => {
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
    (entries: SearchEntry[]) => {
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
    </div>
  );
}
