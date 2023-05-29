import styled from "styled-components";

export const RWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 1rem;

  font-family: "Roboto", sans-serif;

  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    background: #fafcfc;
    padding: 2rem 1rem;
    box-shadow: 0.1rem 0 0.5rem 0 lightgray;

    h3 {
      font-size: 2rem;
      margin: 2rem 0;
      font-family: "Poppins", sans-serif;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-family: "Roboto", sans-serif;
  }

  li > :nth-child(3) {
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
