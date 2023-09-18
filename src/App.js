
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
//import { fetchData } from './api';
import 'tailwindcss/tailwind.css'; 
//import MovieDetails from './MovieDetails';

const App = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    // Fetch top 10 movies from TMDB API
    async function fetchTopMovies() {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=73e936ed956d1752c829a51b2cad2d32'
        );
        const data = await response.json();
        setTopMovies(data.results.slice(0, 10));
      } catch (error) {
        console.error('Error fetching top movies:', error);
      }
    }

    fetchTopMovies();
  }, []);

  return (
    <div>
      <h1>Top 10 Movies</h1>
      <div className="movie-grid">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;