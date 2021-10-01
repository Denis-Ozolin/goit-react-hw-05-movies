import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Route, Switch, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { fetchMovieDetails } from 'services/apiSettings';
import { StyledButton } from 'components/Button/Button.styled';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Navigation, StyledNavLink } from './MovieDetailsPage.styled';
import { Title } from 'components/StyledHeading/Title.styled';
import { Spinner } from 'components/Spinner/Spinner';

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
    history.push(location.state?.from ? location.state.from : '/');
  };

  return (
    <div>
      <StyledButton onClick={handleGoBack}>Go back</StyledButton>
      {movie && <MovieCard detailMovie={movie}></MovieCard>}
      <Navigation>
        <Title>{'Additional information ->'}</Title>
        <ul>
          <li>
            <StyledNavLink to={{ ...location, pathname: `${url}/cast` }}>Cast</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={{ ...location, pathname: `${url}/reviews` }}>Reviews</StyledNavLink>
          </li>
        </ul>
      </Navigation>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${url}/cast`}>
            <Cast id={movieId} />
          </Route>
          <Route path={`${url}/reviews`}>
            <Rewiews id={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
