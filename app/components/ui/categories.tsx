import { useCallback } from "react";

import { getCapitalizedIndividualName } from "../../lib/string";
import { Button } from "./button";
import { LinkWithPrefetch } from "./link-with-prefetch";

export interface CategoriesProps {
  categories: string[];
  baseUrl: string;
  categoryPrefixUrl: string;
  showAllCategory?: boolean;
}

export function Categories({
  categories,
  baseUrl,
  categoryPrefixUrl,
  showAllCategory,
}: CategoriesProps) {
  const renderCategory = useCallback((name: string, href: string) => {
    return (
      <Button
        key={name}
        asChild
        variant="secondary"
        size="sm"
        className="no-underline!"
      >
        <LinkWithPrefetch to={href}>
          {getCapitalizedIndividualName(name)}
        </LinkWithPrefetch>
      </Button>
    );
  }, []);

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {showAllCategory && renderCategory("wszystko", baseUrl)}
      {categories.map((name) =>
        renderCategory(name, `${categoryPrefixUrl}/${name}`),
      )}
    </div>
  );
}
