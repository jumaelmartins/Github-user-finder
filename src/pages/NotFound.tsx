import Header from "../components/header/header";
import notFound from "../assets/img/undraw_page_not_found_re_e9o6 2.svg";

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="not-found">
        <img src={notFound} alt="ilutração de pagina não encontrada" />
      </section>
    </>
  );
};

export default NotFound;
