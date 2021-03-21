import React from 'react';

const MovieDetailsPage = ({
  poster_path,
  title,
  vote_average,
  release_date,
  overview,
  genres,
}) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h1> {title}</h1>
      <p>Rating: {vote_average}</p>
      <p>
        Genres:
        {genres.map(genre => (
          <li key={genre.name}>{genre.name}</li>
        ))}
      </p>
      <p>Release date: {release_date}</p>
      <p>Overview: {overview}</p>
    </>
  );
};

export default MovieDetailsPage;
