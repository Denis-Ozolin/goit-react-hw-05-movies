import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/apiSettings';

export function Rewiews({ id }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(id).then(res => {
      console.log(res);
      setReviews(res.results);
    });
  }, [id]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(rewiew => (
            <li key={rewiew.id}>
              <h2>{rewiew.author}</h2>
              <p>{rewiew.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
