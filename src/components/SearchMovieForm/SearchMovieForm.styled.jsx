import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Form = styled.form`
  & > input {
    width: 240px;
    margin-right: 12px;
    padding: 8px 4px;
    background: ${props => props.theme.defaultColor};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.defaultColor};
    outline: none;

    &:focus {
      border: 1px solid ${props => props.theme.accentColor};
    }
  }
`;
