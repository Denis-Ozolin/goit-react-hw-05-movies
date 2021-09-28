import { useState, useEffect } from 'react';
import { useParams, Route, NavLink, useRouteMatch } from 'react-router-dom';
import { fetchMovieDetails } from 'services/apiSettings';
import { Cast } from 'components/Cast/Cast';
import { Rewiews } from 'components/Reviews/Reviews';
import { MovieCard } from 'components/MovieCard/MovieCard';

export function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      {movie && <MovieCard detailMovie={movie} />}
      <Route path={`${path}/cast`}>
        <Cast id={movieId} />
      </Route>
      <Route path={`${path}/reviews`}>
        <Rewiews id={movieId} />
      </Route>
    </>
  );
}
