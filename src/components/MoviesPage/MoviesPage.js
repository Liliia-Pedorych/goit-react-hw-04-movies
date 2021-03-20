import React, { Component } from 'react';

class MoviesPage extends Component {
  state = {
    // movies: [],
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
      <>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            //   autocomplete="off"
            //   autofocus
            placeholder="Search films"
          />
        </form>
        {/* <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default MoviesPage;
