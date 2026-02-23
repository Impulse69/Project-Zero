import { Button } from '@/components/common/Button';
import styles from './AboutCta.module.css';

export default function AboutCta() {
    return (
        <section className={styles.cta}>
            <div className={styles.container}>
                <h2 className={styles.ctaTitle}>Join Our Journey</h2>
                <p className={styles.ctaSub}>
                    Whether you're a brand seeking global visibility or an event seeking premium advertising —
                    let's win together.
                </p>
                <Button href="/contact" variant="white">Get in Touch</Button>
            </div>
        </section>
    );
}
