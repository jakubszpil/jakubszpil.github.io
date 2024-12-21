import { useCallback } from "react";

import { Button } from "~/components/ui/button";
import { LinkWithPrefetch } from "~/components/ui/link-with-prefetch";

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
        <LinkWithPrefetch to={href}>#{name}</LinkWithPrefetch>
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
