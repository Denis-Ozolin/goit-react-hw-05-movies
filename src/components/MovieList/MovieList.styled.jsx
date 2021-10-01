import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const List = styled.ul`
  margin-left: 24px;
  margin-bottom: 24px;

  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Movie = styled(Link)`
  text-decoration: none;
  color: #a7bba8;
  transition: color 0.25s;

  &:hover,
  :focus {
    color: #8dd83d;
  }
`;
