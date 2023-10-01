import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 3.563rem;

  .container--logo {
    display: flex;
    align-items: center;
    width: 90%;
    gap: 6px;

    a {
      text-decoration: none;
    }
  }

  .container--logo--note_image {
    width: 2.5rem;
    height: 2.5rem;
  }

  .container--logo--title {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #455a64;
  }

  .container--input--search {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    gap: 6px;
    margin-left: 20px;

    border: 1px solid #d9d9d9;
    box-shadow: 1px 1px 3px 0px #00000040;
    border-radius: 3px;

    max-width: 33.125rem;
    width: 100%;
  }

  .container--input {
    width: 100%;
    border: none;
    background-color: transparent;
  }

  :focus-visible {
    outline: none;
  }

  @media screen and (max-width: 348px) {
    .container--input--search {
      margin-left: 0px;
    }
  }

  .container--button--modal {
    cursor: pointer;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a {
      color: #455a64;
      padding: 0.6rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;
      text-decoration: none;

      &.button {
        padding: 0.6rem 5rem;
      }

      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 1.4rem;
    height: 0.2rem;
    background: #455a64;
    position: relative;
    cursor: pointer;
    display: none;

    &:before {
      bottom: 0.5rem;
    }
    &:after {
      top: 0.5rem;
    }

    &.active:before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after {
      top: 0;
      transform: rotate(135deg);
    }

    &.active {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .menu:before,
  .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #455a64;
    cursor: pointer;
    transition: 0.6s;
  }

  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: green;
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
      position: relative;
    }
  }

  label:after {
    content: "";
    background: #fff;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
    transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: pink;
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .menu {
    display: block;
  }

  nav {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: blue;
    top: 0;
    left: 0;
    transition: opacity 0.25s;
    background-color: lightblue;

    a.button {
      background-color: pink;
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
