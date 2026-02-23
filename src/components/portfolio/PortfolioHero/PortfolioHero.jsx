import Link from 'next/link';
import styles from './PortfolioHero.module.css';

export default function PortfolioHero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <p className={styles.breadcrumb}><Link href="/">Home</Link> / Portfolio</p>
                <h1 className={styles.heroTitle}>Our <span className={styles.heroAccent}>Work</span></h1>
                <p className={styles.heroSub}>Proven results across global sporting events and iconic brand campaigns.</p>
            </div>
            <div className={styles.heroBgShape} />
        </section>
    );
}
