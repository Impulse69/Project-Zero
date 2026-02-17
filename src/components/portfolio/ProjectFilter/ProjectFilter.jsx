import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const ProjectFilter = ({ activeFilter, setFilter, categories }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setFilter('all')}
                className={cn(
                    "rounded-full px-6 min-w-[80px]",
                    activeFilter === 'all' ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-accent"
                )}
            >
                All
            </Button>

            {categories.map((category) => (
                <Button
                    key={category}
                    variant={activeFilter === category ? 'default' : 'outline'}
                    onClick={() => setFilter(category)}
                    className={cn(
                        "rounded-full px-6 capitalize min-w-[80px]",
                        activeFilter === category ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-accent"
                    )}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
};

export default ProjectFilter;
