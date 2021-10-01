import { StyledNavLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>
  );
};
