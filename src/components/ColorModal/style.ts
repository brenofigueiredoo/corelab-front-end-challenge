import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 72%;

  border: 1px solid #d9d9d9;
  box-shadow: 1px 1px 3px 0px #00000040;
  background-color: #ffffff;
  border-radius: 9px;

  .container--color--options {
    display: flex;
    flex-wrap: wrap;
  }

  .color-option {
    border: none;
    width: 2.294rem;
    height: 2.294rem;
    border-radius: 50%;
    margin: 5px;
    display: inline-block;
    cursor: pointer;
  }
`;
