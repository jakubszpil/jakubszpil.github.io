import { useNavigate } from "react-router";
import {
  startTransition,
  useCallback,
  useMemo,
  useRef,
  useState,
  type MouseEventHandler,
  type ReactElement,
} from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Transition } from "@headlessui/react";
import { v4 } from "uuid";

import { Button } from "./ui/button";
import BusyIndicator from "./busy-indicator";
import NavbarLink, { type NavbarLinkProps } from "./navbar-link";
import Socials from "./socials";
import SearchButton from "./search-button";
import ThemeSwitcher from "./theme-switcher";
import { cn } from "~/lib/utils";

export interface NavbarMenuProps {
  children: ReactElement<NavbarLinkProps>[];
}

export default function NavbarMenu(props: NavbarMenuProps) {
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleNavigate: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (event) => {
      const target = event.currentTarget;
      const link = target.closest("a");

      if (link) {
        event.preventDefault();
        const href = link.getAttribute("href");

        if (href) {
          await navigate(href);
        }
      }
    },
    []
  );

  const closeMenu: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (event) => {
      await handleNavigate(event);

      startTransition(() => {
        setShow(false);
        buttonRef.current?.focus();
      });
    },
    [handleNavigate, buttonRef.current]
  );

  const toggleMenu = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const desktopLinks = useMemo(
    () =>
      props.children.map((child) => <NavbarLink {...child.props} key={v4()} />),
    [props.children.length]
  );

  const mobileLinks = useMemo(
    () =>
      props.children.map((child) => (
        <NavbarLink {...child.props} key={v4()} size="lg" onClick={closeMenu} />
      )),
    [props.children.length, closeMenu]
  );

  return (
    <>
      <div className="flex flex-1 justify-end items-center sm:gap-1">
        <nav className="hidden items-center lg:flex">{desktopLinks}</nav>

        <SearchButton />

        <div className="hidden xs:flex items-center sm:gap-1">
          <Socials hideLabels={true} />
        </div>

        <ThemeSwitcher />

        <Button
          size="icon"
          ref={buttonRef}
          onClick={toggleMenu}
          className={cn(
            "inline-flex items-center cursor-pointer justify-center relative z-50 lg:hidden",
            show && "dark"
          )}
          variant="link"
          aria-label={show ? "Zamknij menu" : "Otwórz menu"}
        >
          <span className="sr-only">
            {show ? "Zamknij menu" : "Otwórz menu"}
          </span>
          {show ? (
            <IconX className="text-white! h-6" />
          ) : (
            <IconMenu2 className="h-6 text-black! dark:text-white!" />
          )}
        </Button>
      </div>

      <Transition show={show}>
        <nav className="flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden transition-[transform,opacity,visibility] duration-150 data-closed:opacity-0 data-closed:invisible data-enter:translate-y-0 data-enter:data-closed:translate-y-10">
          {mobileLinks}

          <div className="h-8 flex justify-center items-center absolute bottom-40">
            <BusyIndicator />
          </div>

          <div className="flex absolute bottom-20 gap-3 xs:hidden">
            <Socials hideLabels={true} />
          </div>
        </nav>
      </Transition>
    </>
  );
}
