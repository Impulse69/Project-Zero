import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from '@components/common/SectionHeading';
import testimonials from '@data/testimonials.json';

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-rotate every 6 seconds
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const testimonial = testimonials[current];

    return (
        <section className="py-20 md:py-28" style={{ background: 'var(--sp-bg-primary)' }}>
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="What Our Clients Say"
                    subtitle="Hear from the brands we&apos;ve helped reach millions of sports fans worldwide."
                />

                <div className="max-w-3xl mx-auto relative">
                    {/* Navigation buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border-0"
                        style={{
                            background: 'var(--sp-glass-bg)',
                            border: '1px solid var(--sp-glass-border)',
                            color: 'var(--sp-text-secondary)',
                        }}
                        aria-label="Previous testimonial"
                    >
                        <FiChevronLeft size={20} />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border-0"
                        style={{
                            background: 'var(--sp-glass-bg)',
                            border: '1px solid var(--sp-glass-border)',
                            color: 'var(--sp-text-secondary)',
                        }}
                        aria-label="Next testimonial"
                    >
                        <FiChevronRight size={20} />
                    </button>

                    {/* Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonial.id}
                            className="rounded-2xl p-8 md:p-12 text-center"
                            style={{
                                background: 'var(--sp-bg-secondary)',
                                border: '1px solid var(--sp-border-subtle)',
                            }}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            {/* Quote mark */}
                            <div
                                className="text-5xl leading-none mb-6 font-serif"
                                style={{
                                    background: 'var(--sp-gradient-primary)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                &ldquo;
                            </div>

                            <blockquote
                                className="text-lg md:text-xl leading-relaxed mb-8 italic"
                                style={{ color: 'var(--sp-text-primary)' }}
                            >
                                {testimonial.quote}
                            </blockquote>

                            {/* Author */}
                            <div>
                                <div
                                    className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-lg font-bold"
                                    style={{
                                        background: 'var(--sp-gradient-primary)',
                                        color: '#fff',
                                    }}
                                >
                                    {testimonial.author.charAt(0)}
                                </div>
                                <p
                                    className="font-semibold text-base"
                                    style={{ color: 'var(--sp-text-primary)' }}
                                >
                                    {testimonial.author}
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: 'var(--sp-text-tertiary)' }}
                                >
                                    {testimonial.role}, {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer border-0 ${index === current ? 'w-8' : ''
                                    }`}
                                style={{
                                    background: index === current
                                        ? 'var(--sp-color-primary)'
                                        : 'var(--sp-border-strong)',
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
