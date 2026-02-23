import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Sports Panorama — Elevating Brands Through Sport',
  description:
    'Premium sports marketing and branding solutions. 3D advertising, instadia branding, and strategic consulting across cricket, football, rugby, and motor racing.',
  keywords: ['sports marketing', 'branding', '3D sports advertising', 'instadia', 'sports panorama'],
  openGraph: {
    title: 'Sports Panorama — Elevating Brands Through Sport',
    description: 'Premium sports marketing and branding solutions.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
