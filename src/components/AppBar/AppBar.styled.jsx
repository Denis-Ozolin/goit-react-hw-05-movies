import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 2px 0;
  color: ${props => props.theme.defaultColor};
  text-decoration: none;
  transition: color 0.25s;

  &:hover,
  :focus {
    color: ${props => props.theme.accentColor};
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`;
