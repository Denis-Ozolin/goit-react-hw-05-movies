export const MovieList = ({ movies, getId }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} onClick={() => getId(movie.id)}>
          <p>{movie.original_title}</p>
        </li>
      ))}
    </ul>
  );
};
