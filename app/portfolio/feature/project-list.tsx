import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import {
  getProjectsTechnologies,
  getProjectsByTechnology,
} from "../data-access/projects";
import { ProjectCards } from "../ui/project-cards";
import { Categories } from "../../shared/ui/categories";
import { createMetaTags } from "../../shared/utils/meta";
import { getCapitalizedIndividualName } from "../../shared/utils/string";

export async function loader({ params: { technology } }: LoaderFunctionArgs) {
  return {
    title: technology && getCapitalizedIndividualName(technology),
    technologies: await getProjectsTechnologies(),
    projects: await getProjectsByTechnology(technology),
  };
}

export const meta = createMetaTags<typeof loader>(({ loaderData }) => ({
  title: loaderData?.title ? `Portfolio / ${loaderData.title}` : "Portfolio",
  description:
    "Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności",
}));

export default function ProjectList() {
  const { projects, technologies, title } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="prose container">
        <h1>{title ?? "Portfolio"}</h1>

        <Categories
          categories={technologies}
          showAllCategory={true}
          baseUrl="/portfolio"
          categoryPrefixUrl="/portfolio/technologie"
        />
      </header>

      <ProjectCards projects={projects} />
    </>
  );
}
