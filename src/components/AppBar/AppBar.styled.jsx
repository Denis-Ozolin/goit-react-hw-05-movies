import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 2px 0;
  color: #fff;
  text-decoration: none;
  transition: color 0.25s;

  &:hover,
  :focus {
    color: #8dd83d;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`;
