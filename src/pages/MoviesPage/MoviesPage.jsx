import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'services/apiSettings';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from 'components/StyledHeading/Title.styled';

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
      {searchQuery && movies.length !== 0 && <Title>Search movies</Title>}
      {searchQuery && movies.length !== 0 && <MovieList movies={movies} />}
    </>
  );
}
