import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/apiSettings';
import { ReviewItem } from './Reviews.styled';

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
            <ReviewItem key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </ReviewItem>
          ))}
        </ul>
      )}
    </>
  );
}
