import { useEffect, useState } from "react";

const prefersColorSchemeDark = "(prefers-color-scheme: dark)";

export default function usePrefersColorSchemeDark() {
  const [isPrefersColorSchemaDark, setIsPrefersColorSchemaDark] =
    useState(false);

  useEffect(() => {
    const handlePrefersColorSchmeChange = (e) =>
      !("theme" in localStorage) && e.matches
        ? setIsPrefersColorSchemaDark(true)
        : setIsPrefersColorSchemaDark(false);

    window
      .matchMedia(prefersColorSchemeDark)
      .addEventListener("change", handlePrefersColorSchmeChange);

    return () => {
      window
        .matchMedia(prefersColorSchemeDark)
        .removeEventListener("change", handlePrefersColorSchmeChange);
    };
  });

  return isPrefersColorSchemaDark;
}
