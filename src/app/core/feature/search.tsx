import { Form, redirect } from "react-router-dom";

import { defineLoader, useLoader, Button, Input, Seo } from "@libs/shared";
import { Article, getArticles, Articles } from "@libs/articles";
import { Project, getProjects } from "@libs/projects";

export const loader = defineLoader(({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  if (query === "") {
    url.searchParams.delete("q");
    throw redirect(url.toString());
  }

  const test = (i: unknown): boolean => {
    if (!query) return false;
    const s = JSON.stringify(i);
    const q = query.toLowerCase();

    return s.toLowerCase().includes(q);
  };

  const articles = getArticles().filter(test);
  const projects = getProjects().filter(test);

  return { query, articles, projects };
});

export default function Search() {
  const { query, articles, projects } = useLoader<typeof loader>();

  const resultsCount = articles.length + projects.length;

  const renderResults = (
    query: string | null,
    resultsCount: number,
    articles: Article[],
    projects: Project[]
  ) => {
    if (!query) {
      return null;
    }

    if (resultsCount === 0) {
      return <h2>Brak wyników wyszukiwania dla zapytania: {query}</h2>;
    }

    return (
      <>
        <h2>Wyniki wyszukiwania ({resultsCount})</h2>

        {articles.length > 0 && (
          <section>
            <h3>Artykuły ({articles.length})</h3>
            <Articles className="px-0 !grid-cols-1" articles={articles} />
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <h3>Projekty ({projects.length})</h3>
          </section>
        )}
      </>
    );
  };

  return (
    <section className="prose max-w-full">
      <Seo title={`Szukaj${query ? `: ${query}` : ""}`} />

      <header className="container pb-0">
        <h1 className="mb-0">Wyszukaj</h1>
      </header>

      <Form method="get" className="container pb-0 flex gap-2">
        <Input
          key={query}
          type="text"
          name="q"
          placeholder="Treść zapytania"
          defaultValue={query ?? ""}
          required
        />
        <Button type="submit">Szukaj</Button>
      </Form>

      <div className="container pt-0">
        {renderResults(query, resultsCount, articles, projects)}
      </div>
    </section>
  );
}
