import { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'services/apiSettings';
import { onScrollPage } from 'services/onScrolPage';
import { MovieList } from 'components/MovieList/MovieList';
import { StyledButton } from 'components/Button/Button.styled';
import { Container } from './HomePage.styled';
import { Title } from 'components/StyledHeading/Title.styled';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPopularMovies(page).then(res => {
      setMovies(state => [...state, ...res.results]);
      onScrollPage(page);
    });
  }, [page]);

  const onLoadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <Container>
      <Title>Trending movies</Title>
      {movies.length !== 0 && <MovieList movies={movies} />}
      <StyledButton onClick={onLoadMore} type="button">
        Load more
      </StyledButton>
    </Container>
  );
}
