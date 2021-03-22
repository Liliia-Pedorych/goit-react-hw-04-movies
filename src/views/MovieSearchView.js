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
    return (
      <>
        <MoviesPage onSubmit={this.onChangeSearchQuery} />
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MovieSearchView;
