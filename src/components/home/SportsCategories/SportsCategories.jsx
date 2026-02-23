import { SectionHeading } from '@/components/common/SectionHeading';
import { MdOutlineSportsCricket, MdOutlineSportsSoccer, MdOutlineSportsRugby, MdOutlineSportsMotorsports } from 'react-icons/md';
import styles from './SportsCategories.module.css';

export default function SportsCategories() {
    return (
        <section className={`${styles.section} ${styles.sectionTint}`}>
            <div className={styles.container}>
                <SectionHeading
                    eyebrow="Our Expertise"
                    title="Sports We Cover"
                />
                <div className={styles.sportsGrid}>
                    {[
                        { icon: <MdOutlineSportsCricket />, name: 'Cricket', accent: '#00b8a9', fallback: '🏏' },
                        { icon: <MdOutlineSportsSoccer />, name: 'Football', accent: '#0072e5', fallback: '⚽' },
                        { icon: <MdOutlineSportsRugby />, name: 'Rugby', accent: '#d4a017', fallback: '🏉' },
                        { icon: <MdOutlineSportsMotorsports />, name: 'Motor Racing', accent: '#e83a3a', fallback: '🏎️' },
                    ].map(s => (
                        <div key={s.name} className={styles.sportCard}>
                            <span className={styles.sportEmoji} style={{ color: s.accent }}>{s.icon || s.fallback}</span>
                            <h3 className={styles.sportName}>{s.name}</h3>
                            <div className={styles.sportBar} style={{ background: s.accent }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
