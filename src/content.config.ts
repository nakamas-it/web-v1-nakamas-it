import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const school = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/school' }),
  schema: z.object({
    title: z.string(),
    layer: z.string(),
    protocol: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const engineRoom = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/engine-room' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    topic: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { school, engineRoom };
