import type { ReactNode } from 'react';
import Link from 'next/link';
import { Photo, Telemetry, SectionHead } from '../_components/lib';
import { getContent, type Tone } from '@/lib/content';

interface StudioContent {
  hero: { tags: { label: string; variant: string }[]; fig: string; title: string; photo: { tone: Tone; ratio: string; caption: string; label: string } };
  telemetry: [string, string][];
  manifesto: string;
  projectsHead: { num: string; label: string; title: string };
  projects: { code: string; name: string; desc: string; meta: string[]; href: string }[];
  principlesHead: { num: string; label: string; title: string };
  principles: [string, string][];
  footerStamp: { eyebrow: string; line: string };
}

export default function StudioPage() {
  const c = (getContent().pages.studio as unknown) as StudioContent;

  return (
    <>
      <section style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="hero-dark" style={{ maxWidth: '1320px', margin: '0 auto', padding: '64px 32px' }}>
          <div className="gap-12 mb-8" style={{ alignItems: 'center' }}>
            {c.hero.tags.map((t) => (
              <span key={t.label} className={`tag${t.variant === 'accent' ? ' accent' : ''}`} style={{ background: 'transparent' }}>{t.label}</span>
            ))}
            <span className="mono" style={{ fontSize: '11px', color: 'var(--ink-4)', marginLeft: 'auto', letterSpacing: '0.1em' }}>{c.hero.fig}</span>
          </div>
          <h1 className="h-display" style={{ maxWidth: '20ch', color: 'var(--paper)' }}>{c.hero.title}</h1>
        </div>
        <Photo {...c.hero.photo} style={{ borderLeft: 'none', borderRight: 'none' }} />
      </section>

      <Telemetry items={c.telemetry.map(([k, v]) => [k, v] as [ReactNode, ReactNode])} />

      <section className="section">
        <div className="container">
          <p className="serif" style={{ fontSize: '32px', lineHeight: 1.4, letterSpacing: '-0.012em', maxWidth: '36ch' }}>{c.manifesto}</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <SectionHead num={c.projectsHead.num} label={c.projectsHead.label} title={c.projectsHead.title} />
          <div className="row row-2">
            {c.projects.map((p) => (
              <Link key={p.code} href={p.href} className="card" style={{ background: 'var(--paper-3)', cursor: 'pointer', display: 'block', color: 'inherit', textDecoration: 'none' }}>
                <div className="frame frame-cross" style={{ aspectRatio: '16/10', marginBottom: '24px' }}>
                  <span className="mono" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>[ {p.code} · STILL ]</span>
                </div>
                <div className="gap-12 mb-4" style={{ alignItems: 'baseline' }}>
                  <span className="mono" style={{ fontSize: '11px', color: 'var(--ink-3)', letterSpacing: '0.1em' }}>{p.code}</span>
                  <span className="tag accent">FORMING</span>
                  <span className="mono" style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.08em' }}>OPEN →</span>
                </div>
                <h3 className="h-3" style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 500, marginBottom: '14px' }}>{p.name}</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '20px' }}>{p.desc}</p>
                <div className="gap-wrap">
                  {p.meta.map((m) => <span key={m} className="tag">{m}</span>)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num={c.principlesHead.num} label={c.principlesHead.label} title={c.principlesHead.title} />
          <div className="row row-3 mt-8">
            {c.principles.map(([h, b]) => (
              <div key={h} className="card">
                <div className="eyebrow mb-4">{h}</div>
                <p style={{ fontSize: '14.5px', color: 'var(--ink-2)', lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', background: 'var(--paper-2)' }}>
        <span className="eyebrow">{c.footerStamp.eyebrow}</span>
        <p style={{ fontSize: '14px', color: 'var(--ink-3)', marginTop: '8px' }}>{c.footerStamp.line}</p>
      </section>
    </>
  );
}
