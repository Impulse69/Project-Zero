import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
import { ProjectsGrid } from '@/components/portfolio/ProjectsGrid';
import { FeaturedCaseStudy } from '@/components/portfolio/FeaturedCaseStudy';
import { PortfolioCta } from '@/components/portfolio/PortfolioCta';
import styles from './portfolio.module.css';

export const metadata = {
    title: 'Portfolio — Sports Panorama',
    description: 'Explore our case studies across 3D advertising, instadia branding, and brand strategy in cricket, football, rugby, and motor racing.',
};

export default function PortfolioPage() {
    return (
        <main className={styles.main}>
            <PortfolioHero />
            <ProjectsGrid />
            <FeaturedCaseStudy />
            <PortfolioCta />
        </main>
    );
}
