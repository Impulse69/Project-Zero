import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const PageHero = ({ title, subtitle, bgImage, className }) => {
    return (
        <div className={cn("relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden", className)}>
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                {bgImage ? (
                    <img
                        src={bgImage}
                        alt={title}
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
                )}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="flex justify-center mb-4">
                    <Breadcrumbs />
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
};

export default PageHero;
