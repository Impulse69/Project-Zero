import styles from './TrustBar.module.css';

export default function TrustBar() {
    return (
        <div className={styles.trustBar}>
            <p className={styles.trustLabel}>Trusted by world-class organisations</p>
            <div className={styles.trustLogos}>
                {['Emirates', 'Heineken', 'Rolex', 'Red Bull', 'Mastercard', 'Aramco'].map(n => (
                    <span key={n} className={styles.trustLogo}>{n}</span>
                ))}
            </div>
        </div>
    );
}
