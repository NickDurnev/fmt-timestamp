// vite.config.js
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: {
        date_formatter: "src/date_formatter.ts",
        formatToRelative: "src/formatData/formatToRelative.ts",
        formatToShort: "src/formatData/formatToShort.ts",
        formatToTime: "src/formatData/formatToTime.ts",
      },
      name: "date_formatter",
    },
    plugins: [dts()],
    rollupOptions: {
      external: ["lit", "@web/dev-server-esbuild"],
      output: {},
    },
  },
});
