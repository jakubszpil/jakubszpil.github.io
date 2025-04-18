import {
  Await,
  useLoaderData,
  type LoaderFunctionArgs,
  type ShouldRevalidateFunctionArgs,
} from "react-router";

import Technologies from "~/components/portfolio/technologies";
import Projects from "~/components/portfolio/projects";
import { Seo } from "~/components/ui/seo";
import {
  getProjects,
  getProjectsByTechnology,
  getProjectsTechnologies,
} from "~/lib/projects";
import { capitalize } from "~/lib/string";

export function shouldRevalidate({
  currentParams,
  nextParams,
}: ShouldRevalidateFunctionArgs) {
  const currentTechnology = currentParams.technology;
  const nextTechnology = nextParams.technology;
  return currentTechnology !== nextTechnology;
}

export async function loader({ params: { technology } }: LoaderFunctionArgs) {
  const technologies = await getProjectsTechnologies();

  if (technology) {
    return {
      technology,
      technologies,
      projects: await getProjectsByTechnology(technology),
    };
  }

  return {
    projects: await getProjects(),
    technologies,
    technology,
  };
}

export default function ProjectList() {
  const { projects, technologies, technology } = useLoaderData<typeof loader>();

  const title = technology ? capitalize(technology) : undefined;

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
