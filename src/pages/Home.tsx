import Header from "../components/header/header";
import mainImg from "../assets/img/undraw_mobile_search_jxq5 1.svg";
import React from "react";
import { GlobalContext } from "../components/hooks/GlobalContext";

const Home = () => {
  const global = React.useContext(GlobalContext);

  return (
    <section id="home" className={"grid-container" + global?.isDarkMode}>
      <Header />
      <div className={"grid-collumn--1" + global?.isDarkMode}></div>
      <div className={"grid-collumn--2" + global?.isDarkMode}>
        <img
          className="illustration"
          src={mainImg}
          alt="apenas uma ilustração"
        />
      </div>
    </section>
  );
};

export default Home;
