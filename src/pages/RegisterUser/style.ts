import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #020024;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 24.375rem;
    width: 100%;
    gap: 16px;

    height: 24.349rem;

    background-color: #d9d9d9;
    box-shadow: 2px 2px 3px 0px #00000040;
    border: 1px solid #d9d9d9;
    border-radius: 25px;

    h1 {
      font-family: Inter;
      font-size: 20px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }

    input {
      height: 2rem;
      border: none;
      border-radius: 7px;
      background-color: #f0f2f5;
      padding-left: 0.8rem;

      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }

    .p_errors {
      color: red;
      font-family: Inter;
      font-size: 11px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }

    :focus-visible {
      outline: none;
    }
  }
  .button--register {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    max-width: 11.125rem;
    width: 100%;

    border: none;
    border-radius: 7px;
    background-color: #020024;
    color: white;
    cursor: pointer;

    font-family: Inter;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }
  .button--register:hover {
    background-color: #f0f2f5;
    color: #020024;
  }
`;
