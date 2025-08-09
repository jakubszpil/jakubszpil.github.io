import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import Technologies from "~/components/portfolio/technologies";
import Projects from "~/components/portfolio/projects";
import { Seo } from "~/components/ui/seo";
import {
  getProjectsByTechnology,
  getProjectsTechnologies,
} from "~/lib/projects";
import { getCapitalizedIndividualName } from "~/lib/string";

export async function loader({ params: { technology } }: LoaderFunctionArgs) {
  return {
    technology,
    technologies: await getProjectsTechnologies(),
    projects: await getProjectsByTechnology(technology),
  };
}

export default function ProjectList() {
  const { projects, technologies, technology } = useLoaderData<typeof loader>();

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
        <Technologies showAllTechnology technologies={technologies} />
      </header>

      <Projects key={technology} projects={projects} />
    </>
  );
}
