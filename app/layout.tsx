import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joshua Riangkamang — software engineer',
  description:
    'Engineering undergrad in Indonesia building open-source software: quant research tools, on-device AI, mobile apps, and hardware hacks.',
};

export const viewport: Viewport = {
  themeColor: '#fbfaf7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
