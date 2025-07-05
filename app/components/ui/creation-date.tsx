import { getLocalizedDate } from "~/lib/date";
import { cn } from "~/lib/utils";

export interface CreationDateProps {
  date: Date;
  className?: string;
}

export function CreationDate(props: CreationDateProps) {
  return (
    <div
      className={cn("inline-block", props.className)}
      title="Data opublikowania"
    >
      <span className="mr-0.5">📆</span>
      <span className="hidden">Data opublikowania:</span>
      <time>{getLocalizedDate(props.date)}</time>
    </div>
  );
}
