import { SectionHeading } from '@/components/common/SectionHeading';
import styles from './Timeline.module.css';

const timeline = [
    { year: '2020', title: 'Agency Inception', desc: 'Founded to reimagine how global brands like Heineken connect with sports fans digitally.' },
    { year: '2021', title: 'Premier League Partnership', desc: 'Secured our first Tier-1 football deal, setting new benchmarks for Emirates instadia branding.' },
    { year: '2022', title: 'Global Expansion', desc: 'Opened London and Tokyo offices to serve an international roster including Rolex and Mastercard.' },
    { year: '2023', title: '3D Advertising Launch', desc: 'Pioneered virtual perimeter advertising for Red Bull Racing, seen by 200M+ viewers.' },
    { year: '2024', title: 'Aramco & Guinness Series', desc: 'Reached 50+ active global partnerships spanning cricket, football, rugby, and motorsport.' },
];

export default function Timeline() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    eyebrow="Our Journey"
                    title="Our Story"
                />
                <div className={styles.timeline}>
                    <div className={styles.timelineLine} />
                    {timeline.map((t, i) => (
                        <div key={t.year} className={`${styles.timelineRow} ${i % 2 === 0 ? styles.rowLeft : styles.rowRight}`}>
                            <div className={styles.timelineCard}>
                                <span className={styles.timelineYear}>{t.year}</span>
                                <h3 className={styles.timelineHead}>{t.title}</h3>
                                <p className={styles.timelineDesc}>{t.desc}</p>
                            </div>
                            <div className={styles.timelineDot} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
