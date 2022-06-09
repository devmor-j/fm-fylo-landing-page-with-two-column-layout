import { defineConfig } from 'vite';
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  base: './',
  plugins: [
    createHtmlPlugin({
      minify: true,
    })
  ]
})
