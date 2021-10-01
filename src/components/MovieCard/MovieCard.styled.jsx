import styled from '@emotion/styled';

export const Card = styled.section`
  display: flex;
  margin: 20px 0;
  border-radius: 4px;
`;

export const Poster = styled.div`
  margin-right: 24px;

  & > img {
    min-width: 360px;
  }
`;

export const CardInfo = styled.div`
  padding: 40px 0;
  font-size: 16px;

  & > p {
    margin-bottom: 12px;
  }

  & h4 {
    margin-bottom: 10px;
    font-weight: normal;
  }

  & > ul {
    list-style: disc;
    list-style-position: inside;

    & li {
      margin-bottom: 6px;
      color: #8dd83d;

      & > span {
        color: #fff;
      }
    }
  }
`;

export const Score = styled.span`
  display: block;
  margin-bottom: 24px;

  & > span {
    margin-left: 6px;
    color: #8dd83d;
    font-size: 18px;
  }
`;

export const Description = styled.p`
  padding: 12px;
  color: #fff;
  border: 1px solid #a7bba8;
  border-radius: 4px;
`;
