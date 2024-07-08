import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import macrosPlugin from "vite-plugin-babel-macros";
import path from "path";

export default defineConfig({
  define: {
    "process.env": {},
    Buffer: {},
    //styled components
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react(), macrosPlugin(), svgr()],
});
