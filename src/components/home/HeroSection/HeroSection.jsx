import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiChevronDown } from 'react-icons/fi';

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(ellipse at 20% 50%, rgba(108, 99, 255, 0.15) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
                            radial-gradient(ellipse at 50% 80%, rgba(255, 107, 107, 0.08) 0%, transparent 50%),
                            var(--sp-bg-primary)
                        `,
                    }}
                />
                {/* Animated grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border"
                        style={{
                            background: 'var(--sp-glass-bg)',
                            borderColor: 'var(--sp-glass-border)',
                            color: 'var(--sp-color-secondary)',
                        }}
                    >
                        The Pulse of African Athletics
                    </span>
                </motion.div>

                <motion.h1
                    className="font-bold mb-6 leading-tight"
                    style={{
                        fontFamily: 'var(--sp-font-display)',
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        color: 'var(--sp-text-primary)',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Uniting Africa{' '}
                    <span
                        style={{
                            background: 'var(--sp-gradient-primary)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Through Sport
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-2xl mx-auto mb-10 text-lg md:text-xl"
                    style={{ color: 'var(--sp-text-secondary)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    From the electric atmosphere of the Ghana Premier League to the global stage.
                    We are your premier source for live coverage, analytics, and grassroots scouting.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >

                    <Link to="/services">
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8 py-3 text-base font-semibold rounded-full"
                            style={{
                                borderColor: 'var(--sp-border-strong)',
                                color: 'var(--sp-text-primary)',
                                background: 'transparent',
                            }}
                        >
                            View Match Center
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 0.6 },
                    y: { delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
            >
                <FiChevronDown size={28} style={{ color: 'var(--sp-text-tertiary)' }} />
            </motion.div>
        </section>
    );
};

export default HeroSection;
