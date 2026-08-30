/* Research reports - markdown files loaded at build time.
   Each file lives in content/research/*.md */

import fs from 'node:fs/promises';
import path from 'node:path';

export interface ResearchMeta {
  slug: string;
  title: string;
  date: string;
  topic: string;
  excerpt: string;
}

const DIR = path.join(process.cwd(), 'content', 'research');

/* Pull "Hazırlayan / Tarih / Konu" from the report frontmatter-ish block. */
function parseMeta(slug: string, md: string): ResearchMeta {
  const title = md.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? slug;
  const date = md.match(/\*\*Tarih:\*\*\s*([^\n]+)/)?.[1]?.trim() ?? '';
  const topic = md.match(/\*\*Konu:\*\*\s*([^\n]+)/)?.[1]?.trim() ?? '';
  const tldr = md.split('## TL;DR')[1]?.split('---')[0] ?? '';
  const firstPara = tldr.split('\n\n').find((p) => p.trim().length > 50) ?? '';
  const excerpt = firstPara.replace(/\*\*/g, '').replace(/_/g, '').slice(0, 240);
  return { slug, title, date, topic, excerpt };
}

export async function getResearchSlugs(): Promise<string[]> {
  const files = await fs.readdir(DIR);
  return files.filter((f) => f.endsWith('.md')).map((f) => f.replace('.md', ''));
}

export async function getResearchContent(slug: string): Promise<string | null> {
  try {
    return await fs.readFile(path.join(DIR, `${slug}.md`), 'utf-8');
  } catch {
    return null;
  }
}

export async function getResearchMeta(slug: string): Promise<ResearchMeta | null> {
  const md = await getResearchContent(slug);
  if (!md) return null;
  return parseMeta(slug, md);
}

export async function getAllResearchMeta(): Promise<ResearchMeta[]> {
  const slugs = await getResearchSlugs();
  const items = await Promise.all(slugs.map(getResearchMeta));
  return items.filter((x): x is ResearchMeta => !!x);
}
