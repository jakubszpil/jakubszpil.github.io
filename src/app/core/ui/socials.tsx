import { Icon, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import classNames from "classnames";

import { Button, ButtonProps, useConfig } from "@libs/shared";

export interface SocialsProps {
  hideLabels?: boolean;
  variant?: ButtonProps["variant"];
}

export default function Socials(props: SocialsProps) {
  const config = useConfig();

  const renderSocialLink = (
    props: SocialsProps,
    link: {
      label: string;
      href: string;
      Icon: Icon;
    }
  ) => {
    return (
      <Button
        asChild
        size={props.hideLabels ? "icon" : "sm"}
        variant={props.variant ?? "ghost"}
        className="inline-flex items-center gap-1 no-underline"
        title={link.label}
        aria-label={link.label}
      >
        <a href={link.href} target="_blank">
          <link.Icon />
          <span className={classNames(props.hideLabels && "sr-only")}>
            {link.label}
          </span>
        </a>
      </Button>
    );
  };

  return (
    <>
      {renderSocialLink(props, {
        label: "LinkedIn",
        href: config.socials.linkedin,
        Icon: IconBrandLinkedin,
      })}
      {renderSocialLink(props, {
        label: "GitHub",
        href: config.socials.github,
        Icon: IconBrandGithub,
      })}
    </>
  );
}
