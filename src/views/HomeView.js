import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovie } from '../utils/movieApi';
// import axios from 'axios';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await getPopularMovie()
      .then(({ results }) => {
        this.setState({ movies: results });
        // console.log(results);
      })
      .catch(error => console.log(error))
      .finally();
    //

    // this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <ul>
        {this.state.movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomeView;
