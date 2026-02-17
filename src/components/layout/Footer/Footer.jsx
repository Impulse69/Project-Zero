import { Link } from 'react-router-dom';
import { useSiteConfig } from '@context/SiteConfigContext';
import navigation from '@data/navigation.json';
import styles from './Footer.module.css';

const Footer = () => {
    const siteConfig = useSiteConfig();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3 className={styles.heading}>About</h3>
                        <p className={styles.text}>{siteConfig.description}</p>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.heading}>Quick Links</h3>
                        <div className={styles.links}>
                            {navigation.footerNav.quickLinks.map(link => (
                                <Link key={link.to} to={link.to} className={styles.link}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.heading}>Services</h3>
                        <div className={styles.links}>
                            {navigation.footerNav.services.map(link => (
                                <Link key={link.to} to={link.to} className={styles.link}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h3 className={styles.heading}>Contact</h3>
                        <p className={styles.text}>{siteConfig.email}</p>
                        <p className={styles.text}>{siteConfig.phone}</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} {siteConfig.companyName}. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
