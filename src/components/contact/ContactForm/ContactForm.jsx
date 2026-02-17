import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted');
        alert("Thank you for your message! We'll be in touch soon.");
    };

    return (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" required className="bg-background/50" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Project Inquiry" required className="bg-background/50" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Tell us about your project..."
                            className="min-h-[150px] bg-background/50 resize-y"
                            required
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default ContactForm;
