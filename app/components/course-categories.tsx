import { Categories } from "./ui/categories";

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
