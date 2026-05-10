import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export function isPublished(post: Post) {
  return !post.data.draft;
}

export function sortByNewest(posts: Post[]) {
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postSlug(post: Post) {
  return post.data.slug ?? post.id.replace(/\.(md|mdx)$/i, '');
}

export function postUrl(post: Post) {
  return `/posts/${postSlug(post)}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function categorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
