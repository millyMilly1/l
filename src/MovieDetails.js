import React, { useEffect, useState } from 'react';

const MovieDetails = ({ movieId }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // Fetch movie details by ID from TMDB API
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=73e936ed956d1752c829a51b2cad2d32`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    // Loading indicator or error handling
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">Release Date: {movieDetails.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetails;
