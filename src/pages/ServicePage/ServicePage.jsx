import { useParams, Navigate } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import FeaturesGrid from '@/components/services/FeaturesGrid';
import SportExamples from '@/components/services/SportExamples';
import CTABanner from '@/components/home/CTABanner';
import servicesData from '@/data/services.json';

const ServicePage = () => {
    const { serviceSlug } = useParams();
    const service = servicesData.find(s => s.id === serviceSlug);

    // If slug doesn't match any service, show 404 (handled by Router or Redirect)
    // Here we can return Navigate to 404
    if (!service) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <PageHero
                title={service.title}
                subtitle={service.shortDescription}
                bgImage={service.heroImage}
            />

            {/* Intro / Description Section could go here if fullDescription > 100 words */}
            {/* But FeaturesGrid usually covers "Why Choose This" */}

            <FeaturesGrid features={service.features} />

            <SportExamples examples={service.sportExamples} />

            <ProcessTimeline steps={service.process} />

            <CTABanner />
        </>
    );
};

export default ServicePage;
