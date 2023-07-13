import { useLocation } from "react-router-dom";
import Form from "../form/form";
import Icon from "./icons";
import logo from "../../assets/icons/logo.svg";
import ret from "../../assets/icons/ret.svg";
const Header = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <header className="header">
      <div className="header__grid-collumn--1">
        <div className="header__flex--1">
          <img src={logo} alt="" />
          {isRootPath && <Form />}
          <img src={ret} />
        </div>
        <nav className="header__nav">
          <a href="/">Home:</a>
        </nav>
      </div>
      <div className="header__grid-collumn--2">
        <Icon />
      </div>
    </header>
  );
};

export default Header;
