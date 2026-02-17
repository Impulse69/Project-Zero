import { useDocumentTitle } from '@hooks/useDocumentTitle';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    useDocumentTitle('About Us');

    return (
        <div className={styles.page}>
            <div className="container">
                <h1>About Sports Panorama</h1>
                <p>Learn more about our company and mission.</p>
            </div>
        </div>
    );
};

export default AboutPage;
