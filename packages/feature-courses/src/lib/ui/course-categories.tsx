import { Categories } from "@packages/shared";

export interface CourseCategoriesProps {
  categories: string[];
  showAllCategory?: boolean;
}

export function CourseCategories({
  categories,
  showAllCategory,
}: CourseCategoriesProps) {
  return (
    <Categories
      categories={categories}
      showAllCategory={showAllCategory}
      baseUrl="/learning"
      categoryPrefixUrl="/learning/kategorie"
    />
  );
}
