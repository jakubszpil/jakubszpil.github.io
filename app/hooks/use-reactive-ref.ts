import { useEffect, useRef, useState } from "react";

export function useReactiveRef<T>() {
  const ref = useRef<T>(null);
  const [element, setElement] = useState<T | null>(null);

  useEffect(() => {
    setElement(ref.current);
  }, []);

  return { ref, element };
}
