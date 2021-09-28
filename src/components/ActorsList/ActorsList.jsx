import { ImageNotFound } from 'components/ImageNotFound/ImageNotFound';

export const ActorsList = ({ actorList, baseUrl }) => {
  return (
    <ul>
      {actorList.map(actor => (
        <li key={actor.id}>
          <h2>{actor.name}</h2>
          {actor.profile_path ? (
            <img src={`${baseUrl}${actor.profile_path}`} alt={actor.name} />
          ) : (
            <ImageNotFound />
          )}
        </li>
      ))}
    </ul>
  );
};
