import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import aboutData from '@/data/about.json';
import { Cpu, Heart, ShieldCheck } from 'lucide-react';

const iconMap = {
    Cpu: Cpu,
    Heart: Heart,
    ShieldCheck: ShieldCheck
};

const ValuesSection = () => {
    const { values } = aboutData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <Section padding="lg" bg="secondary">
            <Container>
                <SectionHeading
                    badge="Core Values"
                    title="What Drives Us"
                    subtitle="The principles that guide every decision we make."
                    align="center"
                    className="mb-16"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {values.map((value) => {
                        const Icon = iconMap[value.icon] || Heart;
                        return (
                            <motion.div
                                key={value.id}
                                variants={itemVariants}
                                className="bg-background border border-border p-8 rounded-xl text-center hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </Container>
        </Section>
    );
};

export default ValuesSection;
