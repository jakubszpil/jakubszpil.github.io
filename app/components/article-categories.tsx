import { Categories } from "./ui/categories";

export interface ArticleCategoriesProps {
  categories: string[];
  showAllCategory?: boolean;
}

export function ArticleCategories({
  categories,
  showAllCategory,
}: ArticleCategoriesProps) {
  return (
    <Categories
      categories={categories}
      showAllCategory={showAllCategory}
      baseUrl="/blog"
      categoryPrefixUrl="/blog/kategorie"
    />
  );
}
