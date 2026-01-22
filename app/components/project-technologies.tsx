import { Categories } from "@packages/shared";

export interface ProjectTechnologiesProps {
  technologies: string[];
  showAllTechnology?: boolean;
}

export function ProjectTechnologies({
  technologies,
  showAllTechnology,
}: ProjectTechnologiesProps) {
  return (
    <Categories
      categories={technologies}
      showAllCategory={showAllTechnology}
      baseUrl="/portfolio"
      categoryPrefixUrl="/portfolio/technologie"
    />
  );
}
