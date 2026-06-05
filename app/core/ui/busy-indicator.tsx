import { Transition } from "@headlessui/react";
import { LoaderIcon } from "lucide-react";
import { useNavigation } from "react-router";

export function BusyIndicator() {
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
      <LoaderIcon className="animate-spin" data-testid="spinner" />
    </Transition>
  );
}
