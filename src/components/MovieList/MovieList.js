import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import '../../App.css';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className="movieItem">
          <Link to={`${routes.movies}/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
