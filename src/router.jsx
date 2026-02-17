import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '@layouts/MainLayout';
import Preloader from '@components/common/Preloader';

// Lazy-loaded pages
const HomePage = lazy(() => import('@pages/HomePage'));
const AboutPage = lazy(() => import('@pages/AboutPage'));
const ServicePage = lazy(() => import('@pages/ServicePage'));
const PortfolioPage = lazy(() => import('@pages/PortfolioPage'));
const PortfolioDetailPage = lazy(() => import('@pages/PortfolioDetailPage'));
const ContactPage = lazy(() => import('@pages/ContactPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

// Suspense wrapper with loading fallback
const SuspenseWrapper = ({ children }) => (
    <Suspense fallback={<Preloader />}>{children}</Suspense>
);

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: (
                    <SuspenseWrapper>
                        <HomePage />
                    </SuspenseWrapper>
                ),
            },
            {
                path: '/about',
                element: (
                    <SuspenseWrapper>
                        <AboutPage />
                    </SuspenseWrapper>
                ),
            },
            {
                path: '/services',
                element: <Navigate to="/services/3d-advertising" replace />,
            },
            {
                path: '/services/:serviceSlug',
                element: (
                    <SuspenseWrapper>
                        <ServicePage />
                    </SuspenseWrapper>
                ),
            },
            {
                path: '/portfolio',
                element: (
                    <SuspenseWrapper>
                        <PortfolioPage />
                    </SuspenseWrapper>
                ),
            },
            {
                path: '/portfolio/:slug',
                element: (
                    <SuspenseWrapper>
                        <PortfolioDetailPage />
                    </SuspenseWrapper>
                ),
            },
            {
                path: '/contact',
                element: (
                    <SuspenseWrapper>
                        <ContactPage />
                    </SuspenseWrapper>
                ),
            },
            {
                path: '*',
                element: (
                    <SuspenseWrapper>
                        <NotFoundPage />
                    </SuspenseWrapper>
                ),
            },
        ],
    },
]);
