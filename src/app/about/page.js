import { AboutHero } from '@/components/about/AboutHero';
import { Timeline } from '@/components/about/Timeline';
import { ValuesGrid } from '@/components/about/ValuesGrid';
import { TeamGrid } from '@/components/about/TeamGrid';
import { StatsBar } from '@/components/about/StatsBar';
import { AboutCta } from '@/components/about/AboutCta';
import styles from './about.module.css';

export const metadata = {
    title: 'About Us — Sports Panorama',
    description: 'Pioneering sports marketing excellence since 2020. Meet our team and learn our story.',
};

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <AboutHero />
            <Timeline />
            <ValuesGrid />
            <TeamGrid />
            <StatsBar />
            <AboutCta />
        </div>
    );
}
