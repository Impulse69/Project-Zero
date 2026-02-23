import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import styles from './PortfolioHighlights.module.css';

export default function PortfolioHighlights() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    eyebrow="Case Studies"
                    title="Impactful Work"
                    lead="A showcase of how we've helped brands redefine their presence in the world's most competitive arenas."
                />

                <div className={styles.portfolioGrid}>
                    {[
                        { title: 'Heineken Champions League Final', cat: 'Instadia Branding', sport: 'Football', img: '/assets/images/football.png' },
                        { title: 'Rolex at Wimbledon Grand Slam', cat: '3D Advertising', sport: 'Tennis', img: '/assets/images/tennis.png' },
                        { title: 'Guinness Six Nations Strategy', cat: 'Brand Strategy', sport: 'Rugby', img: '/assets/images/rugby.png' },
                        { title: 'Red Bull Racing Trackside', cat: 'Integrated Marketing', sport: 'Motor Racing', img: '/assets/images/racing.png' },
                    ].map(p => (
                        <div key={p.title} className={styles.portfolioCard}>
                            <div
                                className={styles.portfolioThumb}
                                style={{
                                    backgroundImage: `url(${p.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <span className={styles.portfolioSportTag}>{p.sport}</span>
                            </div>
                            <div className={styles.portfolioBody}>
                                <p className={styles.portfolioCat}>{p.cat}</p>
                                <h3 className={styles.portfolioTitle}>{p.title}</h3>
                                <Link href="/portfolio" className={styles.portfolioLink}>View Case Study →</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.centred}>
                    <Button href="/portfolio" variant="outline">View All Projects</Button>
                </div>
            </div>
        </section>
    );
}
