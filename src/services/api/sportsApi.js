/**
 * Sports API Client
 * Fetches live scores, fixtures, and standings from ESPN's public API.
 * Falls back to static data on failure.
 */

import { ESPN_BASE, ESPN_LEAGUES } from './apiConfig';

/**
 * Fetch with timeout and error handling
 */
async function safeFetch(url, timeoutMs = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);

        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        clearTimeout(id);
        console.warn(`[SportsAPI] Fetch failed for ${url}:`, error.message);
        return null;
    }
}

/**
 * Normalize an ESPN event into a simple match object
 */
function normalizeESPNEvent(event) {
    const competition = event.competitions?.[0];
    if (!competition) return null;

    const competitors = competition.competitors || [];
    const home = competitors.find((c) => c.homeAway === 'home') || competitors[0];
    const away = competitors.find((c) => c.homeAway === 'away') || competitors[1];

    if (!home || !away) return null;

    const status = competition.status || event.status;
    const statusType = status?.type?.name || 'STATUS_SCHEDULED';

    return {
        id: event.id,
        name: event.name || `${home.team?.displayName} vs ${away.team?.displayName}`,
        date: event.date,
        status: statusType,
        statusDetail: status?.type?.shortDetail || status?.type?.detail || '',
        displayClock: status?.displayClock || '',
        period: status?.period || 0,
        isLive: statusType === 'STATUS_IN_PROGRESS' || statusType === 'STATUS_HALFTIME',
        isCompleted: statusType === 'STATUS_FINAL',
        home: {
            name: home.team?.displayName || home.team?.shortDisplayName || 'Home',
            abbreviation: home.team?.abbreviation || '',
            logo: home.team?.logo || '',
            score: home.score || '0',
        },
        away: {
            name: away.team?.displayName || away.team?.shortDisplayName || 'Away',
            abbreviation: away.team?.abbreviation || '',
            logo: away.team?.logo || '',
            score: away.score || '0',
        },
    };
}

/**
 * Fetch live/recent scores for a league
 * @param {string} leagueKey - Key from ESPN_LEAGUES (e.g. 'premierLeague')
 * @returns {Promise<Array>} Array of normalized match objects
 */
export async function fetchScores(leagueKey) {
    const league = ESPN_LEAGUES[leagueKey];
    if (!league) {
        console.warn(`[SportsAPI] Unknown league key: ${leagueKey}`);
        return [];
    }

    const url = `${ESPN_BASE}/${league.sport}/${league.league}/scoreboard`;
    const data = await safeFetch(url);

    if (!data?.events) return [];

    return data.events
        .map(normalizeESPNEvent)
        .filter(Boolean);
}

/**
 * Fetch standings for a league
 * @param {string} leagueKey - Key from ESPN_LEAGUES
 * @returns {Promise<Array>} Array of team standing objects
 */
export async function fetchStandings(leagueKey) {
    const league = ESPN_LEAGUES[leagueKey];
    if (!league) return [];

    const url = `${ESPN_BASE}/${league.sport}/${league.league}/standings`;
    const data = await safeFetch(url);

    if (!data?.children?.[0]?.standings?.entries) return [];

    return data.children[0].standings.entries.map((entry) => ({
        team: entry.team?.displayName || '',
        abbreviation: entry.team?.abbreviation || '',
        logo: entry.team?.logos?.[0]?.href || '',
        stats: Object.fromEntries(
            (entry.stats || []).map((s) => [s.abbreviation || s.name, s.displayValue || s.value])
        ),
    }));
}

/**
 * Fetch scores from multiple leagues at once
 * @param {string[]} leagueKeys - Array of league keys
 * @returns {Promise<Array>} Flat array of all matches across leagues
 */
export async function fetchMultiLeagueScores(leagueKeys) {
    const results = await Promise.allSettled(
        leagueKeys.map((key) => fetchScores(key))
    );

    return results
        .filter((r) => r.status === 'fulfilled')
        .flatMap((r) => r.value);
}
