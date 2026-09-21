import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joshua Riangkamang — quant researcher & software engineer',
  description:
    'Student in Indonesia building open-source tools for systematic trading: backtest engines, position sizing, market-data infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
