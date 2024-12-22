import { useLocation } from "react-router";

import { config } from "~/lib/config";

export interface SeoMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  creationDate?: string;
}

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

export const Seo = (props: SeoProps) => {
  const { pathname } = useLocation();

  const title = props.title ?? config.meta.defaultTitle;
  const description = props.description ?? config.meta.description;
  const keywords = props.keywords?.join(",");

  const origin = import.meta.env.PROD
    ? "https://jakubszpil.github.io"
    : "http://localhost:5173";

  const url = `${origin}${pathname}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={url} />
    </>
  );
};
