import { getLocalizedDate } from "~/lib/date";
import { cn } from "~/lib/utils";

export interface BannerProps {
  readingTime: string;
  createdAt: Date;
  className?: string;
}

export function Banner(props: BannerProps) {
  return (
    <div className={cn("text-xs sm:text-sm mb-2", props.className)}>
      <div className="inline-block" title="Data opublikowania">
        <span className="mr-0.5">📆</span>
        <span className="hidden">Data opublikowania:</span>
        <time>{getLocalizedDate(props.createdAt)}</time>
      </div>
      <span className="ml-2 mr-1">/</span>
      <div
        className="inline-block sm:inline"
        title="Czas potrzebny na przeczytanie"
      >
        <span className="mr-0.5">⌛</span>
        <span className="hidden">Czas potrzebny na przeczytanie:</span>
        {props.readingTime} czytania
      </div>
    </div>
  );
}
