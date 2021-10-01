import { AppBar } from 'components/AppBar/AppBar';
import { StyledLogo } from 'components/Logo/Logo';
import { StyledHeader } from './MoviesInfoHeader.styled';

export const MoviesInfoHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo />
      <AppBar />
    </StyledHeader>
  );
};
