import React from 'react';
import './tailwind.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movies" data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="poster-image"
        data-testid="movie-poster"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold" data-testid="movie-title">{movie.title}</h2>
        <p className="text-sm text-gray-600" data-testid="movie-release-date">Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
