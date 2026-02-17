import PageHero from '@/components/layout/PageHero';
import CompanyStory from '@/components/about/CompanyStory';
import TeamGrid from '@/components/about/TeamGrid';
import ValuesSection from '@/components/about/ValuesSection';
import CTABanner from '@/components/home/CTABanner';

const AboutPage = () => {
    return (
        <>
            <PageHero
                title="About Us"
                subtitle="We connect brands with fans through the power of sport."
                bgImage="" // Can add a specific about-hero image here
            />
            <CompanyStory />
            <ValuesSection />
            <TeamGrid />
            <CTABanner />
        </>
    );
};

export default AboutPage;
