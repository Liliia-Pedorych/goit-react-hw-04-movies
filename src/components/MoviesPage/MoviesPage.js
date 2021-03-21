import React, { Component } from 'react';
import styles from './MoviePage.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    // console.log(this.state.query);
    // console.log(this.state.movies);
  };

  render() {
    return (
      <div className={styles.searchBar}>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <button type="submit" className={styles.searchFormButton}></button>

          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            className={styles.searchFormInput}
          />
        </form>
        {/* <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default MoviesPage;
