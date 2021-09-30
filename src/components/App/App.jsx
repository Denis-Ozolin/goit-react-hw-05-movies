import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Spinner } from 'components/Spinner/Spinner';

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "home" */));
const MoviesPage = lazy(() =>
  import('pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies" */),
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details" */),
);

export function App() {
  return (
    <div>
      <AppBar />
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
    </div>
  );
}
