import { motion } from 'framer-motion';
import SectionHeading from '@components/common/SectionHeading';
import partners from '@data/partners.json';

const PartnersMarquee = () => {
    // Duplicate partners for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-20 md:py-28 overflow-hidden" style={{ background: 'var(--sp-bg-primary)' }}>
            <div className="container mx-auto px-4 mb-12">
                <SectionHeading
                    title="Trusted By"
                    subtitle="Proud to partner with leading brands across the sports industry."
                />
            </div>

            {/* Marquee container */}
            <div className="relative">
                {/* Fade edges */}
                <div
                    className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, var(--sp-bg-primary) 0%, transparent 100%)',
                    }}
                />
                <div
                    className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
                    style={{
                        background: 'linear-gradient(270deg, var(--sp-bg-primary) 0%, transparent 100%)',
                    }}
                />

                {/* Scrolling ribbon */}
                <motion.div
                    className="flex items-center gap-12 md:gap-20"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 25,
                            ease: 'linear',
                        },
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={`${partner.id}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center h-16 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'var(--sp-glass-bg)',
                                border: '1px solid var(--sp-border-subtle)',
                                minWidth: '180px',
                            }}
                        >
                            <span
                                className="text-sm font-semibold whitespace-nowrap tracking-wide uppercase"
                                style={{ color: 'var(--sp-text-tertiary)' }}
                            >
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersMarquee;
