import { build } from "esbuild";

build({
  entryPoints: ["./index.ts"],
  outfile: "./dist/index.js",
  external: ["./node_modules/*"],
  platform: "node",
  format: "esm",
  bundle: true,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
