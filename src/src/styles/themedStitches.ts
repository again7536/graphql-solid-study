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
      darkblue500: "#073B4C",
      blue500: "#118AB2",
      yellow500: "#FFD166",
      green500: "#06D6A0",
      red500: "#EF476F",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "12pt",
      2: "14pt",
      3: "16pt",
      4: "20pt",
      5: "24pt",
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
