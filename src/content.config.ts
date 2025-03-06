import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const indexs = defineCollection({
  loader: file("src/content/indexs.json", {
    parser: (text) => JSON.parse(text),
  }),
});

const docsInfo = defineCollection({
  loader: glob({
    pattern: ["*.mdx"],
    base: "src/content/docs",
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
  }),
});

export const collections = { indexs, docsInfo };
