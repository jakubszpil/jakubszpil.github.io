import { Transition } from "@headlessui/react";
import { IconLoader } from "@tabler/icons-react";
import { useNavigation } from "react-router";

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
      enter="delay-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <IconLoader className="animate-spin" data-testid="spinner" />
    </Transition>
  );
}
