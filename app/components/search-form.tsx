import { useCallback, useEffect, useRef } from "react";
import { Form, useLocation, type Location } from "react-router";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IconSearch } from "./ui/icons";
import { queryParamName } from "../lib/search";
import type { ArticleFeed } from "../lib/articles";
import type { CourseFeed } from "../lib/courses";
import type { ProjectFeed } from "../lib/projects";

export interface SearchFormProps {
  query: string | null;
  action: string;
  articles: ArticleFeed[];
  courses: CourseFeed[];
  projects: ProjectFeed[];
}

export function SearchForm({
  action,
  query,
  articles,
  courses,
  projects,
}: SearchFormProps) {
  const ref = useRef<HTMLInputElement>(null);
  const location = useLocation() as Location<{ focus: boolean } | undefined>;

  useEffect(() => {
    if (location.state?.focus) ref.current?.focus();
  }, [ref, location.state]);

  const renderDatalistOptions = useCallback(
    <T extends { title: string }>(label: string, group: string, items: T[]) => {
      return items?.map((item, idx) => (
        <option key={`${group}-${idx}`} value={item.title}>
          {label}
        </option>
      ));
    },
    [],
  );

  return (
    <Form
      preventScrollReset={true}
      method="get"
      className="container py-0! bg-background flex gap-2"
      action={action}
    >
      <Input
        ref={ref}
        key={query}
        type="search"
        name={queryParamName}
        placeholder="Treść zapytania"
        defaultValue={query ?? ""}
        required
        className="flex-1 relative text-sm"
        list="search-datalist"
      />

      <datalist id="search-datalist">
        {renderDatalistOptions("📝 Artykuł", "articles", articles)}
        {renderDatalistOptions("🏫 Kurs", "courses", courses)}
        {renderDatalistOptions("🛠️ Projekt", "projects", projects)}
      </datalist>

      <Button type="submit">
        <IconSearch className="size-5" />
        Szukaj
      </Button>
    </Form>
  );
}
