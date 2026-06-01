'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from './icons';
import { useContent } from '@/lib/content-provider';

export function Wordmark({ size = 18, withCrumb = null }: { size?: number; withCrumb?: string | null }) {
  const brand = useContent().common.brand;
  return (
    <Link href="/" className="nav-mark">
      <svg width={size + 4} height={size + 4} viewBox="0 0 28 28" aria-hidden="true">
        <g fill="currentColor">
          <path d="M5 7 L7 7 Q9 7 7.5 11 L4.5 19 L7 19 L11 11 Q12 7 10 7 L8 7 Z" />
          <path d="M10 7 L12 7 Q14 7 12.5 11 L9.5 19 Q9 20 10 20 L12 20 Q13 20 13.5 19 L16.5 11 Q18 7 16 7 L13 7 Z" opacity="0.85" />
          <path d="M16 7 L18 7 Q20 7 18.5 11 L14.5 20 L16.5 20 Q18 20 19 18.5 L23 11 Q24 7 22 7 Z" opacity="0.7" />
        </g>
      </svg>
      <span className="word">{brand}</span>
      {withCrumb && <span className="crumb">/ {withCrumb}</span>}
    </Link>
  );
}

export function Nav() {
  const nav = useContent().nav;
  const pathname = usePathname() || '/';
  const isDivisionDetail = ['/software', '/studio', '/industries'].includes(pathname);
  const activeKey = isDivisionDetail ? '/divisions' : pathname;
  const crumb =
    pathname === '/software' ? 'SOFTWARE' :
    pathname === '/studio' ? 'STUDIO' :
    pathname === '/industries' ? 'INDUSTRIES' :
    null;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const openCmdK = () => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true }));
  };

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Wordmark withCrumb={crumb} />
          <div className="nav-links">
            {nav.links.map((l) => (
              <Link key={l.href} href={l.href} className={activeKey === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
          </div>
          <span className="nav-grow" />
          <button className="nav-cmdk" onClick={openCmdK} aria-label="Open search">
            <Icon name="search" size={11} />
            <span>{nav.search}</span>
            <kbd>⌘K</kbd>
          </button>
          <Link href="/contact" className="nav-cta nav-cta-desktop">{nav.contact}</Link>
          <button
            className="nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={`burger-bar ${mobileOpen ? 'is-x1' : ''}`} />
            <span className={`burger-bar ${mobileOpen ? 'is-x2' : ''}`} />
            <span className={`burger-bar ${mobileOpen ? 'is-x3' : ''}`} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="nav-drawer" onClick={() => setMobileOpen(false)}>
          <nav className="nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
            {nav.links.map((l) => (
              <Link key={l.href} href={l.href} className={activeKey === l.href ? 'active' : ''}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className={activeKey === '/contact' ? 'active' : ''}>{nav.contact}</Link>
            <hr className="ghr" style={{ margin: '12px 0' }} />
            <button onClick={() => { setMobileOpen(false); openCmdK(); }} className="nav-drawer-search">
              <Icon name="search" size={12} />
              <span>{nav.search}</span>
              <kbd>⌘K</kbd>
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export function Footer() {
  const c = useContent();
  const f = c.footer;

  return (
    <footer className="foot">
      <div className="foot-inner">
        <div>
          <Link href="/" className="word">{c.common.brand}</Link>
          <p style={{ color: '#8c9098', fontSize: '13.5px', maxWidth: '300px', marginBottom: '20px' }}>
            {f.blurb}
          </p>
          <div className="gap-8" style={{ color: '#6b6e74' }}>
            <a href="#" aria-label="GitHub"><Icon name="github" /></a>
            <a href="#" aria-label="X"><Icon name="twitter" /></a>
            <a href="#" aria-label="Email"><Icon name="mail" /></a>
          </div>
        </div>
        {f.columns.map((col) => (
          <div key={col.heading}>
            <h4>{col.heading}</h4>
            {col.links.map((l) => (
              <Link key={l.label + l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="foot-strip">
        <span>{c.common.footerCopyright}</span>
        <span>{c.common.footerEst}</span>
        <span>{c.common.footerStatus}</span>
      </div>
    </footer>
  );
}
