import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getMovieCast } from '../../utils/movieApi';
import defaultImage from '../../images/default.jpg';

import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await getMovieCast(movieId)
      .then(({ cast }) => {
        this.setState({ cast: cast });
        // console.log(cast);
      })
      .catch(error => console.log(error))
      .finally();
    //
  }

  profileUrl = path => {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : defaultImage;
  };

  render() {
    const { cast } = this.state;

    return (
      <>
        {!cast.length && (
          <p>Sorry, we don`t have information about cast of this movie</p>
        )}
        {cast.length > 0 && (
          <div className={styles.castWraper}>
            <ul className={styles.castList}>
              {this.state.cast.map(
                ({ cast_id, profile_path, name, character }) => (
                  <li key={cast_id} className={styles.castItem}>
                    <img
                      src={this.profileUrl(profile_path)}
                      alt={name}
                      className={styles.actorPhoto}
                    />
                    <p>Name: {name}</p>
                    <p>Character: {character}</p>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Cast;

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ),
};
