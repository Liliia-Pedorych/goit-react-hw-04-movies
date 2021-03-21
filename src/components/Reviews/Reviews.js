import React, { Component } from 'react';
import { getMovieReviews } from '../../utils/movieApi';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await getMovieReviews(movieId)
      .then(({ results }) => {
        this.setState({ reviews: results });
        // console.log(results);
        // console.log(this.state.reviews);
      })
      .catch(error => console.log(error))
      .finally();
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {!reviews.length && <p>We don`t have reviews for this movie</p>}
        {reviews.length > 0 && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>Name: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;

// //   async componentDidMount() {
// //     const apiKey = '34bc77a7520537f31b17bec90ff2ee3c';
// //     axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// //     const { movieId } = this.props.match.params;
// //     const response = await axios.get(
// //       `/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
// //     );
// //     // this.setState({ ...response.data });
// //     this.setState({ cast: response.data.cast });
// //     console.log(response.data.cast);
// //     console.log(this.state.cast);
// //   }
