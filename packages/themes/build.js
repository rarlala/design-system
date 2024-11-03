import run from "@rarla/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
