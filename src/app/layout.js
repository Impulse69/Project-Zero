import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--sp-font-body',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--sp-font-display',
  display: 'swap',
});

export const metadata = {
  title: 'Sports Panorama — Elevating Brands Through Sport',
  description:
    'Premium sports marketing and branding solutions. 3D advertising, instadia branding, and strategic consulting across cricket, football, rugby, and motor racing.',
  keywords: ['sports marketing', 'branding', 'advertising', '3D sports', 'sports panorama'],
  openGraph: {
    title: 'Sports Panorama — Elevating Brands Through Sport',
    description: 'Premium sports marketing and branding solutions.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
