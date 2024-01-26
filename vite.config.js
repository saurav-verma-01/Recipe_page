// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { minifyHtml, injectHtml } from "vite-plugin-html";
import { minify } from "terser";
import cssnano from "cssnano";

export default defineConfig({
  plugins: [
    react(),
    minifyHtml(),
    injectHtml({
      injectData: {
        injectCSS: '<link rel="stylesheet" href="/assets/index.css">',
        injectJS: '<script defer src="/assets/index.js"></script>',
      },
    }),
  ],
  build: {
    // Use minification for production build
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
    // Additional configuration for CSS minification
    cssCodeSplit: false,
    cssMinify: cssnano(),
  },
});
