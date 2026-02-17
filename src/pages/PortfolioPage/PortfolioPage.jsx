import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import ProjectCard from '@/components/portfolio/ProjectCard';
import ProjectFilter from '@/components/portfolio/ProjectFilter';
import CTABanner from '@/components/home/CTABanner';
import portfolioData from '@/data/portfolio.json';

const PortfolioPage = () => {
    const [filter, setFilter] = useState('all');

    // Extract unique categories from data
    const categories = [...new Set(portfolioData.map(item => item.category))];

    const filteredProjects = filter === 'all'
        ? portfolioData
        : portfolioData.filter(project => project.category === filter);

    return (
        <>
            <PageHero
                title="Our Portfolio"
                subtitle="A showcase of our most impactful work in the world of sports."
            />

            <Section padding="lg">
                <Container>
                    <ProjectFilter
                        activeFilter={filter}
                        setFilter={setFilter}
                        categories={categories}
                    />

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <p className="text-xl text-gray-500">No projects found in this category.</p>
                        </motion.div>
                    )}

                </Container>
            </Section>


        </>
    );
};

export default PortfolioPage;
