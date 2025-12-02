import { Categories } from "@packages/shared";

export interface CourseCategoriesProps {
  categories: string[];
  showAllCategory?: boolean;
}

export function CourseCategories(props: CourseCategoriesProps) {
  return (
    <Categories
      categories={props.categories}
      showAllCategory={props.showAllCategory}
      baseUrl="/learning"
      categoryPrefixUrl="/learning/kategorie"
    />
  );
}
