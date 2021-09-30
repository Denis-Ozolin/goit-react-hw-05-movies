import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/apiSettings';
import { Button } from 'components/Button/Button';
import { MovieCard } from 'components/MovieCard/MovieCard';

const Cast = lazy(() => import('components/Cast/Cast' /* webpackChunkName: "cast" */));
const Rewiews = lazy(() => import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => setMovie(res));
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location.state.from ? location.state.from : '/');
  };

  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to={{ ...location, pathname: `${url}/cast` }}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={{ ...location, pathname: `${url}/reviews` }}>Reviews</NavLink>
        </li>
      </ul>
      <Button name="Go back" onClick={handleGoBack} />
      {movie && <MovieCard detailMovie={movie} />}
      <Suspense fallback={null}>
        <Route path={`${url}/cast`} exact>
          <Cast id={movieId} />
        </Route>
        <Route path={`${url}/reviews`} exact>
          <Rewiews id={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
