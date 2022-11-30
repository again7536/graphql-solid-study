import { globalCss } from "./themedStitches";

const globalStyle = globalCss({
  "@font-face": [
    {
      fontFamily: "LINE Seed Sans",
      src: "url('./src/assets/fonts/LINE_Seed_Sans_KR/WOFF2/LINESeedKR-Bd.woff2')",
      fontWeight: "$bold",
    },
    {
      fontFamily: "LINE Seed Sans",
      src: "url('./src/assets/fonts/LINE_Seed_Sans_KR/WOFF2/LINESeedKR-Rg.woff2')",
      fontWeight: "$normal",
    },
    {
      fontFamily: "LINE Seed Sans",
      src: "url('./src/assets/fonts/LINE_Seed_Sans_KR/WOFF2/LINESeedKR-Th.woff2')",
      fontWeight: "$light",
    },
  ],
  "*": {
    fontFamily: "Line Seed Sans",
  },
});

export default globalStyle;
