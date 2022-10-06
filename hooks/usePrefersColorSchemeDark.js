import { useEffect, useState } from "react";

const prefersColorSchemeDark = "(prefers-color-scheme: dark)";

export default function usePrefersColorSchemeDark() {
  const [isPrefersColorSchemaDark, setIsPrefersColorSchemaDark] =
    useState(false);

  useEffect(() => {
    const mediaQueryColorScheme = window.matchMedia(prefersColorSchemeDark);
    const handlePrefersColorSchmeChange = (e) =>
      e.matches
        ? setIsPrefersColorSchemaDark(true)
        : setIsPrefersColorSchemaDark(false);

    // Set inital value
    setIsPrefersColorSchemaDark(mediaQueryColorScheme.matches);

    mediaQueryColorScheme.addEventListener(
      "change",
      handlePrefersColorSchmeChange
    );

    return () => {
      mediaQueryColorScheme.removeEventListener(
        "change",
        handlePrefersColorSchmeChange
      );
    };
  });

  return isPrefersColorSchemaDark;
}
