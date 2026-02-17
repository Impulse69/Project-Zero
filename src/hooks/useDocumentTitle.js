import { useEffect } from 'react';

/**
 * Hook to set document title
 * @param {string} title - Page title
 */
export const useDocumentTitle = (title) => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title ? `${title} | Sports Panorama` : 'Sports Panorama';

        return () => {
            document.title = prevTitle;
        };
    }, [title]);
};

export default useDocumentTitle;
