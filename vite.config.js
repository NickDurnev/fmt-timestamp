// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "fmt-timestamp",
      fileName: "index",
    },
    rollupOptions: {
      external: ["lit"],
    },
  },
});
