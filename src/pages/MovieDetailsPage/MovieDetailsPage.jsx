import { useState, useEffect } from 'react';
import { useParams, Route, NavLink, useRouteMatch } from 'react-router-dom';
import { fetchMovieDetails } from 'services/apiSettings';
import { Cast } from 'components/Cast/Cast';
import { Rewiews } from 'components/Reviews/Reviews';

export function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => {
      setMovie(res.title);
    });
  }, [movieId]);

  return (
    <>
      <h1>{movie}</h1>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Route path={`${url}/cast`}>
        <Cast id={movieId} />
      </Route>
      <Route path={`${url}/reviews`}>
        <Rewiews id={movieId} />
      </Route>
    </>
  );
}
