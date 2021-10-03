import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  margin-right: 100px;
  color: ${props => props.theme.accentColor};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
`;
