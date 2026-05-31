import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllResearchMeta, getResearchContent, getResearchMeta, getResearchSlugs } from '@/lib/research';

export async function generateStaticParams() {
  const slugs = await getResearchSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = await getResearchMeta(slug);
  if (!meta) return { title: 'Research note not found' };
  return { title: `${meta.title} · Research · Wesan`, description: meta.topic };
}

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const md = await getResearchContent(slug);
  if (!md) notFound();

  const others = (await getAllResearchMeta()).filter((m) => m.slug !== slug);

  return (
    <>
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        <div className="container-narrow">
          <Link href="/research" className="mono" style={{ fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '24px' }}>
            ← ALL RESEARCH
          </Link>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <article className="container-narrow research-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </article>
      </section>

      {others.length > 0 && (
        <section className="section" style={{ background: 'var(--paper-2)' }}>
          <div className="container-narrow">
            <div className="eyebrow mb-6">OTHER RESEARCH</div>
            <div className="row row-2" style={{ gap: '20px' }}>
              {others.map((o) => (
                <Link key={o.slug} href={`/research/${o.slug}`} className="card" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                  <div className="mono mb-2" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.08em' }}>{o.date}</div>
                  <h3 className="serif" style={{ fontSize: '20px', lineHeight: 1.35 }}>{o.title}</h3>
                </Link>
              ))}
            </div>
            <div className="mt-8" style={{ textAlign: 'center' }}>
              <Link href="/research" className="btn">All research</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
