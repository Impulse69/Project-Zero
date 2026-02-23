import styles from './SectionHeading.module.css';

export default function SectionHeading({
    eyebrow,
    title,
    lead,
    centered = true, // By default text-align is center
    className = '',
}) {
    return (
        <div className={`${styles.sectionHead} ${centered ? styles.centered : ''} ${className}`}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 className={styles.h2}>{title}</h2>
            {lead && <p className={styles.lead}>{lead}</p>}
        </div>
    );
}
