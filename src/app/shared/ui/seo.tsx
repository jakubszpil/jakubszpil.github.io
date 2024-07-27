import { useEffect } from "react";
import { type HelmetProps, type MetaProps } from "react-helmet-async";

import { config } from "@/config";

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
  useEffect(() => {
    document.title = props.title ?? "Trwa ładowanie";

    const title = (value?: string) =>
      value ? config.meta.titleTemplate.replace("%s", value) : null;

    const description = (value?: string) => value ?? config.meta.description;

    const meta = createMetaTags()
      .addTag("description", description(props.description))
      .addTag("keywords", props.keywords?.join(","))
      .addProperty("og:title", title(props.title))
      .addProperty("og:description", description(props.description))
      .addProperty("twitter:title", title(props.title))
      .addProperty("twitter:description", description(props.description))
      .build();

    meta.forEach((meta) => {
      const tag = document.createElement("meta");
      tag.name = meta.name!;
      tag.content = meta.content!;
      document.head.append(tag);
    });
  }, [props]);

  return null;
};
