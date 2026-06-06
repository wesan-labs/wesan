import type { CSSProperties, ReactNode } from 'react';

type IconName = keyof typeof ICONS;

interface IconProps {
  name: IconName;
  size?: number;
  sw?: number;
  style?: CSSProperties;
}

export function Icon({ name, size = 16, sw = 1.5, style }: IconProps) {
  const p = ICONS[name];
  if (!p) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, ...style }}
    >
      {p}
    </svg>
  );
}

const ICONS = {
  arr_r: (<><path d="M3 8h10M9 4l4 4-4 4" /></>) as ReactNode,
  arr_l: (<><path d="M13 8H3M7 4 3 8l4 4" /></>) as ReactNode,
  arr_up: (<><path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" /></>) as ReactNode,
  arr_dr: (<><path d="M5 11L11 5M5 5h6v6" /></>) as ReactNode,
  chev_r: (<><path d="M6 3l4 5-4 5" /></>) as ReactNode,
  chev_d: (<><path d="M3 6l5 4 5-4" /></>) as ReactNode,
  chev_u: (<><path d="M3 10l5-4 5 4" /></>) as ReactNode,
  plus: (<><path d="M8 3v10M3 8h10" /></>) as ReactNode,
  close: (<><path d="M4 4l8 8M12 4l-8 8" /></>) as ReactNode,
  check: (<><path d="M3 8.5l3 3 7-7" /></>) as ReactNode,
  search: (<><circle cx="7" cy="7" r="4.5" /><path d="M10.5 10.5l3 3" /></>) as ReactNode,
  ext: (<><path d="M6 3H3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V10" /><path d="M9 2.5h4v4M13 2.5L7 8.5" /></>) as ReactNode,
  mail: (<><rect x="2" y="3.5" width="12" height="9" rx="0.5" /><path d="M2.5 4l5.5 4 5.5-4" /></>) as ReactNode,
  github: (<><path d="M8 1.5a6.5 6.5 0 0 0-2 12.7c.3.05.45-.15.45-.3v-1.1c-1.8.4-2.2-.87-2.2-.87-.3-.75-.7-.95-.7-.95-.6-.4 0-.4 0-.4.65.05 1 .65 1 .65.6 1 1.5.7 1.85.55.05-.4.2-.7.4-.85-1.4-.15-2.9-.7-2.9-3.15 0-.7.25-1.27.65-1.7-.05-.15-.3-.8.05-1.65 0 0 .55-.15 1.7.65a6 6 0 0 1 3.1 0c1.15-.8 1.7-.65 1.7-.65.35.85.1 1.5.05 1.65.4.43.65 1 .65 1.7 0 2.45-1.5 3-2.9 3.15.2.2.4.55.4 1.1v1.65c0 .15.15.35.45.3A6.5 6.5 0 0 0 8 1.5z" /></>) as ReactNode,
  twitter: (<><path d="M2 2l5.5 7.5L2 14h2l4.5-4 3 4h3l-5.5-7.5L14 2h-2L8 5.5 5 2z" /></>) as ReactNode,
  linkedin: (<><rect x="2" y="2" width="12" height="12" rx="1.5" /><path d="M5 7v4" /><path d="M5 5h.01" /><path d="M8 11V7" /><path d="M8 8.5c0-1 3-1.5 3 .5V11" /></>) as ReactNode,
} as const;
