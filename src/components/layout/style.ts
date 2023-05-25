import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem 0;
  font-family: 'Roboto', sans-serif;
  color: #485B6D;

  h1 {
    font-size: 4.4rem;
  }

  form {
    display: flex;
    min-width: 70%;
    align-items: center;
    justify-content: center;
  }

  form > fieldset {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #eeeeee;
    height: 4rem;
    width: 100%;
    border-radius: 1rem;
    &:hover {
        outline: #0075ff 1px solid;
        box-shadow: 1px 0 4px 0 #0075ff;
    }
  }

  form > fieldset > input {
    background: none;
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    transition: all .3s;
    margin: 0 2rem ;
    font-size: 2rem;
    
    ::placeholder {
        color: #485B6D;
    }

  }
  form > fieldset > label > svg {
    max-width: 100%;
    height: 3.2rem;
    cursor: pointer;
    fill: #485B6D;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  div > svg {
    height: 3.2rem;
    width: 3.2rem;
    fill: #485B6D;
  }
`;
