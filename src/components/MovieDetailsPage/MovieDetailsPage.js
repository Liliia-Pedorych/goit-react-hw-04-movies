import React from 'react';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = ({
  poster_path,
  title,
  vote_average,
  release_date,
  overview,
  genres,
}) => {
  return (
    <div className={styles.wraper}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className={styles.poster}
      />
      <div className={styles.movieInfoWraper}>
        <h2> {title}</h2>

        <h3>Genres: </h3>

        <p className={styles.genres}>
          {genres.map(genre => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </p>
        <h3>Release date: </h3>
        <p>{release_date}</p>

        <h3>Overview: </h3>
        <p>{overview}</p>
        <p className={styles.rating}>Rating: {vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
