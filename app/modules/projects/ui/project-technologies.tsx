import { Categories } from "../../../shared/ui/categories";

export interface ProjectTechnologiesProps {
  technologies: string[];
  showAllCategory?: boolean;
}

export function ProjectTechnologies(props: ProjectTechnologiesProps) {
  return (
    <Categories
      categories={props.technologies}
      showAllCategory={props.showAllCategory}
      baseUrl="/portfolio"
      categoryPrefixUrl="/portfolio/technologie"
    />
  );
}
