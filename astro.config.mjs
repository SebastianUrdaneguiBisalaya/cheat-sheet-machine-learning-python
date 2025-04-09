// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import { remarkAlert } from "remark-github-blockquote-alert";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkAlert],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
});
