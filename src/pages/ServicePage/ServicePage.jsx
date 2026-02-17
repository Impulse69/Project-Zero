import { useParams, Navigate } from 'react-router-dom';
import { useDocumentTitle } from '@hooks/useDocumentTitle';
import services from '@data/services.json';
import styles from './ServicePage.module.css';

const ServicePage = () => {
    const { serviceSlug } = useParams();
    const service = services.find(s => s.id === serviceSlug);

    useDocumentTitle(service?.title || 'Service');

    if (!service) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className={styles.page}>
            <div className="container">
                <h1>{service.title}</h1>
                <p>{service.fullDescription}</p>
            </div>
        </div>
    );
};

export default ServicePage;
