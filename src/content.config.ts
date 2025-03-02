import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

const indexs = defineCollection({
  loader: file("src/content/indexs.json", {
    parser: (text) => JSON.parse(text),
  }),
});

export const collections = { indexs };
