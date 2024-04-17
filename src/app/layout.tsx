import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';
import STRINGS from '@/lib/strings';

const inter = Inter({ subsets: ['latin'] });

const open_sans = Open_Sans({ subsets: ['latin', 'vietnamese'] });

export const metadata: Metadata = {
  title: STRINGS.appName,

  description: 'a place to manage them all',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon?png" type="image/png" sizes="any" />
        <link rel="icon" href="/icon?png" type="image/png" sizes="32x32" />
      </head>
      {/* <body className={`${inter.className}`}>{children}</body> */}
      <body className={`${open_sans.className} ${inter.className}`}>{children}</body>
    </html>
  );
}
