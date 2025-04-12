import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
  // Add base and build configuration
  base: "/", // Change this if deploying to a subdirectory
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensure proper module resolution in production
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue"],
          vendor: [
            "vue-router", // include if you're using vue-router
            // other major dependencies
          ],
        },
      },
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
