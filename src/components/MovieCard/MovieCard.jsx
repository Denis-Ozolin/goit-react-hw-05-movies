import { BASE_POSTER_URL } from '../../services/apiSettings';

export function MovieCard({ detailMovie }) {
  const { poster_path, title, vote_average, overview, genres } = detailMovie;

  return (
    <>
      <div>
        <div>
          <img src={`${BASE_POSTER_URL}${poster_path}`} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>Use Score {Math.round((vote_average * 100) / 10)}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <ul>
            Genres
            {genres.map(genre => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
