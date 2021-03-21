import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { getMovieById } from '../utils/movieApi';
import MovieDetailsPage from '../components/MovieDetailsPage';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

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
        // console.log(data);
      })
      .catch(error => console.log(error))
      .finally();
  }

  render() {
    const {
      poster_path,
      title,
      vote_average,
      release_date,
      overview,
      genres,
    } = this.state;

    const { match } = this.props;
    return (
      <>
        <MovieDetailsPage
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          release_date={release_date}
          overview={overview}
          genres={genres}
        />
        <h2>Adittional information</h2>
        <ul>
          <li>
            <NavLink
              to={`${match.url}/cast`}
              lassName="NavLink"
              activeClassName="NavLink--active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/reviews`}
              lassName="NavLink"
              activeClassName="NavLink--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>

        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
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
