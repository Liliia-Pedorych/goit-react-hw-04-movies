import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

class HomePage extends Component {
  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.props.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${routes.movies}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
