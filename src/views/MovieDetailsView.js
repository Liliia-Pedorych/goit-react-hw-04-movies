import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovieById } from '../utils/movieApi';
import MovieDetailsPage from '../components/MovieDetailsPage';

// import axios from 'axios';

class MovieDetailsView extends Component {
  state = {
    poster_path: '',
    title: null,
    overview: null,
    genres: [],
    vote_average: null,
    release_date: '',
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await getMovieById(movieId)
      .then(data => {
        this.setState({ ...data });
      })
      .catch(error => console.log(error))
      .finally();
  }

  getGenres = () => {
    const genreName = this.state.genres.map(genre => genre.name);
    return genreName.join(', ');
  };

  render() {
    const {
      poster_path,
      title,
      vote_average,
      release_date,
      overview,
    } = this.state;
    return (
      <>
        <MovieDetailsPage
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          release_date={release_date}
          overview={overview}
          ganres={this.getGenres}
        />
        <ul>
          <li>
            <Link
            // to={`/movies/${movie.id}`}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
            // to={`/movies/${movie.id}`}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default MovieDetailsView;

//   async componentDidMount() {
//     const apiKey = '34bc77a7520537f31b17bec90ff2ee3c';
//     axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
//     const { movieId } = this.props.match.params;
//     const response = await axios.get(
//       `/movie/${movieId}?api_key=${apiKey}&language=en-US`,
//     );
//     this.setState({ ...response.data });
//     // this.setState({ movies: response.data });
//     console.log(this.state);
//   }
