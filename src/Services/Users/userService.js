// userService.js

import { UrlConstants } from "../../constants/urlConstants";
import api from "../apiInterceptor";


/**
 * Fetch users from the API based on a search term.
 * @param {string} searchTerm - The search term for filtering users.
 * @returns {Promise<Array>} - A promise that resolves to an array of user data.
 */
export const getUsers = async (searchTerm) => {
  try {
    const response = await api.get(UrlConstants.GET_ALL_USERS(searchTerm ? searchTerm : ''));
    return response.data.results;
  } catch (error) {
    throw Error(error.response.data.detail || 'An error occurred');
  }
};
