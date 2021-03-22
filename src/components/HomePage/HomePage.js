import React, { Component } from 'react';
import MovieList from '../MovieList';
import styles from './HomePage.module.css';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.wraper}>
        <h1 className={styles.title}>Trending today</h1>
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

export default HomePage;
