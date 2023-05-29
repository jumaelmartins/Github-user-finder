import { HeaderContainer } from "./style";
import { useLocation } from "react-router-dom";
import Form from "../form/form";
import Icons from "./icons";

const Header = () => {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <HeaderContainer>
      <h1>{"<GF/>"}</h1>
      {isRootPath && <Form />}
      <Icons />
    </HeaderContainer>
  );
};

export default Header;
