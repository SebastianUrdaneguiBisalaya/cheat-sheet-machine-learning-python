import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const indexs = defineCollection({
  loader: file("src/content/indexs.json", {
    parser: (text) => JSON.parse(text),
  }),
});

const docsInfo = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/docs",
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    content: z
      .array(
        z.object({
          slug: z.string(),
          title: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { indexs, docsInfo };
