import PageHero from '@/components/layout/PageHero';
import CompanyStory from '@/components/about/CompanyStory';
import TeamGrid from '@/components/about/TeamGrid';
import ValuesSection from '@/components/about/ValuesSection';
import CTABanner from '@/components/home/CTABanner';

const AboutPage = () => {
    return (
        <>
            <PageHero
                title="Our Mission"
                subtitle="From the streets of Accra to the world stage, we are redefining African sports media."
                bgImage="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2000"
            />
            <CompanyStory />
            <ValuesSection />
            <TeamGrid />
            <CTABanner />
        </>
    );
};

export default AboutPage;
