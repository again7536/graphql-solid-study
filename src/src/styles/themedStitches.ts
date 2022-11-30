import { createStitches } from "@stitches/core";

const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  theme,
} = createStitches({
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 920px)",
    xl: "(min-width: 1200px)",
  },
  theme: {
    colors: {
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
  },
});

export {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  theme,
};
