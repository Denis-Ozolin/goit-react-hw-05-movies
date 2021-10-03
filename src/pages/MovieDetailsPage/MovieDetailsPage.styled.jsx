import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.div`
  display: flex;
  margin-bottom: 40px;
  align-items: baseline;

  & > h2 {
    margin: 0;
    margin-right: 40px;
  }

  & > ul {
    display: flex;

    & > li {
      margin-right: 24px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  box-sizing: border-box;
  width: 100px;
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  border: 2px solid ${props => props.theme.bgColor};
  outline: 1px solid ${props => props.theme.defaultColor};
  border-radius: 4px;
  color: ${props => props.theme.defaultColor};
  background-color: ${props => props.theme.accentColor};
  opacity: 0.7;
  transition: opacity 0.25s, border 0.25s;

  &:hover,
  :focus {
    opacity: 1;
  }
`;
