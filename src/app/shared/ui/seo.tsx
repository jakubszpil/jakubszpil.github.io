import { config } from "@/config";

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
  const title = props.title ?? config.meta.defaultTitle;
  const description = props.description ?? config.meta.description;
  const keywords = props.keywords?.join(",");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
