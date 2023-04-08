// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./main.js"),
      name: "date-formatter",
      // the proper extensions will be added
      fileName: "date-formatter",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["lit", "@web/dev-server-esbuild"],
      output: {},
    },
  },
});
