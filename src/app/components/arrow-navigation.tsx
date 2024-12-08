import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function ArrowNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();

    const down = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (!e.shiftKey) {
          return;
        }

        if (e.key === "<") {
          e.preventDefault();
          navigate(-1);
        }
        if (e.key === ">") {
          e.preventDefault();
          navigate(1);
        }
        if (e.key === "H" && location.pathname !== "/handbook") {
          e.preventDefault();
          navigate("/handbook");
        }
      }
    };

    document.addEventListener("keydown", down, {
      signal: abortController.signal,
    });

    return () => abortController.abort();
  }, [location, navigate]);

  return null;
}
