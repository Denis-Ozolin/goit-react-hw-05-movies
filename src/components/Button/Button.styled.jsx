import styled from '@emotion/styled';

export const StyledButton = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  outline: 1px solid ${props => props.theme.defaultColor};
  color: ${props => props.theme.defaultColor};
  background-color: ${props => props.theme.accentColor};
  opacity: 0.7;
  transition: opacity 0.25s;

  &:hover,
  :focus {
    opacity: 1;
  }
`;
