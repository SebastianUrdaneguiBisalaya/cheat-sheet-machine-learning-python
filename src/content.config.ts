import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const indexs = defineCollection({
  loader: file("src/content/es/indexs.json", {
    parser: (text) => JSON.parse(text),
  }),
});

const introductionInfo = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/es/introduction",
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
    navigation: z
      .array(
        z.object({
          side: z.enum(["left", "right"]),
          title: z.string(),
          link: z.string(),
        })
      )
      .optional(),
  }),
});

const dataProcessingInfo = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/es/data-processing",
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
    navigation: z
      .array(
        z.object({
          side: z.enum(["left", "right"]),
          title: z.string(),
          link: z.string(),
        })
      )
      .optional(),
  }),
});

const modelsInfo = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/es/models",
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
    navigation: z
      .array(
        z.object({
          side: z.enum(["left", "right"]),
          title: z.string(),
          link: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = {
  indexs,
  introductionInfo,
  dataProcessingInfo,
  modelsInfo,
};
