import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 24.375rem;
  width: 100%;
  /* max-height: 27.349rem; */
  height: 27.349rem;

  box-shadow: 2px 2px 3px 0px #00000040;
  border: 1px solid #d9d9d9;
  border-radius: 25px;
  margin: 0 1rem 1rem 1rem;

  .container--header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 1.375rem 0px 1.375rem;
    max-height: 2.375rem;
    height: 100%;
    /* border-bottom: 1px solid #d9d9d9; */

    h1 {
      font-family: Inter;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #4f4f4d;
    }

    img {
      width: 1.209rem;
      height: 1.209rem;
    }
  }

  .container--body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    padding: 0.625rem 1.375rem 0.625rem 1.375rem;

    h3 {
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      color: #4f4f4d;
    }
  }

  .button--alter-favorite {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .input--alter-title {
    border: none;
    /* border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9; */
    background-color: transparent;

    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #4f4f4d;
  }

  :focus-visible {
    outline: none;
  }

  .button--alter-title {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .container--body--footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: 3.75rem;
      width: 100%;
    }

    .button--delete {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .container--input--title {
    border-bottom: 1px solid #4f4f4d;
    border-right: 1px solid #4f4f4d;
  }

  .button--save--alter-title {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .button--alter-color {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .container--modal--color {
    display: flex;
    justify-content: center;
  }
`;
