import { useId } from "react";

import { Button, type ButtonProps } from "./ui/button";
import { IconBrandGithub, IconBrandLinkedin } from "./ui/icons";
import { config } from "../lib/config";

export interface SocialsProps {
  hideLabels?: boolean;
  variant?: ButtonProps["variant"];
}

const Icons = {
  ["brand-linkedin"]: IconBrandLinkedin,
  ["brand-github"]: IconBrandGithub,
};

export function Socials({ hideLabels, variant }: SocialsProps) {
  const id = useId();

  return config.socials.map((social, index) => {
    const Icon = Icons[social.icon];

    return (
      <Button
        key={`${id}-${index}`}
        asChild
        size={hideLabels ? "icon" : "sm"}
        variant={variant ?? "ghost"}
        className="inline-flex items-center gap-1 no-underline"
        title={social.label}
        aria-label={social.label}
      >
        <a href={social.href} target="_blank" rel="noreferrer">
          <Icon className="size-6" />
          <span className={`${hideLabels ? "sr-only" : ""}`}>
            {social.label}
          </span>
        </a>
      </Button>
    );
  });
}
