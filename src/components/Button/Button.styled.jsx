import styled from '@emotion/styled';

export const StyledButton = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  outline: 1px solid #fff;
  color: #fff;
  background-color: #8dd83d;
  opacity: 0.7;
  transition: opacity 0.25s;

  &:hover,
  :focus {
    opacity: 1;
  }
`;
