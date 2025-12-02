import { Banner } from "./banner";
import { Button, type ButtonProps } from "./button";
import { LinkWithPrefetch } from "./link-with-prefetch";
import { cn } from "../utils/helpers";

export interface Post {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

export interface PostsProps<T extends Post = Post> {
  posts: T[];
  pathPrefix: string;
  className?: string;
  variant?: ButtonProps["variant"];
}

export function Posts<T extends Post = Post>(props: PostsProps<T>) {
  return (
    <section
      className={cn(
        "container pt-0! prose grid gap-3 grid-cols-fill",
        props.className
      )}
    >
      {props.posts.map((post) => (
        <Button
          key={post.slug}
          asChild
          variant={props.variant ?? "outline"}
          className="inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap! no-underline truncate p-6"
        >
          <LinkWithPrefetch to={`${props.pathPrefix}/${post.slug}`}>
            <h2 className="line-clamp-3 text-base font-semibold flex-1 m-0!">
              {post.title}
            </h2>
            <p className="line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300">
              {post.description}
            </p>
            <Banner
              className="text-xs! text-neutral-500 dark:text-neutral-400 mb-0"
              createdAt={post.createdAt}
              readingTime={post.readingTime}
            />
          </LinkWithPrefetch>
        </Button>
      ))}
    </section>
  );
}
