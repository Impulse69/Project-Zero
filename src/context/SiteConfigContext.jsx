import { createContext, useContext } from 'react';
import siteConfig from '@data/siteConfig.json';

const SiteConfigContext = createContext(siteConfig);

export const useSiteConfig = () => {
    const context = useContext(SiteConfigContext);
    if (!context) {
        throw new Error('useSiteConfig must be used within SiteConfigProvider');
    }
    return context;
};

export const SiteConfigProvider = ({ children }) => {
    return (
        <SiteConfigContext.Provider value={siteConfig}>
            {children}
        </SiteConfigContext.Provider>
    );
};

export default SiteConfigContext;
