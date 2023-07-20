import Header from "../components/header/header";
import notFound from "../assets/img/undraw_page_not_found_re_e9o6 2.svg";
import React from "react";
import { GlobalContext } from "../components/hooks/GlobalContext";

const NotFound = () => {
  const global = React.useContext(GlobalContext);


  return (
    <>
      <Header />
      <section className={"not-found " + global?.isDarkMode}>
        <img className="notfound-img" src={notFound} alt="ilutração de pagina não encontrada" />
      </section>
    </>
  );
};

export default NotFound;
