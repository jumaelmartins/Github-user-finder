import Layout from "./components/layout";
import { createGlobalStyle } from "styled-components";
import { GlobalStorage } from "./components/hooks/GlobalContext";

const ResetStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap');
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
    <GlobalStorage>
      <ResetStyles />
      <Layout />
    </GlobalStorage>
  );
};

export default App;
