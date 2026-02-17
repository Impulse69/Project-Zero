import { useDocumentTitle } from '@hooks/useDocumentTitle';
import styles from './HomePage.module.css';

const HomePage = () => {
    useDocumentTitle('Home');

    return (
        <div className={styles.page}>
            <div className="container">
                <section className={styles.hero}>
                    <h1>Welcome to Sports Panorama</h1>
                    <p>Elevating Brands Through Sport</p>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
