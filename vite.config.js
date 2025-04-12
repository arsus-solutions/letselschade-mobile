import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// More compatible approach for Node 16
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        sassOptions: {
          outputStyle: "compressed",
          sourceMap: true,
        },
      },
    },
  },
  // Simplified build config for better Node 16 compatibility
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Target older browsers for better compatibility
    target: "es2015",
    // Reduce chunk size to avoid optimization issues
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      // Improve CommonJS modules handling
      transformMixedEsModules: true,
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://extranet.letselschadeclaimen.nl",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
