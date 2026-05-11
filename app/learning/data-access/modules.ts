import matter from "gray-matter";
import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";

import { type Assignment, parseAssignments } from "./assignments";
import { type Lesson, parseLessons } from "./lessons";
import { sortItemsByOrder } from "./sorting";

interface ModuleFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  order: number;
}

interface ModuleFeed {
  slug: string;
  title: string;
  description: string;
}

interface Module {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  assignments: Assignment[];
  lessons: Lesson[];
  order: number;
}

function mapperModuleFeed(module: Module): ModuleFeed {
  return {
    slug: module.slug,
    title: module.title,
    description: module.description,
  };
}

async function parseModuleFrontmatter(
  file: string,
): Promise<ModuleFrontmatter> {
  const { data } = matter(file);

  return {
    description: data.description,
    keywords: data.keywords,
    title: data.title,
    order: data.order,
  };
}

async function parseModule(
  modulesPath: string,
  moduleSlug: string,
): Promise<Module> {
  const modulePath = join(modulesPath, moduleSlug);
  const file = await readFile(join(modulePath, "module.md"), "utf-8");

  const frontmatter = await parseModuleFrontmatter(file);

  const lessons = await parseLessons(join(modulePath, "lessons"));

  const assignments = await parseAssignments(join(modulePath, "assignments"));

  return {
    ...frontmatter,
    slug: moduleSlug,
    lessons,
    assignments,
  };
}

async function parseModules(modulesPath: string): Promise<Module[]> {
  const modulesSlugs = await readdir(modulesPath);

  const modulesAsPromises = modulesSlugs.map((slug) =>
    parseModule(modulesPath, slug),
  );

  const modules = await Promise.all(modulesAsPromises);

  return sortItemsByOrder(modules);
}

export type { ModuleFrontmatter, ModuleFeed, Module };

export { mapperModuleFeed, parseModules };
