import Link from 'next/link';
import styles from './AboutHero.module.css';

export default function AboutHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <p className={styles.breadcrumb}><Link href="/">Home</Link> / About Us</p>
                <h1 className={styles.heroTitle}>
                    Pioneering Sports Marketing<br />
                    <span className={styles.heroAccent}>Since 2020</span>
                </h1>
                <p className={styles.heroSub}>
                    Driven by passion, innovation, and a relentless commitment to elevating brands through the power of sport.
                </p>
            </div>
            <div className={styles.heroBg} />
        </section>
    );
}
