import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  width: 90%;
  margin: 5rem auto;
  gap: 10rem;

  figure {
    display: flex;
    width: 40rem;
    height: 40rem;
    img {
      max-width: 100%;
      border-radius: 100%;
      border: solid 3px #EEEEEE;
    }
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 3.6rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  section > :nth-child(2) {
    font-style: italic;
    font-family: 'Roboto', sans-serif;
    color: #3E5B76;
    font-size: 3.2rem;
    margin: -2rem 0 0 0;
  }

  section > :last-child {
    font-family: 'Roboto', sans-serif;
    color:#595959;
    font-size: 2.4rem;
    position: relative;

    &::after {
        position: absolute;
        content: "";
        background: #595959;
        height: .4rem;
        width: 1.2rem;
        bottom: -2.5rem;
        left: 0;
    }
  }

  ul {
    margin: 5rem 0 0 0;
    list-style: none;
    li {
        width:25rem;
        max-width: 100%;
        margin: 1.5rem 0;
        position: relative;
        gap: 2rem;
        display: flex;
        align-items: center;
        img {
            max-width: 2.4rem;
            stroke: red;
        }
        ::after {
            position: absolute;
            content: "";
            background: #F5F5F5;
            height: 1px;
            width: 100%;
            bottom: -.5rem;
        }

        p, a {
            font-family: 'roboto', sans-serif;
            font-size: 1.6rem;
            color: #595959;
            text-decoration: none;
        }

        .follows, .following {
            position: absolute;
            right: 0;
            font-weight: bold;
            color: #485B6D;
        }
    }
  }


  .user-info__buttons {
    margin: 2rem 0 0 0;
    display: flex;
    gap: 2rem;
    button {
        display: flex;
        gap: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1.8rem;
        text-transform: uppercase;
        height: 5rem;
        border-radius: 1rem;
        padding: 1rem 2rem;
        align-items: center;
        cursor: pointer;
        color: white;

        label {
            background: white;
            padding: 0 1rem;
            border-radius: 2.2rem;
            color: #595959;
        }

        :hover {
            opacity: .8;
        }
    }

    #repos {
        background: #0055B8;
        label {
            color: #3E5B76;
        }
    }

    #stars {
        background: #595959;
    }
  }

`;
