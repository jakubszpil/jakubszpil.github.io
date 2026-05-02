import { Button } from "./button";
import { IconEdit } from "./icons";

export interface EditResourceProps {
  slug: string;
  resourceType: "articles" | "courses" | "projects";
}

export function EditResource({ slug, resourceType }: EditResourceProps) {
  return (
    <Button asChild variant="link" size="sm" className="cursor-pointer">
      <a
        href={`https://github.com/jakubszpil/jakubszpil.github.io/edit/main/app/content/${resourceType}/${slug}.md`}
        target="_blank"
        rel="noreferrer"
      >
        <IconEdit /> Edytuj
      </a>
    </Button>
  );
}
