import { useState, useEffect } from 'react';
import { fetchMovie } from 'services/apiSettings';
import { requestType } from 'services/requests';

export function MovieDetailsPage({ id }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const { MOVIE_INFO } = requestType;
    const page = '';
    const type = `${MOVIE_INFO}${id}`;
    fetchMovie(page, type).then(res => {
      setMovie(res.title);
    });
  }, [id]);

  return <h1>{movie}</h1>;
}
