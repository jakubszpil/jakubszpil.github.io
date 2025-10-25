import type { LoaderFunctionArgs } from "react-router";

import Categories from "~/components/categories";
import Projects from "~/components/projects";
import Seo from "~/components/seo";
import { encode, useDecodedLoaderData } from "~/lib/compress";
import { ProjectService } from "~/lib/projects";
import { getCapitalizedIndividualName } from "~/lib/string";

export async function loader({ params: { technology } }: LoaderFunctionArgs) {
  return encode({
    title: technology ? getCapitalizedIndividualName(technology) : undefined,
    technologies: await ProjectService.getCategories(),
    projects: await ProjectService.findAllByCategory(technology),
  });
}

export default function ProjectList() {
  const { projects, technologies, title } =
    useDecodedLoaderData<typeof loader>();

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

      <Projects projects={projects} />
    </>
  );
}
