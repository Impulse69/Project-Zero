import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { cn } from '@/lib/utils'; // Assuming cn utility exists

const ProcessTimeline = ({ steps }) => {
    return (
        <Section padding="lg" bg="secondary">
            <Container size="md">
                <SectionHeading
                    badge="How It Works"
                    title="Our Process"
                    subtitle="A systematic approach to ensuring your brand shines."
                    align="center"
                    className="mb-16"
                />

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 relative">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={cn(
                                        "flex flex-col md:flex-row items-center gap-8",
                                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                                    )}
                                >
                                    {/* Step Number Bubble (Mobile: Left, Desktop: Center) */}
                                    <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 -translate-x-1/2 md:translate-x-[-50%] border-4 border-background shadow-lg">
                                        {step.step}
                                    </div>

                                    {/* Content Card */}
                                    <div className={cn(
                                        "w-full md:w-1/2 pl-16 md:pl-0",
                                        isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                    )}>
                                        <div className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-400">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Empty spacer for the other side */}
                                    <div className="w-full md:w-1/2 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default ProcessTimeline;
