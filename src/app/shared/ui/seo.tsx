import { ReactNode } from "react";
import {
  Helmet,
  HelmetProps,
  HelmetProvider,
  MetaProps,
} from "react-helmet-async";

export interface SeoMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  creationDate?: string;
}

export interface SeoProps extends SeoMeta, HelmetProps {}

interface MetaTags {
  addProperty(property: string, content: string | undefined): MetaTags;
  addTag(name: string, content: string | undefined): MetaTags;
  build(): MetaProps[];
}

function createMetaTags(): MetaTags {
  const tags: MetaProps[] = [];

  return {
    addProperty(property, content) {
      if (content) tags.push({ property, content });
      return this;
    },
    addTag(name, content) {
      if (content) tags.push({ name, content });
      return this;
    },
    build() {
      return tags;
    },
  };
}

export const Seo = (props: SeoProps) => {
  const meta = createMetaTags()
    .addTag("description", props.description)
    .addTag("keywords", props.keywords?.join(","))
    .addProperty("og:title", props.title)
    .addProperty("og:description", props.description)
    .addProperty("twitter:title", props.title)
    .addProperty("twitter:description", props.description)
    .build();

  return (
    <Helmet
      {...props}
      title={props.title}
      meta={meta}
      prioritizeSeoTags={true}
    />
  );
};

export interface SeoProviderProps {
  children: ReactNode;
}

export const SeoProvider = (props: SeoProviderProps) => {
  return <HelmetProvider>{props.children}</HelmetProvider>;
};
