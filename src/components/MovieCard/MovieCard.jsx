export const MovieCard = () => {
  return (
    <div>
      <div>
        <img src="#" alt="movie.title" />
      </div>
      <div>
        <h2>Movie name</h2>
        <p>Use Score %</p>
        <p>Description</p>
        <ul>
          Genres
          <li>Scary movie</li>
        </ul>
      </div>
    </div>
  );
};

// genres.map(ganre => {
//   <li key={genre.id}>{genre.title}</li>
// })
