import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const baseUrl = process.env.NODE_ENV === 'development'
  ? "/"
  : "/react-gh-pages-playground";

export default () => {
  return defineConfig({
    plugins: [react()],
    base: `${baseUrl}`,
    server: {
        open: true,
    },
    build: {
        outDir: './build'
    }
 })
}