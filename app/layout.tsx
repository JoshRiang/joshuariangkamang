import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap', weight: ['300', '400', '500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  title: 'joshua.riangkamang — ~/portfolio',
  description: 'Quantitative researcher and software engineer. Working on systematic trading systems.',
  openGraph: {
    title: 'Joshua Riangkamang',
    description: 'Quant researcher · software engineer · photographer',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${inter.variable}`}>
      <body className="font-mono">{children}</body>
    </html>
  );
}
