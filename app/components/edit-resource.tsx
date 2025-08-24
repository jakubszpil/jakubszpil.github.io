import { Button } from "./ui/button";

export interface EditResourceProps {
  slug: string;
  resourceType: "articles" | "courses" | "projects";
}

export default function EditResource(props: EditResourceProps) {
  return (
    <div className="container">
      <Button
        asChild
        variant="secondary"
        size="lg"
        className="w-full p-10 text-wrap flex-wrap h-auto text-center gap-y-4"
      >
        <p className="text-wrap!">
          Widzisz jakiś błąd, bądź literówkę? Chcesz coś poprawić?
          <Button asChild variant="link">
            <a
              href={`https://github.com/jakubszpil/jakubszpil.github.io/edit/main/app/content/${props.resourceType}/${props.slug}.md`}
              target="_blank"
              rel="noreferrer"
            >
              ✏️ Przejdź do edycji tego pliku
            </a>
          </Button>
        </p>
      </Button>
    </div>
  );
}
