import Header from "../components/header/header";
import mainImg from "../assets/img/undraw_mobile_search_jxq5 1.svg";

import Profile from "../components/profile";

const Home = () => {
  return (
    <section id="home" className="grid-container">
      <Header/>
      <div className="home__grid-collumn--1">
        <Profile/>
      </div>
      <div className="home__grid-collumn--2">
        <img className="illustration" src={mainImg} />
      </div>
    </section>
  );
};

export default Home;
