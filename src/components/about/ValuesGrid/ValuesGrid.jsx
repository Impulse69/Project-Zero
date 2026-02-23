import { SectionHeading } from '@/components/common/SectionHeading';
import { FiZap, FiShield, FiAward, FiGlobe } from 'react-icons/fi';
import styles from './ValuesGrid.module.css';

const values = [
    { icon: <FiZap />, fallback: '💡', title: 'Innovation', desc: 'Leveraging AI and data analytics to stay ahead in an ever-changing sports landscape.' },
    { icon: <FiShield />, fallback: '🤝', title: 'Integrity', desc: 'Transparent communication and ethical representation in every single engagement.' },
    { icon: <FiAward />, fallback: '🏆', title: 'Excellence', desc: 'Uncompromising standards — from creative to execution, we deliver the extraordinary.' },
    { icon: <FiGlobe />, fallback: '🌍', title: 'Global Reach', desc: 'Deep networks across six continents ensuring our clients become true global icons.' },
];

export default function ValuesGrid() {
    return (
        <section className={`${styles.section} ${styles.sectionTint}`}>
            <div className={styles.container}>
                <SectionHeading
                    eyebrow="What We Stand For"
                    title="Our Values"
                />
                <div className={styles.valuesGrid}>
                    {values.map(v => (
                        <div key={v.title} className={styles.valueCard}>
                            <div className={styles.valueIconWrap}>{v.icon || v.fallback}</div>
                            <h3 className={styles.valueTitle}>{v.title}</h3>
                            <p className={styles.valueDesc}>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
