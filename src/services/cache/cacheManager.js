/**
 * Client-side cache manager using localStorage
 * Each entry stores data + timestamp, and expires based on a TTL.
 */

const CACHE_PREFIX = 'sp_cache_';

export const cacheManager = {
    /**
     * Store data with a TTL
     * @param {string} key
     * @param {*} data
     * @param {number} ttl - Time-to-live in milliseconds
     */
    set(key, data, ttl) {
        try {
            const entry = {
                data,
                timestamp: Date.now(),
                ttl,
            };
            localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(entry));
        } catch (err) {
            console.warn('[Cache] Failed to write:', err.message);
        }
    },

    /**
     * Retrieve data if not expired
     * @param {string} key
     * @returns {*|null} Cached data or null if expired/missing
     */
    get(key) {
        try {
            const raw = localStorage.getItem(CACHE_PREFIX + key);
            if (!raw) return null;

            const { data, timestamp, ttl } = JSON.parse(raw);
            if (Date.now() - timestamp > ttl) {
                localStorage.removeItem(CACHE_PREFIX + key);
                return null;
            }

            return data;
        } catch (err) {
            console.warn('[Cache] Failed to read:', err.message);
            return null;
        }
    },

    /**
     * Remove a specific cache entry
     */
    remove(key) {
        localStorage.removeItem(CACHE_PREFIX + key);
    },

    /**
     * Clear all cache entries
     */
    clear() {
        const keys = Object.keys(localStorage).filter((k) => k.startsWith(CACHE_PREFIX));
        keys.forEach((k) => localStorage.removeItem(k));
    },
};
