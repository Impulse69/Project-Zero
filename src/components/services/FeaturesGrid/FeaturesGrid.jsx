import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import * as LucideIcons from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const FeaturesGrid = ({ features }) => {
    return (
        <Section padding="lg">
            <Container>
                <SectionHeading
                    badge="Features"
                    title="Why Choose This Service"
                    subtitle="Comprehensive solutions tailored to your needs."
                    align="center"
                    className="mb-12"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        // Dynamic Icon Component
                        const IconComponent = LucideIcons[feature.icon] || LucideIcons.CheckCircle;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full bg-accent/5 border-border/50 hover:bg-accent/10 transition-colors">
                                    <CardHeader className="pb-2">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};

export default FeaturesGrid;
