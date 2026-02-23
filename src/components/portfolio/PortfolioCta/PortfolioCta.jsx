import { Button } from '@/components/common/Button';
import styles from './PortfolioCta.module.css';

export default function PortfolioCta() {
    return (
        <section className={styles.cta}>
            <div className="container">
                <h2 className={styles.ctaTitle}>Want to see your brand here?</h2>
                <p className={styles.ctaSub}>Let's build a campaign that moves the world.</p>
                <Button href="/contact" variant="white">Start Your Project</Button>
            </div>
        </section>
    );
}
