import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import CTABanner from '@/components/home/CTABanner';

const ContactPage = () => {
    return (
        <>
            <PageHero
                title="Contact Us"
                subtitle="Let's discuss how we can elevate your brand."
                bgImage="/assets/images/contact-hero.webp"
            />

            <Section padding="lg">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column: Form */}
                        <div>
                            <ContactForm />
                        </div>

                        {/* Right Column: Info */}
                        <div>
                            <ContactInfo />
                        </div>
                    </div>
                </Container>
            </Section>

            <CTABanner
                title="Ready to get started?"
                subtitle="Our team is standing by to help you achieve your goals."
                buttonText="Get in Touch"
                buttonLink="/contact" // Scrolls to top or just redundant
            />
        </>
    );
};

export default ContactPage;
