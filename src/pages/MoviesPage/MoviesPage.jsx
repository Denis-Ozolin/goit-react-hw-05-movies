import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'services/apiSettings';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { MovieList } from 'components/MovieList/MovieList';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchQuery === '') return;
    fetchSearchMovies(searchQuery).then(res => {
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
