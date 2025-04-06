import { Button } from "~/shared/components/ui/button";

export interface EditResourceProps {
  resourceUrl: string | undefined;
}

export default function EditResource(props: EditResourceProps) {
  if (!props.resourceUrl) {
    return null;
  }

  return (
    <div className="container">
      <Button
        asChild
        variant="secondary"
        size="lg"
        className="w-full p-10 text-wrap flex-wrap h-auto text-center gap-y-4"
      >
        <p>
          Widzisz jakiś błąd, bądź literówkę? Chcesz coś poprawić?
          <Button asChild variant="link">
            <a href={props.resourceUrl} target="_blank" rel="noreferrer">
              ✏️ Przejdź do edycji tego pliku
            </a>
          </Button>
        </p>
      </Button>
    </div>
  );
}
