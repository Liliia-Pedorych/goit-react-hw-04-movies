import React, { Component } from 'react';
import { getMovieReviews } from '../../utils/movieApi';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await getMovieReviews(movieId)
      .then(data => {
        this.setState({ reviews: data.results });
        // console.log(data.results);
        console.log(this.state.reviews);
      })
      .catch(error => console.log(error))
      .finally();
  }

  render() {
    return (
      //   <h1>Reviews</h1>
      <ul>
        {this.state.reviews.map(item => (
          <li key={item.id}>
            <p>Name: {item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
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
