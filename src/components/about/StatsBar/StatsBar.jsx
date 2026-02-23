import styles from './StatsBar.module.css';

export default function StatsBar() {
    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                <div className={styles.statsGrid}>
                    {[
                        { n: '5+', l: 'Years of Experience', c: '#6c63ff' },
                        { n: '50+', l: 'Satisfied Clients', c: '#00d4aa' },
                        { n: '4', l: 'Sports Disciplines', c: '#ff6b6b' },
                        { n: '10+', l: 'Global Markets', c: '#4a42d4' },
                    ].map(s => (
                        <div key={s.l} className={styles.statItem}>
                            <span className={styles.statNum} style={{ color: s.c }}>{s.n}</span>
                            <span className={styles.statLabel}>{s.l}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
