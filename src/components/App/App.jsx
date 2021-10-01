import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
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
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
