import type { ReactNode } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

export interface ModalProps {
  children: ReactNode;
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}

export function Modal({ children, title, trigger, description }: ModalProps) {
  return (
    <Dialog>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent className="top-18 translate-y-0 h-auto flex flex-col max-h-[calc(100dvh-(var(--spacing)*24))]">
        <DialogHeader>
          {title && <DialogTitle className="text-left">{title}</DialogTitle>}
          {description && (
            <DialogDescription className="text-left">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <ScrollArea className="no-scrollbar -mx-2 px-2 sm:-mx-4 sm:px-4 overflow-y-auto flex-1">
          {children}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
