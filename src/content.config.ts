import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string().min(1, 'Post title is required'),
    description: z.string().min(1, 'Post description is required'),
    date: z.coerce.date(),
    author: z.string().min(1, 'Post author is required'),
    category: z.string().min(1, 'Post category is required'),
    tags: z.array(z.string().min(1)).min(1, 'Add at least one tag'),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    draft: z.boolean(),
    slug: z.string().min(1).optional()
  })
});

export const collections = { posts };
