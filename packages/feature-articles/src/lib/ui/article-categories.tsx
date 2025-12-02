import { Categories } from "@packages/shared";

export interface ArticleCategoriesProps {
  categories: string[];
  showAllCategory?: boolean;
}

export function ArticleCategories(props: ArticleCategoriesProps) {
  return (
    <Categories
      categories={props.categories}
      showAllCategory={props.showAllCategory}
      baseUrl="/blog"
      categoryPrefixUrl="/blog/kategorie"
    />
  );
}
