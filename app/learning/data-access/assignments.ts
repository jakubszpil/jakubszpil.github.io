import matter from "gray-matter";
import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";

interface AssignmentFrontmatter {
  title: string;
  description: string;
  keywords: string[];
}

interface AssignmentFeed {
  slug: string;
  title: string;
  description: string;
}

interface Assignment {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

function mapperAssignmentFeed(assignment: Assignment): AssignmentFeed {
  return {
    slug: assignment.slug,
    title: assignment.title,
    description: assignment.description,
  };
}

async function parseAssignmentFrontmatter(
  file: string,
): Promise<AssignmentFrontmatter> {
  const { data } = matter(file);

  return {
    description: data.description,
    keywords: data.keywords,
    title: data.title,
  };
}

async function parseAssignment(
  assignmentsPath: string,
  assignmentFileName: string,
): Promise<Assignment> {
  const file = await readFile(
    join(assignmentsPath, assignmentFileName),
    "utf-8",
  );
  const slug = assignmentFileName.replace(".md", "");

  const frontmatter = await parseAssignmentFrontmatter(file);

  return {
    ...frontmatter,
    slug,
  };
}

async function parseAssignments(
  assignmentsPath: string,
): Promise<Assignment[]> {
  const assignmentsFileNames = await readdir(assignmentsPath);

  const assignmentsAsPromises = assignmentsFileNames.map((assignmentFileName) =>
    parseAssignment(assignmentsPath, assignmentFileName),
  );

  const assignments = await Promise.all(assignmentsAsPromises);

  return assignments;
}

export type { AssignmentFrontmatter, AssignmentFeed, Assignment };

export { mapperAssignmentFeed, parseAssignments };
