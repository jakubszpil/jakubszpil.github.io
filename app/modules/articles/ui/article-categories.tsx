import { Categories } from "../../../shared/ui/categories";

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
