import { useRef, useState, type ReactElement } from "react";
import classNames from "classnames";
import { IconMenu2, IconSearch, IconX } from "@tabler/icons-react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Button } from "@libs/shared";

import NavbarLink, { type NavbarLinkProps } from "./navbar-link";
import Socials from "./socials";

export type NavbarMenuProps = {
  children: ReactElement<NavbarLinkProps>[];
};

export default function NavbarMenu(props: NavbarMenuProps) {
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setShow(false);
    buttonRef.current?.focus();
  };

  const toggleMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <nav className="hidden items-center lg:flex">
          {props.children.map((child) => (
            <NavbarLink {...child.props} key={uuid()} />
          ))}
        </nav>

        <Button
          size="icon"
          variant="ghost"
          asChild
          className="inline-flex items-center justify-center"
          aria-label="Szukaj"
          title="Szukaj"
        >
          <Link to="/szukaj">
            <span className="sr-only">Szukaj</span>
            <IconSearch className="h-6" />
          </Link>
        </Button>

        <Socials hideLabels={true} />

        <Button
          size="icon"
          ref={buttonRef}
          onClick={toggleMenu}
          className={classNames(
            "inline-flex items-center justify-center relative z-50 lg:hidden",
            show && "dark"
          )}
          variant="link"
          aria-label={show ? "Zamknij menu" : "Otwórz menu"}
          title={show ? "Zamknij menu" : "Otwórz menu"}
        >
          <span className="sr-only">
            {show ? "Zamknij menu" : "Otwórz menu"}
          </span>
          {show ? (
            <IconX className="!text-white h-6" />
          ) : (
            <IconMenu2 className="h-6 !text-black" />
          )}
        </Button>
      </div>

      <Transition show={show}>
        <nav
          className={classNames(
            "flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden",
            "transition-[transform,opacity,visibility] duration-150",
            "data-[closed]:opacity-0 data-[closed]:invisible",
            "data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10"
          )}
        >
          {props.children.map((child) => (
            <NavbarLink
              {...child.props}
              key={uuid()}
              size="lg"
              onClick={closeMenu}
            />
          ))}
        </nav>
      </Transition>
    </>
  );
}
