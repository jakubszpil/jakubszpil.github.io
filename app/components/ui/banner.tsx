import { getLocalizedDate } from "~/lib/date";

export interface BannerProps {
  readingTime: string;
  createdAt: Date;
}

export function Banner(props: BannerProps) {
  return (
    <div className="text-xs sm:text-sm mb-2 sm:mb-3">
      <div className="inline-block mb-1" title="Data opublikowania">
        <span className="mr-0.5">📆</span>
        <span className="hidden">Data opublikowania:</span>
        <time>{getLocalizedDate(props.createdAt)}</time>
      </div>
      <span className="mx-2 sm:mx-3">/</span>
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
