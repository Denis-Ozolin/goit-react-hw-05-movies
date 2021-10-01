import { ImageNotFound } from 'components/ImageNotFound/ImageNotFound';
import { List } from './ActorsList.styled';

export const ActorsList = ({ actorList, baseUrl }) => {
  return (
    <List>
      {actorList.map(actor => (
        <li key={actor.id}>
          {actor.profile_path ? (
            <img src={`${baseUrl}${actor.profile_path}`} alt={actor.name} />
          ) : (
            <ImageNotFound />
          )}
          <h2>{actor.name}</h2>
        </li>
      ))}
    </List>
  );
};
