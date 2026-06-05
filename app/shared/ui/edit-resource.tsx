import { FilePenLineIcon } from "lucide-react";

import { Button } from "./button";

export interface EditResourceProps {
  slug: string;
  resourceType: "articles" | "courses" | "projects";
}

export function EditResource({ slug, resourceType }: EditResourceProps) {
  return (
    <Button asChild variant="link" size="sm" className="cursor-pointer">
      <a
        href={`https://github.com/jakubszpil/jakubszpil.github.io/edit/main/content/${resourceType}/${slug}.md`}
        target="_blank"
        rel="noreferrer"
      >
        <FilePenLineIcon /> Edytuj
      </a>
    </Button>
  );
}
