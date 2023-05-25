import Input from "./input";
import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";

const Form = () => {
  const global = React.useContext(GlobalContext);

  return (
    <form onSubmit={global?.handleSubmit}>
      <fieldset>
        <Input id="search" placeholder="Busque um Usuario..." />
      </fieldset>
    </form>
  );
};

export default Form;
