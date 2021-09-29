import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/apiSettings';

export default function Rewiews({ id }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(id).then(res => {
      setReviews(res.results);
    });
  }, [id]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
