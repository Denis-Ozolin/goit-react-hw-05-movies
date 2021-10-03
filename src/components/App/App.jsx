import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MoviesInfoHeader } from 'components/MoviesInfoHeader/MoviesInfoHeader';
import { Spinner } from 'components/Spinner/Spinner';
import { Container } from './App.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "home" */));
const MoviesPage = lazy(() =>
  import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies" */),
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details" */),
);

export function App() {
  return (
    <Container>
      <MoviesInfoHeader />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
}
