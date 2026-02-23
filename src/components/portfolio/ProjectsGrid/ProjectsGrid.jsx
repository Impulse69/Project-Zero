"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './ProjectsGrid.module.css';
import filterStyles from '../PortfolioFilter/PortfolioFilter.module.css';

const categories = ['All', 'Cricket', 'Football', 'Rugby', 'Motor Racing', '3D Advertising', 'Instadia', 'Brand Strategy'];

const projects = [
    { title: 'Heineken Champions League Final', client: 'Heineken', cat: 'Instadia Branding', sport: 'Football', img: '/assets/images/football.png' },
    { title: 'Rolex at Wimbledon Grand Slam', client: 'Rolex', cat: '3D Advertising', sport: 'Tennis', img: '/assets/images/tennis.png' },
    { title: 'Guinness Six Nations Strategy', client: 'Guinness', cat: 'Brand Strategy', sport: 'Rugby', img: '/assets/images/rugby.png' },
    { title: 'Red Bull Racing Trackside', client: 'Red Bull Racing', cat: 'Integrated Marketing', sport: 'Motor Racing', img: '/assets/images/racing.png' },
    { title: 'Emirates T20 World Cup Activation', client: 'Emirates Airlines', cat: 'Instadia Branding', sport: 'Cricket', img: '/assets/images/cricket.png' },
    { title: 'Aramco Masters Rebrand', client: 'Aramco', cat: 'Brand Strategy', sport: 'Golf', img: '/assets/images/golf.png' },
];

export default function ProjectsGrid() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = projects.filter(p => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Instadia' && p.cat === 'Instadia Branding') return true;
        return p.sport === activeFilter || p.cat === activeFilter;
    });

    return (
        <section className={`${styles.section} ${styles.sectionWhite}`}>
            <div className={filterStyles.filterBar}>
                <div className={`${filterStyles.filterInner} container`}>
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setActiveFilter(c)}
                            className={`${filterStyles.filterBtn} ${c === activeFilter ? filterStyles.filterBtnActive : ''}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container" style={{ marginTop: '48px' }}>
                <div className={styles.portfolioGrid}>
                    {filteredProjects.map(p => (
                        <div key={p.title} className={styles.projectCard}>
                            <div className={styles.projectImg} style={{
                                backgroundImage: `url(${p.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <span className={styles.projectSportTag}>{p.sport}</span>
                                <div className={styles.projectOverlay}>
                                    <Link href="/portfolio" className={styles.projectViewBtn}>View Case Study →</Link>
                                </div>
                            </div>
                            <div className={styles.projectBody}>
                                <p className={styles.projectCat}>{p.cat}</p>
                                <h3 className={styles.projectTitle}>{p.title}</h3>
                                <p className={styles.projectClient}>{p.client}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
