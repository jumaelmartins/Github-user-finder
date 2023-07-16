import Header from "../components/header/header";
import mainImg from "../assets/img/undraw_mobile_search_jxq5 1.svg";

import Profile from "../components/profile";

const User = () => {
  return (
    <section id="user" className="grid-container">
      <Header/>
      <div className="grid-collumn--1 bg-gray">
        <Profile/>
      </div>
      <div className="grid-collumn--2">
        <img className="illustration" src={mainImg} alt="apenas uma ilustração"/>
      </div>
    </section>
  );
};

export default User;
