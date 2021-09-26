import { useState, useEffect } from 'react';
import { getImages } from 'services/apiSettings';
import { requestType } from 'services/requests';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { MovieList } from 'components/MovieList/MovieList';

export function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery === '') return;
    const { SEARCH_MOVIES } = requestType;
    const query = `&query=${searchQuery}`;
    getImages(1, SEARCH_MOVIES, query).then(res => {
      setMovies(res.results);
    });
  }, [searchQuery]);

  return (
    <>
      <SearchMovieForm getQuery={setSearchQuery} />
      {movies.length !== 0 && <MovieList movies={movies} />}
    </>
  );
}
