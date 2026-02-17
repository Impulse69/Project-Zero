import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import teamData from '@/data/team.json';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const TeamGrid = () => {

    const socialIcons = {
        linkedin: Linkedin,
        twitter: Twitter,
        instagram: Instagram
    };

    return (
        <Section padding="lg">
            <Container>
                <SectionHeading
                    badge="Our Team"
                    title="Meet the Experts"
                    subtitle="The creative minds and strategic thinkers behind our success."
                    align="center"
                    className="mb-16"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full overflow-hidden border-border/50 bg-card/50 hover:border-primary/50 transition-colors group">
                                <div className="aspect-square overflow-hidden bg-muted relative">
                                    {/* Image Placeholder or Actual Image */}
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback for missing images */}
                                    <div className="hidden absolute inset-0 items-center justify-center bg-accent/10 text-4xl font-bold text-primary/20">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>

                                <CardHeader className="text-center pt-6 pb-2">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-sm text-primary font-medium">{member.role}</p>
                                </CardHeader>

                                <CardContent className="text-center pb-4">
                                    <p className="text-gray-400 text-sm line-clamp-3">
                                        {member.bio}
                                    </p>
                                </CardContent>

                                <CardFooter className="justify-center gap-4 pb-6">
                                    {Object.entries(member.social).map(([platform, link]) => {
                                        const Icon = socialIcons[platform];
                                        if (!Icon) return null;
                                        return (
                                            <a
                                                key={platform}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-500 hover:text-primary transition-colors"
                                                aria-label={`${member.name} on ${platform}`}
                                            >
                                                <Icon size={18} />
                                            </a>
                                        );
                                    })}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </Container>
        </Section>
    );
};

export default TeamGrid;
