import { useState, useEffect } from 'react';
import { fetchMovieCast, BASE_PHOTO_URL } from 'services/apiSettings';
import { ActorsList } from 'components/ActorsList/ActorsList';

export default function Cast({ id }) {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieCast(id).then(res => {
      setActors(res.cast);
    });
  }, [id]);

  return <>{actors && <ActorsList actorList={actors} baseUrl={BASE_PHOTO_URL} />}</>;
}
