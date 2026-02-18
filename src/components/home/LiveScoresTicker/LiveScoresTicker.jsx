import { motion } from 'framer-motion';
import { useSportsData } from '@hooks/useSportsData';
import styles from './LiveScoresTicker.module.css';

/**
 * Format the match status for display
 */
function getStatusDisplay(match) {
    if (match.isLive) {
        return { text: match.statusDetail || 'LIVE', className: styles.live };
    }
    if (match.isCompleted) {
        return { text: 'FT', className: styles.completed };
    }

    // Scheduled — show time
    try {
        const date = new Date(match.date);
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return { text: time, className: styles.scheduled };
    } catch {
        return { text: 'TBD', className: styles.scheduled };
    }
}

/**
 * Single match card
 */
const MatchCard = ({ match }) => {
    const status = getStatusDisplay(match);

    return (
        <motion.div
            className={`${styles['match-card']} ${match.isLive ? styles.live : ''}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className={`${styles['match-status']} ${status.className}`}>
                {match.isLive && <span className={styles['live-dot']} style={{ display: 'inline-block', marginRight: '4px', verticalAlign: 'middle' }} />}
                {status.text}
            </div>
            <div className={styles.teams}>
                {/* Home team */}
                <div className={styles['team-row']}>
                    <div className={styles['team-info']}>
                        {match.home.logo && (
                            <img
                                src={match.home.logo}
                                alt=""
                                className={styles['team-logo']}
                                loading="lazy"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        )}
                        <span className={styles['team-name']}>{match.home.abbreviation || match.home.name}</span>
                    </div>
                    {(match.isLive || match.isCompleted) && (
                        <span className={styles['team-score']}>{match.home.score}</span>
                    )}
                </div>

                {/* Away team */}
                <div className={styles['team-row']}>
                    <div className={styles['team-info']}>
                        {match.away.logo && (
                            <img
                                src={match.away.logo}
                                alt=""
                                className={styles['team-logo']}
                                loading="lazy"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        )}
                        <span className={styles['team-name']}>{match.away.abbreviation || match.away.name}</span>
                    </div>
                    {(match.isLive || match.isCompleted) && (
                        <span className={styles['team-score']}>{match.away.score}</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

/**
 * Skeleton loader for the ticker
 */
const TickerSkeleton = () => (
    <div className={styles['ticker-track']}>
        {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles['skeleton-card']} />
        ))}
    </div>
);

/**
 * LiveScoresTicker — Horizontal scrolling bar of live/recent/upcoming matches
 */
const LiveScoresTicker = () => {
    const { data: matches, loading, error } = useSportsData('scores');

    // Sort: live first, then upcoming, then completed
    const sorted = [...matches].sort((a, b) => {
        if (a.isLive && !b.isLive) return -1;
        if (!a.isLive && b.isLive) return 1;
        if (!a.isCompleted && b.isCompleted) return -1;
        if (a.isCompleted && !b.isCompleted) return 1;
        return new Date(a.date) - new Date(b.date);
    });

    const hasLive = sorted.some((m) => m.isLive);

    return (
        <motion.div
            className={styles['ticker-wrapper']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <div className={styles['ticker-header']}>
                {hasLive && <span className={styles['live-dot']} />}
                <span className={styles['ticker-label']}>
                    {hasLive ? 'Live Scores' : 'Latest Scores'}
                </span>
            </div>

            {loading ? (
                <TickerSkeleton />
            ) : error || sorted.length === 0 ? (
                <div className={styles['empty-state']}>
                    No matches available right now — check back soon
                </div>
            ) : (
                <div className={styles['ticker-track']}>
                    {sorted.map((match) => (
                        <MatchCard key={match.id} match={match} />
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default LiveScoresTicker;
