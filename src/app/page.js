import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { SportsCategories } from '@/components/home/SportsCategories';
import { PortfolioHighlights } from '@/components/home/PortfolioHighlights';
import { CtaBanner } from '@/components/home/CtaBanner';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <SportsCategories />
      <PortfolioHighlights />
      <CtaBanner />
    </div>
  );
}
