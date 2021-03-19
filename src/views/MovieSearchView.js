import React from 'react';

const MovieSearchView = () => {
  return (
    <form>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        type="text"
        // value={this.state.query}
        // onChange={this.handleChange}
        //   autocomplete="off"
        //   autofocus
        // placeholder="Search films"
      />
    </form>
  );
};

export default MovieSearchView;
