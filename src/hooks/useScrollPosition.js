import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position
 * @returns {number} Current scroll Y position
 */
export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Set initial value
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
};

export default useScrollPosition;
