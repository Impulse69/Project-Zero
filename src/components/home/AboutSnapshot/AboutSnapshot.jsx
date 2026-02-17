import { motion } from 'framer-motion';
import AnimatedCounter from '@components/common/AnimatedCounter';
import siteConfig from '@data/siteConfig.json';

const AboutSnapshot = () => {
    return (
        <section
            className="py-20 md:py-28 relative overflow-hidden"
            style={{ background: 'var(--sp-bg-secondary)' }}
        >
            {/* Subtle decorative gradient */}
            <div
                className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 80% 50%, rgba(108, 99, 255, 0.08) 0%, transparent 60%)',
                }}
            />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image / Visual Side */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div
                            className="aspect-[4/3] rounded-2xl overflow-hidden relative"
                            style={{
                                background: `
                                    linear-gradient(135deg, rgba(108, 99, 255, 0.2) 0%, rgba(0, 212, 170, 0.15) 50%, rgba(255, 107, 107, 0.1) 100%)
                                `,
                                border: '1px solid var(--sp-border-subtle)',
                            }}
                        >
                            {/* Abstract sports pattern overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🏟️</div>
                                    <p
                                        className="text-sm font-medium uppercase tracking-widest"
                                        style={{ color: 'var(--sp-text-tertiary)' }}
                                    >
                                        Sports Marketing Excellence
                                    </p>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div
                                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl"
                                style={{
                                    background: 'var(--sp-gradient-primary)',
                                    opacity: 0.1,
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    >
                        <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                            style={{
                                background: 'rgba(108, 99, 255, 0.1)',
                                color: 'var(--sp-color-primary)',
                                border: '1px solid rgba(108, 99, 255, 0.2)',
                            }}
                        >
                            About Us
                        </span>

                        <h2
                            className="text-3xl md:text-4xl font-bold mb-6"
                            style={{
                                fontFamily: 'var(--sp-font-display)',
                                color: 'var(--sp-text-primary)',
                            }}
                        >
                            Premium Sports Marketing &{' '}
                            <span
                                style={{
                                    background: 'var(--sp-gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Branding Solutions
                            </span>
                        </h2>

                        <p
                            className="text-base md:text-lg mb-8 leading-relaxed"
                            style={{ color: 'var(--sp-text-secondary)' }}
                        >
                            {siteConfig.description} Since {siteConfig.founded}, we&apos;ve been
                            at the forefront of sports branding innovation — connecting brands
                            with passionate audiences across cricket, football, rugby, and
                            motor racing through 3D advertising, instadia, and strategic consulting.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {siteConfig.stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    <div
                                        className="text-3xl md:text-4xl font-bold mb-1"
                                        style={{
                                            fontFamily: 'var(--sp-font-display)',
                                            background: 'var(--sp-gradient-primary)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        <AnimatedCounter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                        />
                                    </div>
                                    <div
                                        className="text-xs md:text-sm font-medium uppercase tracking-wider"
                                        style={{ color: 'var(--sp-text-tertiary)' }}
                                    >
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSnapshot;
