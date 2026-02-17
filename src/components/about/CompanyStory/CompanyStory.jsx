import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import aboutData from '@/data/about.json';
import { Quote } from 'lucide-react';

const CompanyStory = () => {
    const { mission, vision, story } = aboutData;

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.6 }
        })
    };

    return (
        <Section padding="lg">
            <Container size="md">
                <SectionHeading
                    badge="Our Story"
                    title="Redefining Sports Interaction"
                    subtitle="From a simple idea to a global platform connecting fans and brands."
                    align="center"
                    className="mb-12"
                />

                {/* Story Text */}
                <div className="prose prose-invert max-w-none mb-16 text-lg text-gray-300 leading-relaxed text-center">
                    {story.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="mb-6 last:mb-0"
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </div>

                {/* Mission & Vision Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-accent/10 border border-white/10 p-8 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Quote size={120} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{mission.title}</h3>
                        <p className="text-gray-400">{mission.content}</p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-accent/10 border border-white/10 p-8 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Quote size={120} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{vision.title}</h3>
                        <p className="text-gray-400">{vision.content}</p>
                    </motion.div>
                </div>

            </Container>
        </Section>
    );
};

export default CompanyStory;
