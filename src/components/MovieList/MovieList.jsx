import { useRouteMatch } from 'react-router-dom';
import { List, Movie } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const { path } = useRouteMatch();

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Movie to={{ pathname: `/movies/${movie.id}`, state: { from: path } }}>
            {movie.original_title}
          </Movie>
        </li>
      ))}
    </List>
  );
};
