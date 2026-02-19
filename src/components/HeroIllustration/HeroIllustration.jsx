'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroIllustration.module.css';

export default function HeroIllustration() {
    const svgRef = useRef(null);

    // Pause CSS animations when hero is scrolled out of view (Seedance pattern)
    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    svg.style.animationPlayState = 'running';
                    svg.querySelectorAll('[class]').forEach(el => {
                        el.style.animationPlayState = 'running';
                    });
                } else {
                    svg.style.animationPlayState = 'paused';
                    svg.querySelectorAll('[class]').forEach(el => {
                        el.style.animationPlayState = 'paused';
                    });
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(svg);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.illustrationWrap} aria-hidden="true">
            <svg
                ref={svgRef}
                className={styles.svg}
                viewBox="0 0 1440 810"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    {/* Radial glow at center */}
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.35" />
                        <stop offset="45%" stopColor="#00d4aa" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0" />
                    </radialGradient>

                    {/* Indigo streak gradient */}
                    <linearGradient id="streakIndigo" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6c63ff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6c63ff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
                    </linearGradient>

                    {/* Teal streak gradient */}
                    <linearGradient id="streakTeal" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00d4aa" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00d4aa" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#6c63ff" stopOpacity="0" />
                    </linearGradient>

                    {/* Arc gradient */}
                    <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.2" />
                    </linearGradient>

                    {/* Blur filter for glow effect */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="12" />
                    </filter>
                </defs>

                {/* Deep background */}
                <rect width="1440" height="810" fill="#0a0a0f" />

                {/* Central radial glow */}
                <ellipse
                    cx="720"
                    cy="405"
                    rx="500"
                    ry="380"
                    fill="url(#centerGlow)"
                    className={styles.pulseGlow}
                />

                {/* Soft indigo background glow blobs */}
                <circle cx="720" cy="400" r="300" fill="#6c63ff" opacity="0.08" filter="url(#softGlow)" className={styles.blobPulse} />
                <circle cx="400" cy="200" r="180" fill="#00d4aa" opacity="0.06" filter="url(#softGlow)" className={styles.blobPulse2} />
                <circle cx="1100" cy="600" r="200" fill="#6c63ff" opacity="0.07" filter="url(#softGlow)" className={styles.blobPulse} />

                {/* ── Stadium arc outlines ── */}
                {/* Outer stadium ring */}
                <ellipse cx="720" cy="560" rx="680" ry="240" fill="none" stroke="#6c63ff" strokeWidth="1" strokeOpacity="0.15" className={styles.arcRotate} />
                <ellipse cx="720" cy="540" rx="560" ry="190" fill="none" stroke="#00d4aa" strokeWidth="0.8" strokeOpacity="0.12" className={styles.arcRotateReverse} />
                <ellipse cx="720" cy="520" rx="440" ry="150" fill="none" stroke="#6c63ff" strokeWidth="0.6" strokeOpacity="0.1" className={styles.arcRotate} />

                {/* ── Dynamic light streaks ── */}
                {/* Horizontal streaks */}
                <rect x="-400" y="250" width="900" height="1.5" fill="url(#streakIndigo)" rx="1" className={styles.streakLeft1} />
                <rect x="-400" y="400" width="700" height="1" fill="url(#streakIndigo)" rx="1" className={styles.streakLeft2} />
                <rect x="-400" y="560" width="800" height="1.5" fill="url(#streakTeal)" rx="1" className={styles.streakLeft3} />

                <rect x="940" y="220" width="900" height="1.5" rx="1" fill="url(#streakTeal)" className={styles.streakRight1} />
                <rect x="940" y="380" width="700" height="1" rx="1" fill="url(#streakIndigo)" className={styles.streakRight2} />
                <rect x="940" y="590" width="800" height="1.5" rx="1" fill="url(#streakTeal)" className={styles.streakRight3} />

                {/* Diagonal streaks */}
                <line x1="-50" y1="810" x2="500" y2="0" stroke="#6c63ff" strokeWidth="0.8" strokeOpacity="0.2" className={styles.diagStreak1} />
                <line x1="200" y1="810" x2="750" y2="0" stroke="#00d4aa" strokeWidth="0.6" strokeOpacity="0.15" className={styles.diagStreak2} />
                <line x1="940" y1="810" x2="1490" y2="0" stroke="#6c63ff" strokeWidth="0.8" strokeOpacity="0.2" className={styles.diagStreak1} />
                <line x1="690" y1="810" x2="1240" y2="0" stroke="#00d4aa" strokeWidth="0.6" strokeOpacity="0.15" className={styles.diagStreak2} />

                {/* ── Floating geometric particles ── */}
                {[
                    { cx: 180, cy: 150, r: 2, c: '#6c63ff', cls: styles.particle1 },
                    { cx: 320, cy: 680, r: 1.5, c: '#00d4aa', cls: styles.particle2 },
                    { cx: 900, cy: 120, r: 2.5, c: '#00d4aa', cls: styles.particle3 },
                    { cx: 1200, cy: 700, r: 2, c: '#6c63ff', cls: styles.particle1 },
                    { cx: 1380, cy: 200, r: 1.5, c: '#ff6b6b', cls: styles.particle2 },
                    { cx: 80, cy: 450, r: 3, c: '#6c63ff', cls: styles.particle3 },
                    { cx: 600, cy: 750, r: 1.5, c: '#00d4aa', cls: styles.particle1 },
                    { cx: 1100, cy: 350, r: 2, c: '#6c63ff', cls: styles.particle2 },
                    { cx: 430, cy: 90, r: 1.5, c: '#00d4aa', cls: styles.particle3 },
                    { cx: 1300, cy: 520, r: 2.5, c: '#ff6b6b', cls: styles.particle1 },
                ].map((p, i) => (
                    <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.c} filter="url(#glow)" className={p.cls} />
                ))}

                {/* ── Sport silhouettes — minimalist line art ── */}

                {/* Cricket batsman silhouette (left side) */}
                <g className={styles.silhouette} transform="translate(200, 280) scale(0.9)" opacity="0.18">
                    <circle cx="20" cy="0" r="8" fill="#6c63ff" />
                    <line x1="20" y1="8" x2="20" y2="50" stroke="#6c63ff" strokeWidth="3" />
                    <line x1="20" y1="22" x2="-5" y2="38" stroke="#6c63ff" strokeWidth="2.5" />
                    <line x1="20" y1="22" x2="50" y2="15" stroke="#6c63ff" strokeWidth="2.5" />
                    <line x1="20" y1="50" x2="5" y2="80" stroke="#6c63ff" strokeWidth="2.5" />
                    <line x1="20" y1="50" x2="35" y2="80" stroke="#6c63ff" strokeWidth="2.5" />
                    {/* Bat */}
                    <rect x="46" y="8" width="4" height="28" rx="2" fill="#6c63ff" transform="rotate(-20 48 22)" />
                </g>

                {/* Footballer silhouette (upper right) */}
                <g className={styles.silhouette} transform="translate(1150, 160) scale(1.1)" opacity="0.15">
                    <circle cx="0" cy="0" r="9" fill="#00d4aa" />
                    <line x1="0" y1="9" x2="0" y2="55" stroke="#00d4aa" strokeWidth="3" />
                    <line x1="0" y1="25" x2="-25" y2="42" stroke="#00d4aa" strokeWidth="2.5" />
                    <line x1="0" y1="25" x2="20" y2="35" stroke="#00d4aa" strokeWidth="2.5" />
                    <line x1="0" y1="55" x2="-15" y2="85" stroke="#00d4aa" strokeWidth="2.5" />
                    <line x1="0" y1="55" x2="20" y2="75" stroke="#00d4aa" strokeWidth="2.5" />
                    {/* Ball */}
                    <circle cx="-35" cy="55" r="7" fill="none" stroke="#00d4aa" strokeWidth="1.5" />
                </g>

                {/* Rugby player silhouette (bottom left) */}
                <g className={styles.silhouette} transform="translate(320, 560) scale(0.85)" opacity="0.14">
                    <circle cx="0" cy="0" r="9" fill="#f7dc6f" />
                    <line x1="0" y1="9" x2="-5" y2="50" stroke="#f7dc6f" strokeWidth="3" />
                    <line x1="0" y1="22" x2="30" y2="35" stroke="#f7dc6f" strokeWidth="2.5" />
                    <line x1="0" y1="22" x2="-20" y2="10" stroke="#f7dc6f" strokeWidth="2.5" />
                    <line x1="-5" y1="50" x2="-20" y2="82" stroke="#f7dc6f" strokeWidth="2.5" />
                    <line x1="-5" y1="50" x2="18" y2="75" stroke="#f7dc6f" strokeWidth="2.5" />
                    {/* Ball (oval) */}
                    <ellipse cx="38" cy="30" rx="14" ry="8" fill="none" stroke="#f7dc6f" strokeWidth="1.5" transform="rotate(30 38 30)" />
                </g>

                {/* Racing car silhouette (right side) */}
                <g className={styles.silhouette} transform="translate(980, 600) scale(1.0)" opacity="0.14">
                    <rect x="0" y="15" width="80" height="18" rx="5" fill="#ff6b6b" />
                    <rect x="10" y="5" width="50" height="14" rx="4" fill="#ff6b6b" />
                    {/* Wheels */}
                    <circle cx="15" cy="35" r="8" fill="none" stroke="#ff6b6b" strokeWidth="2.5" />
                    <circle cx="65" cy="35" r="8" fill="none" stroke="#ff6b6b" strokeWidth="2.5" />
                    {/* Spoiler */}
                    <rect x="0" y="10" width="5" height="16" rx="2" fill="#ff6b6b" />
                    <rect x="0" y="10" width="22" height="3" rx="1" fill="#ff6b6b" />
                    {/* Speed lines */}
                    <line x1="-30" y1="18" x2="-5" y2="18" stroke="#ff6b6b" strokeWidth="1.5" strokeOpacity="0.6" />
                    <line x1="-20" y1="25" x2="-5" y2="25" stroke="#ff6b6b" strokeWidth="1" strokeOpacity="0.4" />
                    <line x1="-35" y1="32" x2="-5" y2="32" stroke="#ff6b6b" strokeWidth="1.5" strokeOpacity="0.6" />
                </g>

                {/* ── Central animated ring ── */}
                <circle cx="720" cy="405" r="120" fill="none" stroke="url(#arcGrad)" strokeWidth="1" strokeDasharray="8 12" className={styles.ringRotate} />
                <circle cx="720" cy="405" r="160" fill="none" stroke="#6c63ff" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4 20" className={styles.ringRotateReverse} />
                <circle cx="720" cy="405" r="80" fill="none" stroke="#00d4aa" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="6 14" className={styles.ringRotate} />

                {/* Central dot glow */}
                <circle cx="720" cy="405" r="6" fill="#6c63ff" filter="url(#glow)" className={styles.centerPulse} />
                <circle cx="720" cy="405" r="3" fill="#fff" opacity="0.8" className={styles.centerPulse} />
            </svg>
        </div>
    );
}
