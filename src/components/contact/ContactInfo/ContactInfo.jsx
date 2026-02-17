import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

const ContactInfo = () => {
    const { address, email, phone, officeHours, social } = siteConfig;

    const socialIcons = {
        linkedin: Linkedin,
        twitter: Twitter,
        instagram: Instagram,
        facebook: Facebook
    };

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                    Ready to elevate your brand? Reach out to us directly or fill out the form.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Our Office</h4>
                        <p className="text-gray-400 text-sm">
                            {address.street}<br />
                            {address.city}, {address.zip}<br />
                            {address.country}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Email Us</h4>
                        <a href={`mailto:${email}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                            {email}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Call Us</h4>
                        <a href={`tel:${phone}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                            {phone}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Clock size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Office Hours</h4>
                        <p className="text-gray-400 text-sm">
                            Weekdays: {officeHours.weekdays}<br />
                            Weekends: {officeHours.weekends}
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-border/50">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                    {Object.entries(social).map(([platform, link]) => {
                        const Icon = socialIcons[platform];
                        if (!Icon) return null;
                        return (
                            <a
                                key={platform}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label={`Follow us on ${platform}`}
                            >
                                <Icon size={18} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
