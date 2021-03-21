import axios from 'axios';

const apiKey = '34bc77a7520537f31b17bec90ff2ee3c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const getPopularMovie = () => {
  return axios
    .get(`trending/movie/day?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

const searchMovie = query => {
  return axios
    .get(`/search/movie?api_key=${apiKey}&language=en-US&query=${query}`)
    .then(response => response.data);
};

const getMovieById = movieId => {
  return axios
    .get(`/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

const getMovieCast = movieId => {
  return axios
    .get(`/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

const getMovieReviews = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

export {
  getPopularMovie,
  searchMovie,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};
