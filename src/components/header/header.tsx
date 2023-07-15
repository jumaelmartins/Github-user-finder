import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { useLocation } from "react-router-dom";
import Form from "../form/form";
import Icon from "./icons";
import logo from "../../assets/icons/logo.svg";
import ret from "../../assets/icons/ret.svg";

const Header = () => {
  const global = React.useContext(GlobalContext);
  const location = useLocation();
  const isRootPath = location.pathname === "/";
  const isUserPath = location.pathname === "/user";
  const isRepoPath = location.pathname === "/repo";

  return (
    <header className="header">
      <div className={isRootPath || isUserPath ? "header__grid-collumn--1 bg-gray" : "header__grid-collumn--1"}>
        <div className="header__flex--1">
          <img src={logo} alt="" />
          {isRootPath || isUserPath ? <Form /> : ""}
          <img src={ret} alt="" />
        </div>
        <nav className="header__nav">
          {isRootPath && <a>Home:</a>}
          {isUserPath && <><a>User: {global?.data?.name}</a></>}
          {isRepoPath && <><a>User: {global?.data?.name}:</a> <a>Repos</a></>}
        </nav>
      </div>
      <div className="header__grid-collumn--2">
        {isRepoPath && <img className="avatar" src={global?.data?.avatar_url} alt="Foto do usuario do github selecionado"/>}
        <Icon />
      </div>
    </header>
  );
};

export default Header;
