import { useState, useEffect } from 'react';
import { fetchMovie } from 'services/apiSettings';
import { requestType } from 'services/requests';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { MovieList } from 'components/MovieList/MovieList';

export function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState('');

  useEffect(() => {
    if (searchQuery === '') return;
    const { SEARCH_MOVIES } = requestType;
    const query = `&query=${searchQuery}`;
    const currentPage = `&page=${1}`;
    fetchMovie(currentPage, SEARCH_MOVIES, query).then(res => {
      setMovies(res.results);
    });
  }, [searchQuery]);

  return (
    <>
      {movieId !== '' && <MovieDetailsPage id={movieId} />}
      <SearchMovieForm getQuery={setSearchQuery} />
      {movies.length !== 0 && <MovieList movies={movies} getId={setMovieId} />}
    </>
  );
}
