import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import '../../App.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className="movieItem">
          <Link
            to={{
              pathname: `${routes.movies}/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
