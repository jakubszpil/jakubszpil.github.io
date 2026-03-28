import {
  useEffect,
  useMemo,
  useState,
  type ReactPortal,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";

import { useHydrated } from "~/hooks/use-hydrated";
import { Button } from "./ui/button";
import { IconCopy } from "./ui/icons";

export interface CopyCodeBlocksProps {
  ref: RefObject<HTMLElement | null>;
}

function getCodeBlockLanguage(className: string) {
  const [_, token] = className.split(" ");

  const language = token.replace("language-", "");

  return language;
}

export function CopyCodeBlocks({ ref }: CopyCodeBlocksProps) {
  const hydrated = useHydrated();

  const [portals, setPortals] = useState<Array<ReactPortal | null>>([]);

  const blocks = useMemo(() => {
    if (!hydrated) return [];

    const blocks = ref.current?.querySelectorAll("pre");

    return [...(blocks ?? [])];
  }, [hydrated, ref.current]);

  useEffect(() => {
    const portals = blocks.map((block, index) => {
      const code = block.textContent;

      const codeBlock = block.querySelector("code")!;

      if (!codeBlock.classList.contains("hljs")) return null;

      const language = getCodeBlockLanguage(codeBlock.className);

      const onClick = async () => {
        await navigator.clipboard.writeText(code);

        toast.success("Skopiowano do schowka", {
          id: index,
        });
      };

      return createPortal(
        <>
          <div className="w-full dark border-b top-0 left-0 absolute flex items-center justify-end py-2 px-3 md:px-4.5">
            {language && (
              <Button disabled variant="link" size="sm">
                {language}
              </Button>
            )}
            <Button
              size="sm"
              variant="link"
              className="cursor-pointer ml-auto font-sans"
              onClick={onClick}
              title="Skopiuj do schowka"
            >
              <IconCopy /> Skopiuj
            </Button>
          </div>
        </>,
        block,
      );
    });

    setPortals(portals);
  }, [blocks]);

  return <>{portals}</>;
}
