import { Button } from '@/components/common/Button';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
    return (
        <section className={styles.ctaBanner}>
            <div className={styles.container}>
                <p className={styles.ctaEyebrow}>Work With Us</p>
                <h2 className={styles.ctaTitle}>Ready to Elevate Your Brand?</h2>
                <p className={styles.ctaSub}>
                    Join the ranks of elite sports organisations and redefine how the world sees your brand.
                    Let's build something extraordinary together.
                </p>
                <Button href="/contact" variant="white">Contact Us Today</Button>
            </div>
        </section>
    );
}
