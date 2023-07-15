import Input from "./input";
import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const global = React.useContext(GlobalContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (global?.submitted && global?.error) navigate("/404");
    if (global?.submitted && !global?.error) navigate("/user");
  }, [global?.submitted]);

  return (
    <form onSubmit={global?.handleSubmit}>
      <fieldset>
        <Input id="search" placeholder="Busque um Usuario..." />
      </fieldset>
    </form>
  );
};

export default Form;
