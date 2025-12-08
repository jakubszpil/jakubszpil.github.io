import { type ParsingStrategy, processFile } from "@packages/shared/server";

import type { Project } from "./project";

export const projectParser: ParsingStrategy<Project> = async (slug, file) => {
  const { data } = processFile(file);

  return {
    slug,
    createdAt: new Date(data.createdAt).toISOString(),
    categories: data.categories,
    description: data.description,
    status: data.status,
    title: data.title,
  } satisfies Project;
};
