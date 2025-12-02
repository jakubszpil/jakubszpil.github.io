import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Seo } from "../../../shared/ui/seo";
import { ProjectService } from "../data-access/project-service";
import { getCapitalizedIndividualName } from "../../../shared/utils/string";
import { ProjectTechnologies } from "../ui/project-technologies";
import { ProjectCards } from "../ui/project-cards";

export async function loader({ params: { technology } }: LoaderFunctionArgs) {
  return {
    title: technology && getCapitalizedIndividualName(technology),
    technologies: await ProjectService.getCategories(),
    projects: await ProjectService.findAllByCategory(technology),
  };
}

export default function ProjectList() {
  const { projects, technologies, title } = useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={title ? `Portfolio / ${title}` : "Portfolio"}
        description="Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności"
      />

      <header className="prose container">
        <h1>{title ?? "Portfolio"}</h1>
        <ProjectTechnologies showAllCategory technologies={technologies} />
      </header>

      <ProjectCards projects={projects} />
    </>
  );
}
