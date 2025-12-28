import { CreationDate } from "./creation-date";
import { cn } from "../utils/helpers";

export interface BannerProps {
  readingTime: string;
  createdAt: string;
  className?: string;
}

export function Banner({ readingTime, createdAt, className }: BannerProps) {
  return (
    <div className={cn("text-xs sm:text-sm mb-2", className)}>
      <CreationDate date={createdAt} />
      <span className="ml-2 mr-1">/</span>
      <div
        className="inline-block sm:inline"
        title="Czas potrzebny na przeczytanie"
      >
        <span className="mr-0.5">⌛</span>
        <span className="hidden">Czas potrzebny na przeczytanie:</span>
        {readingTime} czytania
      </div>
    </div>
  );
}
