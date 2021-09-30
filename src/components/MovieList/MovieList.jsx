import { Link, useRouteMatch } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const { path } = useRouteMatch();

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={{ pathname: `/movies/${movie.id}`, state: { from: path } }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
