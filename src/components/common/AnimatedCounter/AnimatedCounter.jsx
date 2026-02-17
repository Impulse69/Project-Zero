import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from '@hooks/useInView';

const AnimatedCounter = ({ value, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [ref, isInView] = useInView({ threshold: 0.5 });
    const hasAnimated = useRef(false);

    const animate = useCallback(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const startTime = performance.now();
        const startValue = 0;
        const endValue = value;

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startValue + (endValue - startValue) * eased);

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [value, duration]);

    useEffect(() => {
        if (isInView) {
            animate();
        }
    }, [isInView, animate]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
};

export default AnimatedCounter;
