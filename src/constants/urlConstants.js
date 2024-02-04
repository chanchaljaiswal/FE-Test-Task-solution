
/**
 * URL Constants for API endpoints
 */
export const UrlConstants = {
    // Base URL for the Star Wars API
    BASE_URL: "https://swapi.dev/api",
  
    /**
     * Endpoint to get all users with a search term.
     * @param {string} search - The search term for filtering users.
     * @returns {string} - The complete URL for fetching users.
     */
    GET_ALL_USERS: (search) => `/people/?search=${search}`
  };
  