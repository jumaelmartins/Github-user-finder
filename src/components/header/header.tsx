import { HeaderContainer } from "./style";
import Form from "../form/form";
import Icons from "./icons";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>{"<GF/>"}</h1>
      <Form />
      <Icons />
    </HeaderContainer>
  );
};

export default Header;
