import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Breadcrumbs = ({ className }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Map of path segments to readable labels
    const routeLabels = {
        'services': 'Services',
        'about': 'About Us',
        'portfolio': 'Portfolio',
        'contact': 'Contact',
        '3d-advertising': '3D Sports Advertising',
        'instadia': 'Instadia Branding',
        'brand-strategy': 'Brand Strategy',
    };

    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-gray-400 mb-6", className)}>
            <ol className="flex items-center space-x-2">
                <li>
                    <Link to="/" className="hover:text-white transition-colors flex items-center">
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const label = routeLabels[value] || value.replace(/-/g, ' '); // Fallback to title case

                    return (
                        <li key={to} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1 text-gray-600" />
                            {isLast ? (
                                <span className="text-primary font-medium capitalize animate-in fade-in slide-in-from-left-2 duration-300">
                                    {label}
                                </span>
                            ) : (
                                <Link to={to} className="hover:text-white transition-colors capitalize">
                                    {label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
