import React, { Component } from 'react';
import { getPopularMovie } from '../utils/movieApi';
import HomePage from '../components/HomePage';

// import axios from 'axios';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await getPopularMovie()
      .then(({ results }) => {
        this.setState({ movies: results });
        // console.log(this.state.movies);
      })
      .catch(error => console.log(error))
      .finally();
  }

  render() {
    return <>{this.state.movies && <HomePage movies={this.state.movies} />}</>;
  }
}

export default HomeView;
