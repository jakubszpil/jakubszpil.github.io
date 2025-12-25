import type { MetaArgs, MetaDescriptor } from "react-router";

import { config } from "./config";

type MetaTags = {
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  publishedTime?: string;
};

export function createMetaTags<T>(
  setup: (args: MetaArgs<T>) => MetaTags
): (args: MetaArgs<T>) => MetaDescriptor[] {
  return (args: MetaArgs<T>) => {
    const params = setup(args);

    const title = params.title
      ? config.meta.titleTemplate.replace("%s", params.title)
      : config.meta.defaultTitle;

    const description = params.description ?? config.meta.description;

    const keywords = params.keywords?.join(",");

    const origin = import.meta.env.PROD
      ? "https://jakubszpil.github.io"
      : "http://localhost:5173";

    const url = `${origin}${args.location.pathname}`;

    const tags: MetaDescriptor[] = [
      {
        title: title,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "twitter:title",
        content: title,
      },
      {
        name: "description",
        content: description,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "twitter:description",
        content: description,
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "og:type",
        content: params.type ?? "website",
      },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "og:url",
        content: url,
      },
      {
        name: "twitter:url",
        content: url,
      },
    ];

    if (params.publishedTime) {
      tags.push({
        property: "article:published_time",
        content: params.publishedTime,
      });
    }

    return tags;
  };
}
