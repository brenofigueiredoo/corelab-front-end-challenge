import styled from "styled-components";

export const Container = styled.div`
  background-color: #f0f2f5;
  padding: 2rem 1rem 1rem 1rem;

  .container--main {
    margin: 0 4rem 0 4rem;
  }

  .container--h2 {
    padding: 2rem 0rem 0.6rem 1.48rem;

    h2 {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
      color: #464646;
    }
  }

  .container--cards--favorite {
    display: flex;
    flex-wrap: wrap;
  }

  .container--cards--outher {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    .container--main {
      margin: 0;
    }
  }
`;
