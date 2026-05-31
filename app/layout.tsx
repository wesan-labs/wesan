import type { Metadata } from 'next';
import { Inter, Inter_Tight, Newsreader, JetBrains_Mono } from 'next/font/google';
import { Nav, Footer } from './_components/shared';
import { DraftingFrame } from './_components/lib';
import { CommandPalette } from './_components/cmdk';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const interTight = Inter_Tight({ variable: '--font-inter-tight', subsets: ['latin'] });
const newsreader = Newsreader({ variable: '--font-newsreader', subsets: ['latin'], style: ['normal', 'italic'] });
const jetbrainsMono = JetBrains_Mono({ variable: '--font-jetbrains-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wesan',
  description: 'The house under which the next century is built. Wesan — software, studio, industries.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body>
        <DraftingFrame />
        <CommandPalette />
        <Nav />
        <main style={{ animation: 'fadeIn 0.4s ease forwards' }}>{children}</main>
        <Footer />
        <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }`}</style>
      </body>
    </html>
  );
}
