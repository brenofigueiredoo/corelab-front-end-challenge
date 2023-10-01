import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 1.2rem;
  margin: 0 1rem 0 1rem;

  height: 6.46rem;

  .container--header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 33.158rem;
    width: 100%;
    height: 100%;

    background-color: #fff;
    box-shadow: 1px 1px 3px 0px #00000040;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 35%;

      padding: 0px 1.375rem 0px 1.375rem;
      border-bottom: 1px solid #d9d9d9;
    }

    input {
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;

      width: 100%;
      border: none;
      background-color: transparent;
    }

    .button--submit {
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;

      height: 60%;
      padding: 0px 1.375rem 0px 1.375rem;
      border: none;
      color: #50656e;
      background-color: transparent;

      cursor: pointer;
    }

    .button--isfavorite {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    .input--invisible {
      display: none;
    }

    .img--isfavorite {
      max-width: 1.233rem;
      width: 100%;
      max-height: 1.233rem;
      height: 100%;
    }

    :focus-visible {
      outline: none;
    }

    form {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .container--header {
      border-radius: 25px;
    }
  }
`;
