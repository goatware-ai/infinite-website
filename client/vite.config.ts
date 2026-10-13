import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // Local stand-in for production, where nginx serves the teamwork-board API at this path.
    proxy: {
      "/teamwork-board/api": {
        target: "http://localhost:4000",
        rewrite: (path) => path.replace(/^\/teamwork-board/, ""),
      },
    },
  },
});
