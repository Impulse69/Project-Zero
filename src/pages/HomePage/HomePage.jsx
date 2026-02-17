import { useDocumentTitle } from '@hooks/useDocumentTitle';
import HeroSection from '@components/home/HeroSection';
import ServicesOverview from '@components/home/ServicesOverview';
import AboutSnapshot from '@components/home/AboutSnapshot';
import SportsCategories from '@components/home/SportsCategories';
import PortfolioHighlights from '@components/home/PortfolioHighlights';
import Testimonials from '@components/home/Testimonials';
import CTABanner from '@components/home/CTABanner';
import PartnersMarquee from '@components/home/PartnersMarquee';

const HomePage = () => {
    useDocumentTitle('Home');

    return (
        <>
            <HeroSection />
            <ServicesOverview />
            <AboutSnapshot />
            <SportsCategories />
            <PortfolioHighlights />
            <Testimonials />
            <CTABanner />
            <PartnersMarquee />
        </>
    );
};

export default HomePage;
