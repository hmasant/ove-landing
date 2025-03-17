import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    minify: true,
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"],
          vendor: ["react", "react-dom", "react-router-dom"],
          swiper: ["swiper"],
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      "react",
      "swiper",
      "react-dom",
      "@mui/material",
      "@emotion/react",
      "@emotion/styled",
      "react-router-dom",
    ],
  },

  css: { modules: { generateScopedName: "[name]__[local]___[hash:base64:5]" } },
});
