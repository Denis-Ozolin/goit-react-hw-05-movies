// import { ImageNotFound } from 'components/ImageNotFound/ImageNotFound';
import { useState, useEffect } from 'react';
import { fetchMovieCast, BASE_PHOTO_URL } from 'services/apiSettings';
import { ActorsList } from 'components/ActorsList/ActorsList';

export function Cast({ id }) {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieCast(id).then(res => {
      setActors(res.cast);
    });
  }, [id]);

  return <>{actors && <ActorsList actorList={actors} baseUrl={BASE_PHOTO_URL} />}</>;
}

// {actors && (
//   <ul>
//     {actors.map(actor => (
//       <li key={actor.id}>
//         <h2>{actor.name}</h2>
//         {actor.profile_path ? (
//           <img src={`${BASE_PHOTO_URL}${actor.profile_path}`} alt={actor.name} />
//         ) : (
//           <ImageNotFound/>
//         )}
//       </li>
//     ))}
//   </ul>
// )}
