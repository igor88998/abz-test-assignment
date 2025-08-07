import { useCallback } from "react";

export const useScrollTo = () => {
  const scrollToElement = useCallback(
    (elementId: string, offset: number = 0) => {
      let element = document.getElementById(elementId);

      if (!element) {
        element = document.querySelector(`#${elementId}`);
      }

      if (!element && elementId === "signup-form") {
        element = document.querySelector(".signup-section");
      }

      if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    },
    [],
  );

  return { scrollToElement };
};
