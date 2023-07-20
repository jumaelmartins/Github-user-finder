import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import starIcon from "../../assets/icons/star_black_24dp 1.svg";

const Starred = () => {
  const global = React.useContext(GlobalContext);

  if (!global?.repos) return null;

  return (
    <section className={"user-repos" + global?.isDarkMode}>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">VOLTAR PARA O INICIO</a>
          </li>
          {/* <li><a href="/starred">FAVORITOS</a></li> */}
        </ul>
      </nav>
      <ul className="user-repos-card-container">
        {global.repos.map((repo) => (
          <li key={repo.name} className="use-repos-card">
            <a
              className={repo.language?.toLowerCase() + " starred"}
              href={repo.html_url}
              target="_blank"
            >
              <img src={starIcon} alt="estrela" />
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <b>{repo.language}</b>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Starred;
