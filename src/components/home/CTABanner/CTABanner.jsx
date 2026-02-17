import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';

const CTABanner = () => {
    return (
        <section className="py-20 md:py-28 relative overflow-hidden">
            {/* Gradient Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(135deg, rgba(108, 99, 255, 0.15) 0%, rgba(0, 212, 170, 0.1) 50%, rgba(108, 99, 255, 0.08) 100%),
                        var(--sp-bg-secondary)
                    `,
                }}
            />

            {/* Animated decorative circles */}
            <motion.div
                className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10"
                style={{ background: 'var(--sp-color-primary)' }}
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-10"
                style={{ background: 'var(--sp-color-secondary)' }}
                animate={{
                    scale: [1, 1.15, 1],
                    x: [0, -15, 0],
                    y: [0, 10, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                        style={{
                            fontFamily: 'var(--sp-font-display)',
                            color: 'var(--sp-text-primary)',
                        }}
                    >
                        Ready to Put Your Brand{' '}
                        <span
                            style={{
                                background: 'var(--sp-gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            in the Spotlight?
                        </span>
                    </h2>

                    <p
                        className="text-lg md:text-xl mb-10 leading-relaxed"
                        style={{ color: 'var(--sp-text-secondary)' }}
                    >
                        Let&apos;s discuss how our sports marketing solutions can elevate
                        your brand to millions of passionate fans around the world.
                    </p>

                    <Link to="/contact">
                        <Button
                            size="lg"
                            className="px-10 py-4 text-base font-semibold rounded-full inline-flex items-center gap-2 group"
                            style={{
                                background: 'var(--sp-gradient-cta)',
                                color: '#fff',
                                border: 'none',
                                fontSize: '1rem',
                            }}
                        >
                            Start a Conversation
                            <FiArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
