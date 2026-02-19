import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <span className={styles.badge}>🚧 Under Construction</span>
        <h1 className={styles.title}>
          Sports <span className="text-gradient">Panorama</span>
        </h1>
        <p className={styles.subtitle}>Elevating Brands Through Sport</p>
        <div className={styles.tokenPreview}>
          <div className={styles.colorRow}>
            <div className={styles.swatch} style={{ background: 'var(--sp-color-primary)' }} title="Primary" />
            <div className={styles.swatch} style={{ background: 'var(--sp-color-primary-light)' }} title="Primary Light" />
            <div className={styles.swatch} style={{ background: 'var(--sp-color-secondary)' }} title="Secondary" />
            <div className={styles.swatch} style={{ background: 'var(--sp-color-accent)' }} title="Accent" />
          </div>
          <p className={styles.meta}>Design system active · Phase 1 complete</p>
        </div>
      </div>
    </main>
  );
}
