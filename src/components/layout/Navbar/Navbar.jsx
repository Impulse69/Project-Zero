import { Link } from 'react-router-dom';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { SCROLL } from '@utils/constants';
import navigation from '@data/navigation.json';
import styles from './Navbar.module.css';

const Navbar = () => {
    const scrollY = useScrollPosition();
    const isSolid = scrollY > SCROLL.navbarSolidThreshold;

    return (
        <nav className={`${styles.navbar} ${isSolid ? styles.solid : ''}`}>
            <div className="container">
                <div className={styles.content}>
                    <Link to="/" className={styles.logo}>
                        Sports Panorama
                    </Link>

                    <div className={styles.nav}>
                        {navigation.mainNav.map(item => (
                            <Link key={item.to} to={item.to} className={styles.navLink}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
