import React, { Component } from 'react';
import { getMovieCast } from '../../utils/movieApi';
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

  render() {
    return (
      <div className={styles.castWraper}>
        <ul className={styles.castList}>
          {this.state.cast.map(({ cast_id, profile_path, name, character }) => (
            <li key={cast_id} className={styles.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={styles.actorPhoto}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;

//   async componentDidMount() {
//     const apiKey = '34bc77a7520537f31b17bec90ff2ee3c';
//     axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
//     const { movieId } = this.props.match.params;
//     const response = await axios.get(
//       `/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
//     );
//     // this.setState({ ...response.data });
//     this.setState({ cast: response.data.cast });
//     console.log(response.data.cast);
//     console.log(this.state.cast);
//   }
