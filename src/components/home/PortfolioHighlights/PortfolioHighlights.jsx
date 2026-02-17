import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@components/common/SectionHeading';
import portfolio from '@data/portfolio.json';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const categoryColors = {
    football: '#45b7d1',
    cricket: '#4ecdc4',
    rugby: '#f7dc6f',
    motorsport: '#ff6b6b',
};

const PortfolioHighlights = () => {
    const featuredProjects = portfolio.filter((p) => p.featured);

    return (
        <section
            className="py-20 md:py-28"
            style={{ background: 'var(--sp-bg-secondary)' }}
        >
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Our Work"
                    subtitle="Case studies from our most impactful campaigns across the world of sport."
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {featuredProjects.map((project) => (
                        <motion.div key={project.id} variants={cardVariants}>
                            <Link
                                to={`/portfolio/${project.slug}`}
                                className="block group"
                            >
                                <div
                                    className="rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1"
                                    style={{
                                        background: 'var(--sp-bg-tertiary)',
                                        border: '1px solid var(--sp-border-subtle)',
                                    }}
                                >
                                    {/* Thumbnail */}
                                    <div
                                        className="aspect-[16/10] relative overflow-hidden"
                                        style={{
                                            background: `linear-gradient(135deg, ${categoryColors[project.category] || '#6c63ff'}25 0%, var(--sp-bg-secondary) 100%)`,
                                        }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-4xl opacity-30">
                                                {project.category === 'football' ? '⚽' :
                                                    project.category === 'cricket' ? '🏏' :
                                                        project.category === 'rugby' ? '🏉' : '🏎️'}
                                            </span>
                                        </div>

                                        {/* Overlay on hover */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                            style={{ background: 'rgba(10, 10, 15, 0.7)' }}
                                        >
                                            <span
                                                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full"
                                                style={{
                                                    background: 'var(--sp-gradient-primary)',
                                                    color: '#fff',
                                                }}
                                            >
                                                View Case Study <FiArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge
                                                variant="outline"
                                                className="text-xs capitalize"
                                                style={{
                                                    borderColor: `${categoryColors[project.category] || '#6c63ff'}50`,
                                                    color: categoryColors[project.category] || '#6c63ff',
                                                }}
                                            >
                                                {project.category}
                                            </Badge>
                                        </div>
                                        <h3
                                            className="text-lg font-semibold mb-2 transition-colors duration-300"
                                            style={{
                                                fontFamily: 'var(--sp-font-display)',
                                                color: 'var(--sp-text-primary)',
                                            }}
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: 'var(--sp-text-secondary)' }}
                                        >
                                            {project.shortDescription}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All link */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                        style={{ color: 'var(--sp-color-primary)' }}
                    >
                        View All Projects <FiArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioHighlights;
