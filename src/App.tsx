import Home from "./pages/Home";
import "./styles/main.scss";
import { createGlobalStyle } from "styled-components";
import { GlobalStorage } from "./components/hooks/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repo from "./pages/Repo";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Star from "./pages/Star";

const ResetStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="repo" element={<Repo />} />
          <Route path="starred" element={<Star />} />
          <Route path="404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
