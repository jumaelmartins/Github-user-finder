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
  const isStarredPath = location.pathname === "/starred";
  const isNotFoundPath = location.pathname === "/404";

  return (
    <header
      className={"header" + (global?.darkMode === true ? " dark-mode" : " ")}
    >
      <div
        className={
          isRootPath || isUserPath
            ? "header__grid-collumn--1 bg-gray"
            : "header__grid-collumn--1"
        }
      >
        <div className="header__flex--1">
          <img className="logo" src={logo} alt="" />
          {isRootPath || isUserPath || isNotFoundPath ? <Form /> : ""}
          <img className="detail" src={ret} alt="" />
        </div>
        <nav className="header__nav">
          {isRootPath && <a>Inicio:</a>}
          {isUserPath && (
            <>
              <a>Usuario: {global?.data?.name}</a>
            </>
          )}
          {isRepoPath && (
            <>
              <a>Usuario': {global?.data?.name}:</a> <a>Repos</a>
            </>
          )}
          {isStarredPath && (
            <>
              <a>Usuario: {global?.data?.name}:</a> <a>Favoritos</a>
            </>
          )}
          {isNotFoundPath && (
            <>
              <a>Usuario: </a> <a>Não Localizado</a>
            </>
          )}
        </nav>
      </div>
      <div className="header__grid-collumn--2">
        {isRepoPath && (
          <img
            className="avatar"
            src={global?.data?.avatar_url}
            alt="Foto do usuario do github selecionado"
          />
        )}
        <Icon handleClick={global?.toggleMode} />
      </div>
    </header>
  );
};

export default Header;
