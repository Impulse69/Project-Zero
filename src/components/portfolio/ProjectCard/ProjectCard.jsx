import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

const categoryColors = {
    football: '#45b7d1',
    cricket: '#4ecdc4',
    rugby: '#f7dc6f',
    motorsport: '#ff6b6b',
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            <Link
                to={`/portfolio/${project.slug}`}
                className="block group h-full"
            >
                <div
                    className="h-full rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 flex flex-col"
                    style={{
                        background: 'var(--sp-bg-tertiary)',
                        border: '1px solid var(--sp-border-subtle)'
                    }}
                >
                    {/* Thumbnail */}
                    <div
                        className="aspect-[16/10] relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${categoryColors[project.category] || '#6c63ff'}25 0%, var(--sp-bg-secondary) 100%)`
                        }}
                    >
                        {/* Placeholder for missing image */}
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center">
                            <span className="text-4xl opacity-50">
                                {project.category === 'football' ? '⚽' :
                                    project.category === 'cricket' ? '🏏' :
                                        project.category === 'rugby' ? '🏉' : '🏎️'}
                            </span>
                        </div>

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                            style={{ background: 'rgba(10, 10, 15, 0.7)' }}
                        >
                            <span
                                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400"
                                style={{
                                    background: 'var(--sp-gradient-primary)',
                                    color: '#fff'
                                }}
                            >
                                View Case Study <FiArrowRight size={14} />
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                            <Badge
                                variant="outline"
                                className="text-xs capitalize"
                                style={{
                                    borderColor: `${categoryColors[project.category] || '#6c63ff'}50`,
                                    color: categoryColors[project.category] || '#6c63ff'
                                }}
                            >
                                {project.category}
                            </Badge>
                        </div>
                        <h3
                            className="text-lg font-semibold mb-2 transition-colors duration-300"
                            style={{
                                fontFamily: 'var(--sp-font-display)',
                                color: 'var(--sp-text-primary)'
                            }}
                        >
                            {project.title}
                        </h3>
                        <p
                            className="text-sm leading-relaxed mb-4 flex-1"
                            style={{ color: 'var(--sp-text-secondary)' }}
                        >
                            {project.shortDescription}
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
