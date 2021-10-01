import { ImageNotFound } from 'components/ImageNotFound/ImageNotFound';
import { List, Item } from './ActorsList.styled';

export const ActorsList = ({ actorList, baseUrl }) => {
  return (
    <List>
      {actorList.map(actor => (
        <Item key={actor.id}>
          <div>
            {actor.profile_path ? (
              <img src={`${baseUrl}${actor.profile_path}`} alt={actor.name} />
            ) : (
              <ImageNotFound />
            )}
            <p>{actor.name}</p>
          </div>
        </Item>
      ))}
    </List>
  );
};
