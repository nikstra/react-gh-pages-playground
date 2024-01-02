import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default () => {
  return defineConfig({
    plugins: [react()],
    base: "https://nikstra.github.io/react-gh-pages-playground",
    server: {
        open: true,
    },
    build: {
        outDir: './build'
    }
 })
}