import styled from '@emotion/styled';

export const ReviewItem = styled.li`
  margin-bottom: 24px;

  & > h4 {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.accentColor};
  }

  & > p {
    padding: 12px;
    border: 1px solid ${props => props.theme.secondColor};
    border-radius: 4px;
  }
`;
