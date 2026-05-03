import type { MetaArgs } from "react-router";

import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  ORIGIN,
  TITLE_TEMPLATE,
  TITLE_TEMPLATE_TOKEN,
} from "./config";

type MetaTags = {
  title?: string;
  description?: string;
  keywords?: string[];
  type?: string;
  publishedTime?: string;
};

export interface MetaTagDescriptor {
  name: string;
  content?: string;
}

export interface MetaPropertyDescriptor {
  property: string;
  content?: string;
}

export interface MetaTitleDescriptor {
  title: string;
}

export type MetaDescriptor =
  | MetaTagDescriptor
  | MetaPropertyDescriptor
  | MetaTitleDescriptor;

export function isMetaTagDescriptor(
  descriptor: MetaDescriptor,
): descriptor is MetaTagDescriptor {
  return "name" in descriptor;
}

export function isMetaPropertyDescriptor(
  descriptor: MetaDescriptor,
): descriptor is MetaPropertyDescriptor {
  return "property" in descriptor;
}

export function isMetaTitleDescriptor(
  descriptor: MetaDescriptor,
): descriptor is MetaTitleDescriptor {
  return "title" in descriptor;
}

export function createMetaDescriptors(
  tags: MetaTags,
  pathname: string,
): MetaDescriptor[] {
  const title = tags.title
    ? TITLE_TEMPLATE.replace(TITLE_TEMPLATE_TOKEN, tags.title)
    : DEFAULT_TITLE;

  const description = tags.description ?? DEFAULT_DESCRIPTION;

  const keywords = tags.keywords?.join(",");

  const url = `${ORIGIN}${pathname}`;

  const descriptors: MetaDescriptor[] = [
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
      content: tags.type ?? "website",
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

  if (tags.publishedTime) {
    descriptors.push({
      property: "article:published_time",
      content: tags.publishedTime,
    });
  }

  return descriptors;
}

export function createMetaTags<T>(
  setup: (args: MetaArgs<T>) => MetaTags,
): (args: MetaArgs<T>) => MetaDescriptor[] {
  return (args: MetaArgs<T>) => {
    const params = setup(args);

    return createMetaDescriptors(params, args.location.pathname);
  };
}
