import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../../services/apiSettings';
import { MovieList } from 'components/MovieList/MovieList';
import { Button } from 'components/Button/Button';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopularMovies(page).then(res => {
      setMovies(state => [...state, ...res.results]);
    });
  }, [page]);

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <h1>Trending movies</h1>
      {movies.length !== 0 && <MovieList movies={movies} />}
      <Button name="Load more" onClick={onLoadMore} />
    </>
  );
}
