import Link from 'next/link';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FiTarget } from 'react-icons/fi';
import { MdOutlineStadium, MdOutlineTrendingUp } from 'react-icons/md';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    eyebrow="What We Do"
                    title="Mastering the Game"
                    lead="End-to-end brand elevation across the world's most exciting sporting arenas."
                />

                <div className={styles.servicesGrid}>
                    {[
                        {
                            icon: <FiTarget />,
                            fallback: '🎯',
                            title: '3D Sports Advertising',
                            desc: 'Cutting-edge virtual perimeter boards that render in stunning 3D perspective for television and digital audiences worldwide.',
                            color: '#6c63ff',
                            bg: 'rgba(108,99,255,0.08)',
                            href: '/services/3d-advertising',
                        },
                        {
                            icon: <MdOutlineStadium />,
                            fallback: '🏟️',
                            title: 'Instadia Branding',
                            desc: 'Transforming stadium atmospheres through seamless integration of physical and digital brand elements on every surface.',
                            color: '#00d4aa',
                            bg: 'rgba(0,212,170,0.08)',
                            href: '/services/instadia',
                        },
                        {
                            icon: <MdOutlineTrendingUp />,
                            fallback: '📈',
                            title: 'Brand Strategy',
                            desc: 'Data-driven market positioning and creative strategy that connects your brand to global sports audiences with lasting impact.',
                            color: '#ff6b6b',
                            bg: 'rgba(255,107,107,0.08)',
                            href: '/services/brand-strategy',
                        },
                    ].map(s => (
                        <div key={s.title} className={styles.serviceCard}>
                            <div className={styles.serviceIconWrap} style={{ background: s.bg, color: s.color }}>
                                <span className={styles.serviceIcon}>{s.icon || s.fallback}</span>
                            </div>
                            <h3 className={styles.serviceTitle}>{s.title}</h3>
                            <p className={styles.serviceDesc}>{s.desc}</p>
                            <Link href={s.href} className={styles.serviceLink} style={{ color: s.color }}>
                                Learn more →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
