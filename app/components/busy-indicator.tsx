import { Transition } from "@headlessui/react";
import { useNavigation } from "react-router";

import { IconLoader } from "./ui/icons";

export default function BusyIndicator() {
  const navigation = useNavigation();
  const isPending = Boolean(navigation.location);

  if (!isPending) {
    return null;
  }

  return (
    <Transition
      show
      appear
      enter="delay-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <IconLoader className="animate-spin" data-testid="spinner" />
    </Transition>
  );
}
