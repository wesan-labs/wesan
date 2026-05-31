import Link from 'next/link';
import { SectionHead } from '../_components/lib';
import { getContent, getRoles } from '@/lib/content';

export default function CareersPage() {
  const c = getContent().pages.careers;
  const roles = getRoles();

  return (
    <>
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        <div className="container">
          <SectionHead
            num={c.head.num!}
            label={c.head.label!}
            title={c.head.title!}
            sub={c.head.sub}
          />
        </div>
      </section>

      <section style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 32px' }}>
        {roles.map((role, i) => (
          <article key={role.slug} className={'role-row ' + (i % 2 === 1 ? 'alt' : '')}>
            <span className="tag accent">{role.div}</span>
            <div>
              <div className="gap-8" style={{ alignItems: 'baseline' }}>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.08em' }}>{role.team}</span>
                <h3 className="name">{role.name}</h3>
              </div>
              <p className="desc">{role.desc}</p>
            </div>
            <span className="meta">{role.where}</span>
            <span className="meta">{role.type}</span>
            <Link href={`/careers/${role.slug}`} className="btn solid">Read more <span className="arr">→</span></Link>
          </article>
        ))}
        <div
          className="mt-12 mono"
          style={{ fontSize: '11.5px', color: 'var(--ink-3)', textAlign: 'center', letterSpacing: '0.1em', padding: '20px' }}
          dangerouslySetInnerHTML={{ __html: c.industriesNote }}
        />
      </section>

      <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="container">
          <div className="row row-2" style={{ gap: '64px' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--accent)' }}>{c.whatYouGet.eyebrow}</span>
              <h2 className="h-1 mt-4" style={{ color: 'var(--paper)' }} dangerouslySetInnerHTML={{ __html: c.whatYouGet.title }} />
            </div>
            <div style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-5)' }}>
              {c.whatYouGet.paragraphs.map((p, i, a) => (
                <p key={i} className={i < a.length - 1 ? 'mb-4' : undefined}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
