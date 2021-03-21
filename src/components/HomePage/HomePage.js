import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import styles from './HomePage.module.css';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.wraper}>
        <h1 className={styles.title}>Trending today</h1>
        <ul>
          {this.props.movies.map(movie => (
            <li key={movie.id} className={styles.movieItem}>
              <Link to={`${routes.movies}/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
