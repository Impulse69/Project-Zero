import { useDocumentTitle } from '@hooks/useDocumentTitle';
import styles from './ContactPage.module.css';

const ContactPage = () => {
    useDocumentTitle('Contact Us');

    return (
        <div className={styles.page}>
            <div className="container">
                <h1>Contact Us</h1>
                <p>Get in touch with our team.</p>
            </div>
        </div>
    );
};

export default ContactPage;
