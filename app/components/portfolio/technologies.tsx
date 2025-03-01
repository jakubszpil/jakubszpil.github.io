import { useCallback } from "react";
import { Link } from "react-router";

import { Button } from "../ui/button";

export interface TechnologiesProps {
  technologies?: string[];
  showAllTechnology?: boolean;
}

export default function Technologies(props: TechnologiesProps) {
  const renderTechnology = useCallback((name: string, href: string) => {
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
      {props.showAllTechnology && renderTechnology("wszystko", "/portfolio")}
      {props.technologies?.map((name) =>
        renderTechnology(name, `/portfolio/technologie/${name}`)
      )}
    </div>
  );
}
