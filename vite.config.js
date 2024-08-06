// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ec-frontend/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://intern-task-api.bravo68web.workers.dev",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
