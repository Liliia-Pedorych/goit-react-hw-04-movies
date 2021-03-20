import React, { Component } from 'react';
// import { searchMovie } from '../utils/movieApi';
import { Link } from 'react-router-dom';
import MoviesPage from '../components/MoviesPage';

import axios from 'axios';

class MovieSearchView extends Component {
  state = {
    movies: [],
    query: '',
  };

  // async componentDidMount() {
  //   await searchMovie()
  //     .then(({ results }) => {
  //       this.setState({ movies: results });
  //       console.log(results);
  //     })
  //     .catch(error => console.log(error))
  //     .finally();
  // }

  onChangeSearchQuery = query => {
    const apiKey = '34bc77a7520537f31b17bec90ff2ee3c';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

    axios
      .get(
        `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
      .then(response => response.data)
      .then(({ results }) => {
        this.setState({ movies: results });
        // console.log(results);
      })
      .catch(error => console.log(error))
      .finally();
    // console.log(this.state.movies);

    // this.setState({
    //   images: [],
    //   searchQuery: query,
    //   page: 1,
    //   error: null,
    // });
  };

  render() {
    return (
      <>
        <MoviesPage onSubmit={this.onChangeSearchQuery} />
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
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

// async componentDidMount() {
//   const apiKey = '34bc77a7520537f31b17bec90ff2ee3c';
//   axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

//   const response = await axios.get(
//     `trending/movie/day?api_key=${apiKey}&language=en-US`,
//     // `search/movie?api_key=${apiKey}&language=en-US&query=${this.state.query.replace(
//     //   ' ',
//     //   '+',
//     // )}`,
//   );
//   console.log(response.data.results);

//   this.setState({ movies: response.data.results });
