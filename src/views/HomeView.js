import React, { Component } from 'react';
import axios from 'axios';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const apiKey = '34bc77a7520537f31b17bec90ff2ee3c';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3';
    const response = await axios.get(`/trending/movie/day?api_key=${apiKey}`);
    console.log(response.data.results);

    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <ul>
        {this.state.movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    );
  }
}

export default HomeView;
