import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTarget, FiMonitor, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import SectionHeading from '@components/common/SectionHeading';
import services from '@data/services.json';

const iconMap = {
    FiTarget: FiTarget,
    FiMonitor: FiMonitor,
    FiTrendingUp: FiTrendingUp,
};

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

const ServicesOverview = () => {
    return (
        <section className="py-20 md:py-28" style={{ background: 'var(--sp-bg-primary)' }}>
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Our Services"
                    subtitle="We combine cutting-edge technology with creative strategy to deliver unforgettable brand experiences in the world of sport."
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {services.map((service) => {
                        const IconComponent = iconMap[service.icon] || FiTarget;
                        return (
                            <motion.div key={service.id} variants={cardVariants}>
                                <Link to={`/services/${service.id}`} className="block group h-full">
                                    <Card className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-transparent"
                                        style={{
                                            background: 'var(--sp-bg-secondary)',
                                            borderColor: 'var(--sp-border-subtle)',
                                        }}
                                    >
                                        {/* Gradient top border */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: 'var(--sp-gradient-primary)' }}
                                        />

                                        <CardHeader className="pb-4">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                                                style={{
                                                    background: 'var(--sp-gradient-card)',
                                                    border: '1px solid var(--sp-border-subtle)',
                                                }}
                                            >
                                                <IconComponent
                                                    size={26}
                                                    style={{ color: 'var(--sp-color-primary)' }}
                                                />
                                            </div>
                                            <CardTitle
                                                className="text-xl font-semibold mb-0"
                                                style={{
                                                    fontFamily: 'var(--sp-font-display)',
                                                    color: 'var(--sp-text-primary)',
                                                    fontSize: 'var(--sp-text-xl)',
                                                }}
                                            >
                                                {service.shortTitle}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent>
                                            <CardDescription
                                                className="text-sm mb-6"
                                                style={{ color: 'var(--sp-text-secondary)', fontSize: 'var(--sp-text-sm)' }}
                                            >
                                                {service.shortDescription}
                                            </CardDescription>
                                            <span
                                                className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                                                style={{ color: 'var(--sp-color-primary)' }}
                                            >
                                                Learn More <FiArrowRight size={16} />
                                            </span>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;
