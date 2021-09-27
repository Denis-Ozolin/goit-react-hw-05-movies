import { useState, useEffect } from 'react';
import { fetchMovieCast, BASE_PHOTO_URL } from 'services/apiSettings';

export function Cast({ id }) {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieCast(id).then(res => {
      console.log(res);
      setActors(res.cast);
    });
  }, [id]);

  return (
    <>
      {actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <h2>{actor.name}</h2>
              {actor.profile_path ? (
                <img src={`${BASE_PHOTO_URL}${actor.profile_path}`} alt={actor.name} />
              ) : (
                <div style={{ backgroundColor: 'tomato', width: '200px', height: '300px' }}>
                  No Image
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
