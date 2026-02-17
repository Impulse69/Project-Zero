import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import CTABanner from '@/components/home/CTABanner';
import portfolioData from '@/data/portfolio.json';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const PortfolioDetailPage = () => {
    const { slug } = useParams();
    const project = portfolioData.find(p => p.slug === slug);

    if (!project) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <PageHero
                title={project.title}
                subtitle={project.shortDescription}
                bgImage={project.heroImage}
            />

            <Section padding="lg">
                <Container>
                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.challenge}
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>

                    {/* Results */}
                    <div className="mb-20">
                        <SectionHeading
                            badge="Impact"
                            title="Key Results"
                            align="center"
                            className="mb-10"
                        />
                        <div className="grid md:grid-cols-3 gap-6">
                            {project.results.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="bg-primary/10 border-primary/20">
                                        <CardContent className="p-6 flex items-start gap-4">
                                            <CheckCircle2 className="text-primary shrink-0 mt-1" />
                                            <p className="text-white font-medium text-lg">{result}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <SectionHeading
                            badge="Gallery"
                            title="Project Visuals"
                            align="center"
                            className="mb-10"
                        />
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.gallery.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="rounded-xl overflow-hidden aspect-video relative group"
                                >
                                    <div className="absolute inset-0 bg-muted animate-pulse" /> {/* Placeholder */}
                                    <img
                                        src={img}
                                        alt={`${project.title} gallery ${index + 1}`}
                                        className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.previousSibling.style.display = 'block'; // Show placeholder
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </Container>
            </Section>

            <CTABanner />
        </>
    );
};

export default PortfolioDetailPage;
