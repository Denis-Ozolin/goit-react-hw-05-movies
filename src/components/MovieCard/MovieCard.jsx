// import { useLocation, useHistory } from 'react-router-dom';
import { BASE_POSTER_URL } from '../../services/apiSettings';
// import { Button } from 'components/Button/Button';

export function MovieCard({ detailMovie }) {
  // const location = useLocation();
  // const history = useHistory();
  const { poster_path, title, vote_average, overview, genres } = detailMovie;

  // const handleGoBack = () => {
  //   history.push(location.state.from ? location.state.from: '/');
  // };

  return (
    <>
      {/* <Button name="Go back" onClick={handleGoBack} /> */}
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
