import { SectionHeading } from '@/components/common/SectionHeading';
import styles from './TeamGrid.module.css';

const team = [
    { initials: 'MS', name: 'Marcus Sterling', role: 'Founder & CEO', bio: 'Strategic lead behind landmark global deals for Emirates Airlines and Heineken.', hue: 240 },
    { initials: 'SJ', name: 'Sarah Jenkins', role: 'Head of Partnerships', bio: 'Expert deal-maker who has brokered high-profile sponsorships for Rolex and Mastercard.', hue: 160 },
    { initials: 'DC', name: 'David Chen', role: 'Director of Strategy', bio: 'Data-driven creative directing campaign strategies for Red Bull Racing and Aramco.', hue: 200 },
    { initials: 'ER', name: 'Elena Rossi', role: 'Global Talent Agent', bio: 'Trusted advocate managing elite athlete partnerships with Guinness and FIFA.', hue: 320 },
];

export default function TeamGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <SectionHeading
                    eyebrow="The People"
                    title="Meet The Team"
                    lead="The visionary minds shaping the future of sports marketing."
                />
                <div className={styles.teamGrid}>
                    {team.map(m => (
                        <div key={m.name} className={styles.teamCard}>
                            <div className={styles.avatar} style={{ background: `hsl(${m.hue},55%,88%)` }}>
                                <span className={styles.avatarText}>{m.initials}</span>
                            </div>
                            <h3 className={styles.teamName}>{m.name}</h3>
                            <p className={styles.teamRole}>{m.role}</p>
                            <p className={styles.teamBio}>{m.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
