// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const services = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/services" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    slug: z.string(),
    featured: z.boolean().optional(),
    order: z.number().int().positive()
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    slug: z.string(),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = { services, projects };