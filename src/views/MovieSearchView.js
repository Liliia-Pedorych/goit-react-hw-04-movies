import React, { Component } from 'react';
import { searchMovie } from '../utils/movieApi';
import MoviesPage from '../components/MoviesPage';
import MovieList from '../components/MovieList';
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
    const { movies } = this.state;
    return (
      <>
        <MoviesPage onSubmit={this.onChangeSearchQuery} />
        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}

export default MovieSearchView;
