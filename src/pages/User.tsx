import Header from "../components/header/header";
import mainImg from "../assets/img/undraw_mobile_search_jxq5 1.svg";
import Profile from "../components/profile";
import React from "react";
import { GlobalContext } from "../components/hooks/GlobalContext";

const User = () => {
  const global = React.useContext(GlobalContext);
  return (
    <section id="user" className="grid-container">
      <Header />
      <div className={"grid-collumn--1 bg-gray" + global?.isDarkMode}>
        <Profile />
      </div>
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

export default User;
