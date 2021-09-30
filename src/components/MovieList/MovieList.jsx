import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={{ ...location, pathname: `/movies/${movie.id}` }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
