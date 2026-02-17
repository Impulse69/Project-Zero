import { useDocumentTitle } from '@hooks/useDocumentTitle';
import styles from './PortfolioPage.module.css';

const PortfolioPage = () => {
    useDocumentTitle('Portfolio');

    return (
        <div className={styles.page}>
            <div className="container">
                <h1>Our Portfolio</h1>
                <p>Explore our case studies and success stories.</p>
            </div>
        </div>
    );
};

export default PortfolioPage;
