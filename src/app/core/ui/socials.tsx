import classNames from "classnames";

import { Button, ButtonProps, useConfig, uuid } from "@libs/shared";

export interface SocialsProps {
  hideLabels?: boolean;
  variant?: ButtonProps["variant"];
}

export default function Socials(props: SocialsProps) {
  const config = useConfig();

  return config.socials.map((social) => (
    <Button
      key={uuid()}
      asChild
      size={props.hideLabels ? "icon" : "sm"}
      variant={props.variant ?? "ghost"}
      className="inline-flex items-center gap-1 no-underline"
      title={social.label}
      aria-label={social.label}
    >
      <a href={social.href} target="_blank">
        <social.icon />
        <span className={classNames(props.hideLabels && "sr-only")}>
          {social.label}
        </span>
      </a>
    </Button>
  ));
}
