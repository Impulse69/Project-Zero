import Link from 'next/link';
import { Button } from '@/components/common/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            {/* Background video */}
            <video
                className={styles.heroBgVideo}
                src="/assets/videos/Seedance 2.0.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <div className={styles.heroOverlay} />

            <div className={styles.heroContent}>
                <h1 className={styles.heroHeading}>
                    Elevating Brands<br />
                    <span className={styles.heroAccent}>Through Sport</span>
                </h1>

                <p className={styles.heroSub}>
                    World-class 3D advertising, instadia branding, and strategic consulting
                    across cricket, football, rugby, and motor racing.
                </p>

                <div className={styles.heroButtons}>
                    <Button href="/portfolio" variant="primary">Explore Our Work</Button>
                    <Button href="/contact" variant="ghost">Get a Quote →</Button>
                </div>

                <div className={styles.heroStats}>
                    {[
                        { n: '5+', l: 'Years' },
                        { n: '50+', l: 'Clients' },
                        { n: '4', l: 'Sports' },
                        { n: '120+', l: 'Campaigns' },
                    ].map(s => (
                        <div key={s.l} className={styles.heroStat}>
                            <strong>{s.n}</strong>
                            <span>{s.l}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.heroScrollHint}>scroll ↓</div>
        </section>
    );
}
