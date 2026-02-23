import Link from 'next/link';
import { Button } from '@/components/common/Button';
import styles from './FeaturedCaseStudy.module.css';

const featured = {
    title: 'Heineken Champions League Final',
    client: 'Heineken',
    cat: 'Instadia Branding',
    sport: 'Football',
    img: '/assets/images/football.png',
};

export default function FeaturedCaseStudy() {
    return (
        <section className={`${styles.section} ${styles.sectionGray}`}>
            <div className="container">
                <div className={styles.featured}>
                    <div className={styles.featuredImg} style={{
                        backgroundImage: `url(${featured.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <span className={styles.featuredBadge}>Featured Project</span>
                    </div>
                    <div className={styles.featuredContent}>
                        <p className={styles.eyebrow}>{featured.cat}</p>
                        <h2 className={styles.featuredTitle}>{featured.title}</h2>
                        <p className={styles.featuredDesc}>
                            A full instadia digital transformation delivering a 340% increase in brand recall,
                            across 12 stadium venues and 8 million live viewers.
                        </p>
                        <div className={styles.featuredStats}>
                            <div className={styles.featuredStat}><span className={styles.featuredStatNum}>340%</span><span>Brand Recall</span></div>
                            <div className={styles.featuredStat}><span className={styles.featuredStatNum}>8M+</span><span>Live Viewers</span></div>
                            <div className={styles.featuredStat}><span className={styles.featuredStatNum}>12</span><span>Venues</span></div>
                        </div>
                        <Button href="/portfolio" variant="outline">Read Full Story</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
