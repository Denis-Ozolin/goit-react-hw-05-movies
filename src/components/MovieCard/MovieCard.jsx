import { BASE_POSTER_URL } from '../../services/apiSettings';
import { Card, Poster, CardInfo, Score, Description } from './MovieCard.styled';
import { Title } from 'components/StyledHeading/Title.styled';

export function MovieCard({ detailMovie }) {
  const { poster_path, title, vote_average, overview, genres } = detailMovie;

  return (
    <Card>
      <Poster>
        <img src={`${BASE_POSTER_URL}${poster_path}`} alt={title} />
      </Poster>
      <CardInfo>
        <Title>{title}</Title>
        <Score>
          Use Score:
          <span>{Math.round((vote_average * 100) / 10)}%</span>
        </Score>
        <Description>{overview}</Description>
        <h4>Genres:</h4>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
      </CardInfo>
    </Card>
  );
}
