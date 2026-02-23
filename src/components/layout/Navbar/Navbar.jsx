'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.navInner}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <span className={styles.logoMark}>SP</span>
                    <span className={styles.logoText}><em>Sports</em> Panorama</span>
                </Link>

                <button
                    className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                <nav className={`${styles.navContent} ${isMenuOpen ? styles.navContentOpen : ''}`}>
                    <div className={styles.navLinks}>
                        <Link href="/" onClick={closeMenu} className={`${styles.navLink} ${pathname === '/' ? styles.navLinkActive : ''}`}>Home</Link>
                        <Link href="/about" onClick={closeMenu} className={`${styles.navLink} ${pathname === '/about' ? styles.navLinkActive : ''}`}>About</Link>
                        <Link href="/portfolio" onClick={closeMenu} className={`${styles.navLink} ${pathname === '/portfolio' || pathname.startsWith('/portfolio/') ? styles.navLinkActive : ''}`}>Portfolio</Link>
                        <Link href="/contact" onClick={closeMenu} className={`${styles.navLink} ${pathname === '/contact' ? styles.navLinkActive : ''}`}>Contact</Link>
                    </div>

                    <Link href="/contact" onClick={closeMenu} className={styles.navCta}>Get a Quote</Link>
                </nav>
            </div>
        </header>
    );
}
