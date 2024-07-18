import { type ReactNode } from "react";
import {
  Helmet,
  HelmetProvider,
  type HelmetProps,
  type MetaProps,
} from "react-helmet-async";

import { useConfig } from "../data-access";

export interface SeoMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  creationDate?: string;
}

export interface SeoProps extends SeoMeta, HelmetProps {}

interface MetaTags {
  addProperty(property: string, content: string | undefined | null): MetaTags;
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
  const config = useConfig();

  const title = (value?: string) =>
    value ? `${value} - ${config.meta.title}` : null;

  const description = (value?: string) => value ?? config.meta.description;

  const meta = createMetaTags()
    .addTag("description", description(props.description))
    .addTag("keywords", props.keywords?.join(","))
    .addProperty("og:title", title(props.title))
    .addProperty("og:description", description(props.description))
    .addProperty("twitter:title", title(props.title))
    .addProperty("twitter:description", description(props.description))
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
