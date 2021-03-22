import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { getMovieById } from '../utils/movieApi';
import MovieDetailsPage from '../components/MovieDetailsPage';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import routes from '../routes';

import '../App.css';

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

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

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
        <button type="button" className="goBackBtn" onClick={this.handleGoBack}>
          Go back
        </button>
        <MovieDetailsPage
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          release_date={release_date}
          overview={overview}
          genres={genres}
        />
        <div className="additionalInformWraper">
          <h2 className="additionalInform">Adittional information</h2>
          <ul>
            <li className="additionalInformItem">
              <NavLink
                to={`${match.url}/cast`}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                Cast
              </NavLink>
            </li>
            <li className="additionalInformItem">
              <NavLink
                to={`${match.url}/reviews`}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

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
