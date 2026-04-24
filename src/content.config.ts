import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const voices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/voices' }),
  schema: z.object({
    name: z.string(),
    publication: z.string(),
    dateShort: z.string(), // e.g. "Oct 2025" — for compact card
    dateLong: z.string(),  // e.g. "Oct 20, 2025" — for detail page
    title: z.string(),     // article / episode / post title
    url: z.string().url(), // primary source URL
    extraLinks: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .optional(),
    quote: z.string().optional(), // pull quote if any
    indexText: z.string(),        // text on index card (the quote, or a short descriptor)
    category: z.enum(['commentary', 'press']),
    order: z.number(),            // sort order within category
    featureOnIndex: z.boolean().default(false),
  }),
});

export const collections = { voices };
