import { useState, useEffect, useRef } from 'react';

/**
 * Intersection Observer hook for scroll-triggered animations
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {[React.RefObject, boolean]}
 */
export const useInView = ({ threshold = 0.1, rootMargin = '0px', triggerOnce = true } = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isInView];
};

export default useInView;
