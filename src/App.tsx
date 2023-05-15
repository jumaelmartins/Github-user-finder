import Layout from "./components/layout";
import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  html {
    font-size: 62.5%;
  }
`;

const App = () => {
  return (
    <>
      <ResetStyles />
      <Layout />
    </>
  );
};

export default App;
