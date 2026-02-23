import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} ${styles.footerGrid}`}>
                <div className={styles.footerBrand}>
                    <p className={styles.footerLogo}><em>Sports</em> Panorama</p>
                    <p className={styles.footerTagline}>Elevating global sports brands through premium advertising and strategic market positioning.</p>
                </div>

                <div className={styles.footerCol}>
                    <h4 className={styles.footerHeading}>Services</h4>
                    <Link href="/services/3d-advertising" className={styles.footerLink}>3D Advertising</Link>
                    <Link href="/services/instadia" className={styles.footerLink}>Instadia Branding</Link>
                    <Link href="/services/brand-strategy" className={styles.footerLink}>Brand Strategy</Link>
                </div>

                <div className={styles.footerCol}>
                    <h4 className={styles.footerHeading}>Company</h4>
                    <Link href="/about" className={styles.footerLink}>About Us</Link>
                    <Link href="/portfolio" className={styles.footerLink}>Case Studies</Link>
                    <Link href="/contact" className={styles.footerLink}>Contact</Link>
                </div>

                <div className={styles.footerCol}>
                    <h4 className={styles.footerHeading}>Office</h4>
                    <p className={styles.footerAddr}>London HQ<br />42 Arena Street, WC1E 7EB<br />United Kingdom</p>
                    <a href="mailto:hello@sportspanorama.com" className={styles.footerLink}>hello@sportspanorama.com</a>
                </div>
            </div>

            <div className={`${styles.container} ${styles.footerBottom}`}>
                <span>© 2026 Sports Panorama. All rights reserved.</span>
                <div className={styles.footerLegal}>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
