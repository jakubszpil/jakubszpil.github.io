import { Transition } from "@headlessui/react";
import { IconLoader } from "@tabler/icons-react";
import { useNavigation } from "react-router";

export interface BusyIndicatorProps {
  showImmediately?: boolean;
}

export default function BusyIndicator(props: BusyIndicatorProps) {
  const navigation = useNavigation();
  const isPending = Boolean(navigation.location);

  if (!isPending) {
    return null;
  }

  return (
    <Transition
      show
      appear
      enter={!props.showImmediately ? "delay-75" : undefined}
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <IconLoader className="animate-spin" data-testid="spinner" />
    </Transition>
  );
}
