import { useNavigate } from "react-router";
import {
  startTransition,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type MouseEventHandler,
  type ReactElement,
} from "react";
import { Transition } from "@headlessui/react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import BusyIndicator from "./busy-indicator";
import { IconMenu2, IconX } from "./ui/icons";
import NavbarLink, { type NavbarLinkProps } from "./navbar-link";
import Socials from "./socials";
import SearchButton from "./search-button";
import ThemeSwitcher from "./theme-switcher";

export interface NavbarMenuProps {
  children: ReactElement<NavbarLinkProps>[];
}

export default function NavbarMenu(props: NavbarMenuProps) {
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const desktopLinkId = useId();
  const mobileLinkId = useId();

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
      props.children.map((child, index) => (
        <NavbarLink {...child.props} key={`${desktopLinkId}-${index}`} />
      )),
    [props.children.length, desktopLinkId]
  );

  const mobileLinks = useMemo(
    () =>
      props.children.map((child, index) => (
        <NavbarLink
          {...child.props}
          key={`${mobileLinkId}-${index}`}
          size="lg"
          onClick={closeMenu}
        />
      )),
    [props.children.length, mobileLinkId, closeMenu]
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
            "inline-flex items-center justify-center relative z-50 lg:hidden",
            show && "dark"
          )}
          variant="link"
          aria-label={show ? "Zamknij menu" : "Otwórz menu"}
        >
          <span className="sr-only">
            {show ? "Zamknij menu" : "Otwórz menu"}
          </span>
          {show ? (
            <IconX className="text-white! size-6" />
          ) : (
            <IconMenu2 className="size-6 text-black! dark:text-white!" />
          )}
        </Button>
      </div>

      <Transition show={show}>
        <nav className="flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden transition-all duration-150 data-closed:opacity-0 data-closed:invisible data-enter:translate-y-0 data-enter:data-closed:translate-y-10">
          {mobileLinks}
          <NavbarLink size="lg" onClick={closeMenu} to="/search">
            🔍 Szukaj
          </NavbarLink>
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
