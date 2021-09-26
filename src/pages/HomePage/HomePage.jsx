import { useState, useEffect } from 'react';
import { getImages } from '../../services/apiSettings';
import { requestType } from '../../services/requests';
import { MovieList } from 'components/MovieList/MovieList';

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const { POPULAR } = requestType;
    getImages(page, POPULAR).then(res => {
      setMovies(state => [...state, ...res.results]);
    });
  }, [page]);

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <h1>movies</h1>
      {movies.length !== 0 && <MovieList movies={movies} />}
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
}