import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/** Helm cms_publish_targets webhook — bust ISR after publish. */
export async function POST(req: NextRequest) {
  const secret = process.env.HELM_REVALIDATE_SECRET?.trim();
  if (!secret) {
    return NextResponse.json({ error: 'HELM_REVALIDATE_SECRET not configured' }, { status: 503 });
  }

  const header = req.headers.get('x-helm-secret');
  if (header !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let tags: string[] = [];
  try {
    const body = await req.json();
    if (Array.isArray(body?.tags)) {
      tags = body.tags.filter((t: unknown) => typeof t === 'string');
    }
  } catch {
    // empty body — full layout revalidate only
  }

  for (const tag of tags) {
    revalidateTag(tag, {});
  }

  revalidateTag('helm:content:wesan:en', {});
  revalidatePath('/', 'layout');

  return NextResponse.json({ revalidated: true, tags });
}
