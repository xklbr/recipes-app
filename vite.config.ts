import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      api: path.resolve("src/api"),
      assets: path.resolve("src/assets"),
      common: path.resolve("src/common"),
      components: path.resolve("src/components"),
      features: path.resolve("src/features"),
      interfaces: path.resolve("src/interfaces"),
      pages: path.resolve("src/pages"),
      layouts: path.resolve("src/layouts"),
      router: path.resolve("src/router"),
      store: path.resolve("src/store"),
    },
  },
  plugins: [react()],
});
