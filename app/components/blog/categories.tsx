import { useCallback } from "react";
import { Link } from "react-router";

import { Button } from "../ui/button";

export interface CategoriesProps {
  categories?: string[];
  showAllCategory?: boolean;
}

export default function Categories(props: CategoriesProps) {
  const renderCategory = useCallback((name: string, href: string) => {
    return (
      <Button
        key={name}
        asChild
        variant="secondary"
        size="sm"
        className="!no-underline lowercase"
      >
        <Link prefetch="intent" to={href}>
          #{name}
        </Link>
      </Button>
    );
  }, []);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {props.showAllCategory && renderCategory("wszystko", "/blog")}
      {props.categories?.map((name) =>
        renderCategory(name, `/blog/kategorie/${name}`)
      )}
    </div>
  );
}
