'use client';

import { useState } from 'react';
import { SectionHead } from '../_components/lib';

export interface LegalDoc { title: string; updated: string; body: [string, string][] }
export interface LegalContent {
  head: { num: string; label: string; title: string; sub: string };
  tabs: [string, string][];
  docs: Record<string, LegalDoc>;
  footer: string;
}

export function LegalClient({ c }: { c: LegalContent }) {
  const [tab, setTab] = useState<string>(c.tabs[0][0]);
  const doc = c.docs[tab];

  return (
    <>
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '32px' }}>
        <div className="container">
          <SectionHead num={c.head.num} label={c.head.label} title={c.head.title} sub={c.head.sub} />
          <div className="gap-8 mt-8" style={{ flexWrap: 'wrap' }}>
            {c.tabs.map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} className={tab === k ? 'btn solid' : 'btn ghost'}>{l}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '32px', background: 'var(--paper-2)' }}>
        <div className="container-narrow" style={{ fontSize: '15.5px', lineHeight: 1.7 }}>
          <article>
            <header className="mb-12">
              <h2 className="h-1 mb-4">{doc.title}</h2>
              <span className="mono" style={{ fontSize: '11.5px', color: 'var(--ink-3)', letterSpacing: '0.1em' }}>LAST UPDATED · {doc.updated}</span>
            </header>
            {doc.body.map(([h, p], i) => (
              <section key={i} style={{ marginBottom: '40px' }}>
                <h3 className="h-3 mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500 }}>{h}</h3>
                <p style={{ color: 'var(--ink-2)', whiteSpace: 'pre-wrap' }}>{p}</p>
              </section>
            ))}
            <footer
              style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--rule)', fontSize: '13px', color: 'var(--ink-3)' }}
              dangerouslySetInnerHTML={{ __html: c.footer }}
            />
          </article>
        </div>
      </section>
    </>
  );
}
