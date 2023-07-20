import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../hooks/GlobalContext";
import LinkSvgIcon from "../icons/LinkSvgIcon";
import UserSvgIcon from "../icons/UserSvgIcon";
import UsersSvgIcon from "../icons/UsersSvgIcon";
const Profile = () => {
  const global = React.useContext(GlobalContext);
  const navigate = useNavigate();

  const goToRepo = (event: React.MouseEvent<HTMLButtonElement>) => {
    global?.handleClick(event);
    navigate("/repo");
  };

  const goToStarred = (event: React.MouseEvent<HTMLButtonElement>) => {
    global?.handleClick(event);
    navigate("/starred");
  };

  if (!global?.submitted && global?.error === true) return null;

  return (
    <main className={"user" + global?.isDarkMode}>
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
            <UsersSvgIcon color="blue" />
            <p>Seguidores</p>
            <p className="follows">{global?.data?.followers}</p>
          </li>
          <li>
            <UserSvgIcon color="blue" />
            <p>Seguindo</p>
            <p className="following">{global?.data?.following}</p>
          </li>
          <li>
            <LinkSvgIcon color="blue" />
            <a href={global?.data?.blog} target="_blank">
              {global?.data?.blog}
            </a>
          </li>
        </ul>
        <div className="user-info__buttons">
          <button onClick={goToRepo} id="repos">
            Repositorios
            <label htmlFor="repos">{global?.data?.public_repos}</label>
          </button>
          <button onClick={goToStarred} id="stars">
            Favoritos
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
