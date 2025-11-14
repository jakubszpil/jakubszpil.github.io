import { useId } from "react";

import { config } from "../lib/config";
import { Button, type ButtonProps } from "./ui/button";
import { Icons } from "./ui/icons";

export interface SocialsProps {
  hideLabels?: boolean;
  variant?: ButtonProps["variant"];
}

export default function Socials(props: SocialsProps) {
  const id = useId();

  return config.socials.map((social, index) => {
    const Icon = Icons[social.icon];

    return (
      <Button
        key={`${id}-${index}`}
        asChild
        size={props.hideLabels ? "icon" : "sm"}
        variant={props.variant ?? "ghost"}
        className="inline-flex items-center gap-1 no-underline"
        title={social.label}
        aria-label={social.label}
      >
        <a href={social.href} target="_blank" rel="noreferrer">
          <Icon className="size-6" />
          <span className={`${props.hideLabels ? "sr-only" : ""}`}>
            {social.label}
          </span>
        </a>
      </Button>
    );
  });
}
