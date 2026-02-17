import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SiteConfigProvider } from '@context/SiteConfigContext';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollToTop from '@components/common/ScrollToTop';
import styles from './MainLayout.module.css';

const MainLayout = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return (
        <SiteConfigProvider>
            <div className={styles.layout}>
                <Navbar />
                <main className={styles.main}>
                    <Outlet />
                </main>
                <Footer />
                <ScrollToTop />
            </div>
        </SiteConfigProvider>
    );
};

export default MainLayout;

