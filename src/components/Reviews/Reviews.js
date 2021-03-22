import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getMovieReviews } from '../../utils/movieApi';
import styles from './Reviews.module.css';

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
          <ul className={styles.reviewsList}>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p className={styles.reviewsAuthor}>Name: {author}</p>
                <p className={styles.reviewsText}>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};
