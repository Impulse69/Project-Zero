import styles from './page.module.css';
import HeroIllustration from '../components/HeroIllustration/HeroIllustration';

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.navbar}>
        <div className="container flex-between">
          <div className={styles.logo}>SP</div>
          <nav className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>About</a>
            <a href="#" className={styles.navLink}>Services</a>
            <a href="#" className={styles.navLink}>Portfolio</a>
            <a href="#" className={styles.navLink}>Contact</a>
          </nav>
          <button className={styles.ctaButton}>Get a Quote</button>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <HeroIllustration />
        </div>

        <div className={`${styles.heroContent} container`}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>Premium Sports Marketing</span>
          </div>

          <h1 className={styles.headline}>
            ELEVATING BRANDS<br />
            <span className={styles.headlineAccent}>THROUGH SPORT</span>
          </h1>

          <p className={styles.subheadline}>
            World-class 3D advertising, instadia branding, and strategic consulting across
            cricket, football, rugby, and motor racing.
          </p>

          <div className={styles.heroActions}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Explore Our Work
            </button>
            <button className={`${styles.btn} ${styles.btnGhost}`}>
              Get a Quote
            </button>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollArrow}>↓</span>
        </div>
      </section>

      {/* Placeholder for next sections */}
      <section className="section container">
        <div className="text-center">
          <h2 className="text-display mb-4">Our Core Services</h2>
          <p className="text-lead">Delivering impact where it matters most.</p>
        </div>
      </section>
    </main>
  );
}
