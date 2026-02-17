import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'center', light = false }) => {
    return (
        <motion.div
            className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h2
                className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : ''
                    }`}
                style={{
                    fontFamily: 'var(--sp-font-display)',
                    background: light ? 'none' : 'var(--sp-gradient-primary)',
                    WebkitBackgroundClip: light ? 'unset' : 'text',
                    WebkitTextFillColor: light ? 'unset' : 'transparent',
                }}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className="max-w-2xl mx-auto text-base md:text-lg"
                    style={{ color: 'var(--sp-text-secondary)' }}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
