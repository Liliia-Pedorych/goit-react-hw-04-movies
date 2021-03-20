import React from 'react';

const MovieDetailsPage = ({
  poster_path,
  title,
  vote_average,
  release_date,
  overview,
  getGenres,
}) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h1> {title}</h1>
      <p>Rating: {vote_average}</p>
      <p>
        Genres:
        {getGenres}
      </p>
      <p>Release date: {release_date}</p>
      <p>Overview: {overview}</p>
    </>
  );
};

export default MovieDetailsPage;

// import React, { Component } from 'react';
// // import React from 'react';

// class MovieDetailsPage extends Component {
//   state = {
//     poster_path: '',
//     title: null,
//     overview: null,
//     genres: [],
//     vote_average: null,
//     release_date: '',
//   };

//   getGenres = () => {
//     const genreName = this.state.genres.map(genre => genre.name);
//     return genreName.join(', ');
//   };

//   render() {
//     const {
//       poster_path,
//       title,
//       vote_average,
//       release_date,
//       overview,
//       ganres,
//     } = this.state;

//     return (
//       <>
//         <img
//           src={`https://image.tmdb.org/t/p/w500${poster_path}`}
//           alt={title}
//         />
//         <h1> {title}</h1>
//         <p>Rating: {vote_average}</p>
//         <p>Genres: {this.getGenres}</p>
//         <p>Release date: {release_date}</p>
//         <p>Overview: {overview}</p>
//       </>
//     );
//   }
// }

// // const MovieDetailsPage = ({
// //   poster_path,
// //   title,
// //   vote_average,
// //   release_date,
// //   overview,
// //   getGenres,
// // }) => {
// //   return (
// //     <>
// //       <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
// //       <h1> {title}</h1>
// //       <p>Rating: {vote_average}</p>
// //       <p>Genres: {getGenres}</p>
// //       <p>Release date: {release_date}</p>
// //       <p>Overview: {overview}</p>
// //     </>
// //   );
// // };

// export default MovieDetailsPage;
