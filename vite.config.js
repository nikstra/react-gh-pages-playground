import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default () => {
  return defineConfig({
    plugins: [react()],
    base: "/react-gh-pages-playground",
    server: {
        open: true,
    },
    build: {
        outDir: './build'
    }
 })
}