import { cn } from '@/lib/utils';
import React from 'react';

const Section = React.forwardRef(({
    className,
    bg = 'primary',
    padding = 'lg',
    as: Component = 'section',
    id,
    children,
    ...props
}, ref) => {

    const bgClasses = {
        primary: 'bg-background',
        secondary: 'bg-muted/50', // darker shade using shadcn variable
        tertiary: 'bg-accent/20',
        dark: 'bg-black',
    };

    const paddingClasses = {
        none: 'py-0',
        sm: 'py-8 md:py-12',
        md: 'py-12 md:py-16',
        lg: 'py-16 md:py-24',
        xl: 'py-20 md:py-32',
    };

    return (
        <Component
            ref={ref}
            id={id}
            className={cn(
                'relative w-full overflow-hidden',
                bgClasses[bg],
                paddingClasses[padding],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
});

Section.displayName = 'Section';

export default Section;
