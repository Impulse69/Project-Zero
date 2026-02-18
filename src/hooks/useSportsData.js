import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchMultiLeagueScores, fetchScores, fetchStandings } from '@services/api/sportsApi';
import { cacheManager } from '@services/cache/cacheManager';
import { CACHE_TTL, DEFAULT_TICKER_LEAGUES } from '@services/api/apiConfig';

/**
 * Custom hook for fetching sports data with caching and auto-refresh.
 *
 * @param {'scores'|'standings'} type - Type of data to fetch
 * @param {string|string[]} leagues - League key(s) from apiConfig
 * @param {object} options
 * @param {number} options.refreshInterval - Auto-refresh interval in ms (0 to disable)
 * @param {boolean} options.enabled - Whether to fetch (default true)
 * @returns {{ data: Array, loading: boolean, error: string|null, refetch: Function }}
 */
export function useSportsData(type = 'scores', leagues = DEFAULT_TICKER_LEAGUES, options = {}) {
    const { refreshInterval = CACHE_TTL[type] || 60000, enabled = true } = options;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const intervalRef = useRef(null);

    const cacheKey = `${type}_${Array.isArray(leagues) ? leagues.join('_') : leagues}`;
    const ttl = CACHE_TTL[type] || 60000;

    const fetchData = useCallback(async () => {
        // Check cache first
        const cached = cacheManager.get(cacheKey);
        if (cached) {
            setData(cached);
            setLoading(false);
            return;
        }

        try {
            let result = [];

            if (type === 'scores') {
                if (Array.isArray(leagues)) {
                    result = await fetchMultiLeagueScores(leagues);
                } else {
                    result = await fetchScores(leagues);
                }
            } else if (type === 'standings') {
                const leagueKey = Array.isArray(leagues) ? leagues[0] : leagues;
                result = await fetchStandings(leagueKey);
            }

            if (result.length > 0) {
                cacheManager.set(cacheKey, result, ttl);
            }

            setData(result);
            setError(null);
        } catch (err) {
            console.error('[useSportsData] Error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [type, cacheKey, ttl, leagues]);

    useEffect(() => {
        if (!enabled) return;

        fetchData();

        if (refreshInterval > 0) {
            intervalRef.current = setInterval(fetchData, refreshInterval);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [fetchData, refreshInterval, enabled]);

    return { data, loading, error, refetch: fetchData };
}
