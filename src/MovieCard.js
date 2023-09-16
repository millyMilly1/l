import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="max-w-xs bg-red shadow-lg rounded-lg overflow-hidden" data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
        className="w-full h-auto"
      />
       <div className="p-4">
        <h2 className="text-xl font-semibold" data-testid="movie-title">
          {movie.title}
        </h2>
        <p className="text-gray-600" data-testid="movie-release-date">
          Release Date: {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
