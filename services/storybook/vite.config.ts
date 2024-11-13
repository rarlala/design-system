// <reference types="vitest">

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // test: {
  //   global: true,
  //   include: ["./stories/**/*.test.ts?(x) "],
  // },
});
