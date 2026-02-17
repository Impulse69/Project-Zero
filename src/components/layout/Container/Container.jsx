import { cn } from '@/lib/utils';
import React from 'react';

const Container = React.forwardRef(({
    className,
    size = 'lg',
    as: Component = 'div',
    children,
    ...props
}, ref) => {
    const sizeClasses = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        full: 'max-w-full',
    };

    return (
        <Component
            ref={ref}
            className={cn(
                'mx-auto px-4 sm:px-6 lg:px-8 w-full',
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
});

Container.displayName = 'Container';

export default Container;
