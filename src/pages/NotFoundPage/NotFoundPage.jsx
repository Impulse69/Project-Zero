import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    useDocumentTitle('404 - Page Not Found');

    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>404</h1>
                    <h2 className={styles.subtitle}>Page Not Found</h2>
                    <p className={styles.text}>
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className={styles.link}>
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
