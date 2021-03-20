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
    .get(
      `/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(response => response.data);
};

const getMovieById = movieId => {
  return axios
    .get(`/movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(response => response.data);
};

// const getImages = ({ searchQuery = '', page = 1 }) => {
//   const apiKey = '19832494-5cd14cdef5946ada4556f0091';
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(res => res.data.hits);
// };

export { getPopularMovie, searchMovie, getMovieById };
