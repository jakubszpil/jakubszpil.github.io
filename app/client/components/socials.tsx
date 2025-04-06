import { v4 } from "uuid";

import { config } from "~/shared/lib/config";

import { Button, type ButtonProps } from "~/shared/components/ui/button";

export interface SocialsProps {
  hideLabels?: boolean;
  variant?: ButtonProps["variant"];
}

export default function Socials(props: SocialsProps) {
  return config.socials.map((social) => (
    <Button
      key={v4()}
      asChild
      size={props.hideLabels ? "icon" : "sm"}
      variant={props.variant ?? "ghost"}
      className="inline-flex items-center gap-1 no-underline"
      title={social.label}
      aria-label={social.label}
    >
      <a href={social.href} target="_blank" rel="noreferrer">
        <social.icon className="h-6" />
        <span className={`${props.hideLabels ? "sr-only" : ""}`}>
          {social.label}
        </span>
      </a>
    </Button>
  ));
}
