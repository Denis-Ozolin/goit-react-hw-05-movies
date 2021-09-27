import { useState, useEffect } from 'react';
import { fetchMovie } from '../../services/apiSettings';
import { requestType } from '../../services/requests';
import { MovieList } from 'components/MovieList/MovieList';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';

export function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState('');

  useEffect(() => {
    const { POPULAR } = requestType;
    const currentPage = `&page=${page}`;
    fetchMovie(currentPage, POPULAR).then(res => {
      setMovies(state => [...state, ...res.results]);
    });
  }, [page]);

  //   useEffect(() => {
  //   if (movieId === '') return;
  //   console.log(movieId);
  // }, [movieId])

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <h1>movies</h1>
      {movieId !== '' && <MovieDetailsPage id={movieId} />}
      {movies.length !== 0 && <MovieList movies={movies} getId={setMovieId} />}
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </>
  );
}
