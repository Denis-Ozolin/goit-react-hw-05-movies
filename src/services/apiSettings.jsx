const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=7116d13f34d25e4b272adb87a6322482';

export const getImages = (page, type, query = '') => {
  return fetch(`${BASE_URL}${type}${API_KEY}&language=en-US${query}&page=${page}`, {
    metod: 'GET',
  })
    .then(res => res.json())
    .then(res => res)
    .catch(e => console.log(e));
};
