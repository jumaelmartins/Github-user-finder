import Header from "../components/header/header";
import Starred from "../components/repos/starred";
import React from "react";
import { GlobalContext } from "../components/hooks/GlobalContext";

const Star = () => {
  const global = React.useContext(GlobalContext);
  return (
    <>
      <Header />
      <Starred />
    </>
  );
};

export default Star;
