import React, { Component } from 'react';
import { searchMovie } from '../utils/movieApi';
import { Link } from 'react-router-dom';
import MoviesPage from '../components/MoviesPage';
import '../App.css';

class MovieSearchView extends Component {
  state = {
    movies: [],
    query: '',
  };

  onChangeSearchQuery = query => {
    searchMovie(query)
      .then(({ results }) => {
        this.setState({ movies: results });
        // console.log(results);
      })
      .catch(error => console.log(error))
      .finally();
  };

  render() {
    return (
      <>
        <MoviesPage onSubmit={this.onChangeSearchQuery} />
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id} className="movieItem">
              <Link to={`${this.props.match.url}/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MovieSearchView;
