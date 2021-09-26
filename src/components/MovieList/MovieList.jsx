export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <a href="/">{movie.original_title}</a>
        </li>
      ))}
    </ul>
  );
};
