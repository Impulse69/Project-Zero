/**
 * Sports API Configuration
 * ESPN (unofficial, no auth) + TheSportsDB (free tier, key 3)
 */

export const ESPN_BASE = 'https://site.api.espn.com/apis/site/v2/sports';
export const SPORTSDB_BASE = 'https://www.thesportsdb.com/api/v1/json/3';

// ESPN league identifiers
export const ESPN_LEAGUES = {
    premierLeague: { sport: 'soccer', league: 'eng.1', name: 'Premier League' },
    laLiga: { sport: 'soccer', league: 'esp.1', name: 'La Liga' },
    serieA: { sport: 'soccer', league: 'ita.1', name: 'Serie A' },
    bundesliga: { sport: 'soccer', league: 'ger.1', name: 'Bundesliga' },
    ligue1: { sport: 'soccer', league: 'fra.1', name: 'Ligue 1' },
    championsLeague: { sport: 'soccer', league: 'uefa.champions', name: 'Champions League' },
    mls: { sport: 'soccer', league: 'usa.1', name: 'MLS' },
    ghanaPremier: { sport: 'soccer', league: 'gha.1', name: 'Ghana Premier League' },
};

// TheSportsDB league IDs
export const SPORTSDB_LEAGUES = {
    premierLeague: '4328',
    championsLeague: '4480',
    ghanaPremier: '4855',
};

// Cache TTLs (in milliseconds)
export const CACHE_TTL = {
    scores: 60 * 1000,         // 1 minute for live scores
    fixtures: 5 * 60 * 1000,   // 5 minutes for upcoming fixtures
    standings: 30 * 60 * 1000, // 30 minutes for standings
    teams: 60 * 60 * 1000,     // 1 hour for team data
};

// Default leagues to show on the homepage ticker
export const DEFAULT_TICKER_LEAGUES = [
    'premierLeague',
    'championsLeague',
    'laLiga',
];
