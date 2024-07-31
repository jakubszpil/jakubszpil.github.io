import { Helmet, type HelmetProps, type MetaProps } from "react-helmet-async";
import { useMemo } from "react";

import { config } from "@/config";

export interface SeoMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  creationDate?: string;
}

export interface SeoProps extends HelmetProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

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
  const title = props.title ?? config.meta.defaultTitle;

  const description = props.description ?? config.meta.description;

  const meta = useMemo(
    () =>
      createMetaTags()
        .addTag("description", description)
        .addTag("keywords", props.keywords?.join(","))
        .addProperty("og:title", title)
        .addProperty("og:description", description)
        .addProperty("twitter:title", title)
        .addProperty("twitter:description", description)
        .build(),
    [description, props.keywords, title]
  );

  return <Helmet title={title} meta={meta} />;
};
