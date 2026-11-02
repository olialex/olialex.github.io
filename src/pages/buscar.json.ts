import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const datos = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((p) => ({
      id: p.id,
      title: p.data.title,
      description: p.data.description,
      tags: p.data.tags,
      fecha: p.data.pubDate.toISOString().slice(0, 10),
    }));

  return new Response(JSON.stringify(datos), {
    headers: { 'Content-Type': 'application/json' },
  });
}