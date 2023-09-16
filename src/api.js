// src/api.js
const API_KEY = 'https://image.tmdb.org/t/p/w500/73e936ed956d1752c829a51b2cad2d32'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

// Function to fetch data from the TMDB API
export const fetchData = async (endpoint, queryParams = {}) => {
  try {
    const queryString = new URLSearchParams({ ...queryParams, api_key: API_KEY }).toString();
    const response = await fetch(`${BASE_URL}${endpoint}?${queryString}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    // Handle API request errors
    throw error;
  }
};
