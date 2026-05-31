import type { ReactNode } from 'react';
import Link from 'next/link';
import { Photo, Telemetry, SectionHead } from '../_components/lib';
import { getContent, type Tone } from '@/lib/content';

interface Studio02 {
  backLabel: string;
  tags: { label: string; variant: string }[];
  subFig: string;
  title: string;
  photo: { tone: Tone; ratio: string; caption: string; label: string };
  telemetry: [string, string][];
  premise: string[];
  shortsHead: { num: string; label: string; title: string; sub: string };
  shorts: [string, string, string][];
  formatHead: { num: string; label: string; title: string };
  format: [string, string][];
  timelineEyebrow: string;
  timeline: [string, string, string][];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaHref: string;
  ctaLabel: string;
}

export default function Studio02Page() {
  const c = (getContent().pages.studio02 as unknown) as Studio02;

  return (
    <>
      <section style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="hero-dark" style={{ maxWidth: '1320px', margin: '0 auto', padding: '64px 32px' }}>
          <div className="gap-12 mb-8" style={{ alignItems: 'center' }}>
            <Link href="/studio" className="mono" style={{ fontSize: '11px', color: 'var(--ink-4)', letterSpacing: '0.1em' }}>{c.backLabel}</Link>
            {c.tags.map((t) => (
              <span key={t.label} className={`tag${t.variant === 'accent' ? ' accent' : ''}`} style={{ background: 'transparent' }}>{t.label}</span>
            ))}
            <span className="mono" style={{ fontSize: '11px', color: 'var(--ink-4)', marginLeft: 'auto', letterSpacing: '0.1em' }}>{c.subFig}</span>
          </div>
          <h1 className="h-display" style={{ maxWidth: '20ch', color: 'var(--paper)' }}>{c.title}</h1>
        </div>
        <Photo {...c.photo} style={{ borderLeft: 'none', borderRight: 'none' }} />
      </section>

      <Telemetry items={c.telemetry.map(([k, v]) => [k, v] as [ReactNode, ReactNode])} />

      <section className="section">
        <div className="container-narrow">
          <p className="serif" style={{ fontSize: '28px', lineHeight: 1.5, letterSpacing: '-0.012em' }}>{c.premise[0]}</p>
          <p className="mt-8" style={{ color: 'var(--ink-2)', lineHeight: 1.7 }}>{c.premise[1]}</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <SectionHead num={c.shortsHead.num} label={c.shortsHead.label} title={c.shortsHead.title} sub={c.shortsHead.sub} />
          <div className="row row-3">
            {c.shorts.map(([n, t, d]) => (
              <article key={n} className="card">
                <div className="mono mb-2" style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.12em' }}>SHORT {n}</div>
                <h3 className="serif mb-4" style={{ fontSize: '22px', lineHeight: 1.3 }}>{t}</h3>
                <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.6 }}>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead num={c.formatHead.num} label={c.formatHead.label} title={c.formatHead.title} />
          <div className="row row-2 mt-8">
            {c.format.map(([h, b]) => (
              <article key={h} className="card">
                <div className="eyebrow mb-4">{h}</div>
                <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'var(--ink-2)' }}>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: '#6b7280' }}>{c.timelineEyebrow}</span>
          <ol style={{ listStyle: 'none', padding: 0, marginTop: '32px' }}>
            {c.timeline.map(([when, what, status], i, a) => (
              <li
                key={i}
                className="timeline-grid"
                style={{
                  display: 'grid', gridTemplateColumns: '180px 1fr 140px', gap: '32px',
                  padding: '20px 0', borderTop: '1px solid #2a2e36',
                  ...(i === a.length - 1 ? { borderBottom: '1px solid #2a2e36' } : {}),
                }}
              >
                <span className="mono" style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em' }}>{when}</span>
                <span className="serif" style={{ fontSize: '18px', color: 'var(--paper)', lineHeight: 1.5 }}>{what}</span>
                <span className="mono" style={{ fontSize: '10.5px', color: 'var(--ink-5)', letterSpacing: '0.1em', textAlign: 'right' }}>{status}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="eyebrow">{c.ctaEyebrow}</span>
          <h2 className="h-1 mt-4 mb-6">{c.ctaTitle}</h2>
          <Link href={c.ctaHref} className="btn solid">{c.ctaLabel} <span className="arr">→</span></Link>
        </div>
      </section>
    </>
  );
}
