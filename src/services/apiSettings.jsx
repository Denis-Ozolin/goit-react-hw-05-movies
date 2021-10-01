const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=7116d13f34d25e4b272adb87a6322482';

export const BASE_PHOTO_URL = 'https://image.tmdb.org/t/p/w200';
export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
export const DEFAULT_PHOTO =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

export const fetchPopularMovies = page => {
  return fetch(`${BASE_URL}trending/movie/day${API_KEY}&page=${page}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};

export const fetchSearchMovies = (query, page = 1) => {
  return fetch(`${BASE_URL}search/movie${API_KEY}&query=${query}&page=${page}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};

export const fetchMovieDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}${API_KEY}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};

export const fetchMovieCast = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/credits${API_KEY}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};

export const fetchMovieReviews = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/reviews${API_KEY}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};
