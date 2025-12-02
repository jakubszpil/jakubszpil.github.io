import { useCallback } from "react";

import { getCapitalizedIndividualName } from "../utils/string";
import { Button } from "./button";
import { LinkWithPrefetch } from "./link-with-prefetch";

export interface CategoriesProps {
  categories: string[];
  baseUrl: string;
  categoryPrefixUrl: string;
  showAllCategory?: boolean;
}

export function Categories(props: CategoriesProps) {
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
      {props.showAllCategory && renderCategory("wszystko", props.baseUrl)}
      {props.categories.map((name) =>
        renderCategory(name, `${props.categoryPrefixUrl}/${name}`)
      )}
    </div>
  );
}
