import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '@components/common/SectionHeading';
import sports from '@data/sports.json';

const sportColors = {
    cricket: '#4ecdc4',
    football: '#45b7d1',
    rugby: '#f7dc6f',
    motorsport: '#ff6b6b',
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

const SportsCategories = () => {
    return (
        <section className="py-20 md:py-28" style={{ background: 'var(--sp-bg-primary)' }}>
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Sports We Cover"
                    subtitle="Four major sports, one mission — to connect your brand with the most passionate audiences on the planet."
                />

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {sports.map((sport) => {
                        const accentColor = sportColors[sport.id] || '#6c63ff';
                        return (
                            <motion.div key={sport.id} variants={cardVariants}>
                                <Link
                                    to={`/sports/${sport.slug}`}
                                    className="block group"
                                >
                                    <div
                                        className="relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
                                        style={{
                                            background: `linear-gradient(160deg, ${accentColor}15 0%, var(--sp-bg-secondary) 40%, var(--sp-bg-tertiary) 100%)`,
                                            border: '1px solid var(--sp-border-subtle)',
                                        }}
                                    >
                                        {/* Glow effect on hover */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: `radial-gradient(circle at 50% 50%, ${accentColor}20 0%, transparent 70%)`,
                                            }}
                                        />

                                        {/* Icon */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                            <span className="text-6xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                                                {sport.icon}
                                            </span>
                                            <h3
                                                className="text-xl font-bold mb-3 transition-colors duration-300"
                                                style={{
                                                    fontFamily: 'var(--sp-font-display)',
                                                    color: 'var(--sp-text-primary)',
                                                }}
                                            >
                                                {sport.name}
                                            </h3>
                                            <p
                                                className="text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                                                style={{ color: 'var(--sp-text-secondary)' }}
                                            >
                                                {sport.description.substring(0, 100)}...
                                            </p>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div
                                            className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                            style={{ background: accentColor }}
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SportsCategories;
