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
