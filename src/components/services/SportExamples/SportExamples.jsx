import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; // shadcn carousel uses embla under the hood

const SportExamples = ({ examples }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section padding="lg" ref={ref}>
            <Container>
                <SectionHeading
                    badge="Applications"
                    title="See It In Action"
                    subtitle="Tailored solutions for every major sport."
                    align="center"
                    className="mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                            })
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {examples.map((example, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="overflow-hidden border-border/50 bg-card/50">
                                            <div className="aspect-video relative overflow-hidden bg-muted">
                                                <img
                                                    src={example.image}
                                                    alt={example.sport}
                                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                {/* Fallback */}
                                                <div className="hidden absolute inset-0 items-center justify-center bg-accent/20 text-white font-bold text-xl">
                                                    {example.sport}
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                                <div className="absolute bottom-4 left-4">
                                                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
                                                        {example.sport}
                                                    </span>
                                                </div>
                                            </div>
                                            <CardContent className="p-6">
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {example.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </Carousel>
                </motion.div>

            </Container>
        </Section>
    );
};

export default SportExamples;
