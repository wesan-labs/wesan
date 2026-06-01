import type { ContentBundle, Lang } from './content';

const COLLECTION_SLUG = 'site-bundle';
const ENTRY_SLUG = 'en';

type HelmEntryRow = { data: Record<string, unknown> | null };

function helmConfigured(): boolean {
  return Boolean(
    process.env.HELM_SUPABASE_URL?.trim() &&
      process.env.HELM_SUPABASE_ANON_KEY?.trim(),
  );
}

function extractBundle(data: Record<string, unknown> | null): Partial<ContentBundle> | null {
  if (!data || typeof data !== 'object') return null;

  const raw =
    (data.bundle as Partial<ContentBundle> | undefined) ??
    (data.content as Partial<ContentBundle> | undefined) ??
    (data._meta ? (data as Partial<ContentBundle>) : null);

  return raw && typeof raw === 'object' ? raw : null;
}

/** Published site bundle from Helm CMS (Supabase). Returns null when unset, missing, or draft-only. */
export async function fetchHelmContent(lang: Lang): Promise<Partial<ContentBundle> | null> {
  if (!helmConfigured()) return null;

  const baseUrl = process.env.HELM_SUPABASE_URL!.replace(/\/$/, '');
  const anonKey = process.env.HELM_SUPABASE_ANON_KEY!;
  const projectSlug = process.env.HELM_PROJECT_SLUG?.trim() || 'wesan';
  const entrySlug = process.env.HELM_ENTRY_SLUG?.trim() || ENTRY_SLUG;
  const revalidateSec = Number(process.env.HELM_CONTENT_REVALIDATE_SECONDS ?? '60');

  const headers = {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    Accept: 'application/json',
  };

  try {
    const propRes = await fetch(
      `${baseUrl}/rest/v1/properties?slug=eq.${encodeURIComponent(projectSlug)}&select=id`,
      {
        headers,
        next: {
          revalidate: Number.isFinite(revalidateSec) ? revalidateSec : 60,
          tags: [`helm:property:${projectSlug}`],
        },
      },
    );
    if (!propRes.ok) return null;

    const props = (await propRes.json()) as { id: string }[];
    const propertyId = props[0]?.id;
    if (!propertyId) return null;

    const collRes = await fetch(
      `${baseUrl}/rest/v1/cms_collections?project_id=eq.${propertyId}&slug=eq.${encodeURIComponent(COLLECTION_SLUG)}&select=id`,
      { headers, next: { revalidate: revalidateSec, tags: [`helm:collection:${projectSlug}`] } },
    );
    if (!collRes.ok) return null;

    const colls = (await collRes.json()) as { id: string }[];
    const collectionId = colls[0]?.id;
    if (!collectionId) return null;

    const entryRes = await fetch(
      `${baseUrl}/rest/v1/cms_entries?collection_id=eq.${collectionId}&slug=eq.${encodeURIComponent(entrySlug)}&locale=eq.${encodeURIComponent(lang)}&status=eq.published&select=data&limit=1`,
      {
        headers,
        next: {
          revalidate: revalidateSec,
          tags: [
            `helm:content:${projectSlug}:${lang}`,
            `cms:${COLLECTION_SLUG}:${entrySlug}:${lang}`,
          ],
        },
      },
    );
    if (!entryRes.ok) return null;

    const entries = (await entryRes.json()) as HelmEntryRow[];
    return extractBundle(entries[0]?.data ?? null);
  } catch {
    return null;
  }
}
