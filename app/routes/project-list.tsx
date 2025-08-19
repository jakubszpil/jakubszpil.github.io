import type { LoaderFunctionArgs } from "react-router";

import Categories from "~/components/categories";
import Projects from "~/components/projects";
import { Seo } from "~/components/ui/seo";
import { encode, useDecodedLoaderData } from "~/lib/compress";
import {
  getProjectsByTechnology,
  getProjectsTechnologies,
} from "~/lib/projects";
import { getCapitalizedIndividualName } from "~/lib/string";

export async function loader({ params: { technology } }: LoaderFunctionArgs) {
  return encode({
    technology,
    technologies: await getProjectsTechnologies(),
    projects: await getProjectsByTechnology(technology),
  });
}

export default function ProjectList() {
  const { projects, technologies, technology } =
    useDecodedLoaderData<typeof loader>();

  const title = technology
    ? getCapitalizedIndividualName(technology)
    : undefined;

  return (
    <>
      <Seo
        title={title ? `Portfolio / ${title}` : "Portfolio"}
        description="Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności"
      />

      <header className="prose container">
        <h1>{title ?? "Portfolio"}</h1>
        <Categories
          showAllCategory
          categories={technologies}
          baseUrl="/portfolio"
          categoryPrefixUrl="/portfolio/technologie"
        />
      </header>

      <Projects key={technology} projects={projects} />
    </>
  );
}
