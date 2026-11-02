import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Definimos la colección 'blog'
const blog = defineCollection({
  // El loader le dice a Astro dónde buscar los archivos .md y .mdx
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  // El schema define las reglas para los datos de cada entrada (Frontmatter)
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

// 2. Exportamos las colecciones para que Astro las reconozca
export const collections = { blog };