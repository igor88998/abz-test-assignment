import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          api: ["@tanstack/react-query"],
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
        },
      },
    },
    cssCodeSplit: true,
    minify: "terser",
    target: "es2017", // Better mobile compatibility
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-query"],
  },
});
