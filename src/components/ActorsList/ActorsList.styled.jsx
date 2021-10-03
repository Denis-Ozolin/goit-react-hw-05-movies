import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  max-width: 1050px;
  margin: 0 auto;
`;

export const Item = styled.li`
  width: calc((100% - 5 * 10px) / 5);
  margin: 0 5px;
  margin-bottom: 10px;

  & > div {
    & > img {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    & > p {
      padding: 10px 0;
      text-align: center;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: ${props => props.theme.accentColor};
    }
  }
`;
