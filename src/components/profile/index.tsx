import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { Wrapper } from "./styled";
import user from "../../assets/icons/users.svg";
import userCheck from "../../assets/icons/user-check.svg";
import link from "../../assets/icons/link.svg";
import linkedin from "../../assets/icons/linkedin-svgrepo-com.svg";

const Profile = () => {
  const global = React.useContext(GlobalContext);
  
  if (!global?.submitted) return null;
  console.log(global);
  
  return (
    <>
      <Wrapper>
        <figure className="user-avatar__container">
          <img
            src={global?.data?.avatar_url}
            alt={global?.data?.login + "avatar"}
          />
        </figure>
        <div className="user-info__container">
          <section>
            <h2>{global?.data?.name}</h2>
            <h3>{global?.data?.login}</h3>
            <h3>{global?.data?.bio}</h3>
          </section>
          <ul>
            <li>
              <img src={user} alt="" />
              <p>Seguidores</p>
              <p className="follows">{global?.data?.followers}</p>
            </li>
            <li>
              <img src={userCheck} alt="" />
              <p>Seguindo</p>
              <p className="following">{global?.data?.following}</p>
            </li>
            <li>
              <img src={link} alt="" />
              <a href={global?.data?.blog} target="_blank">{global?.data?.blog}</a>
            </li>
            {/* <li>
              <img src={linkedin} alt="" />
              <p>www.linkedin/user</p>
            </li> */}
          </ul>
          <div className="user-info__buttons">
            <button id="repos">
              Repositorios
              <label htmlFor="repos">{global?.data?.public_repos}</label>
            </button>
            <button id="stars">
              Favoritos
              {/* <label htmlFor="stars">{global?.data?.blog}</label> */}
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Profile;
