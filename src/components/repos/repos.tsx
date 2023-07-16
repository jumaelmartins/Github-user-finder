import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
const Repos = () => {
  const global = React.useContext(GlobalContext);

  if (!global?.repos) return null;

  const goToStarred = (event: React.MouseEvent<HTMLButtonElement>) => {
    global?.handleClick(event);
    navigate("/starred");
  };

  return (
    <section className="user-repos">
      <nav className="nav">
        <ul>
          <li><a href="/">VOLTAR PARA O INICIO</a></li>
          {/* <li><a onClick={goToStarred} href="/starred">FAVORITOS</a></li> */}
        </ul>
      </nav>
      <ul className="user-repos-card-container">
        {global.repos.map((repo) => (
          <li key={repo.name} className="use-repos-card">
            <a
              className={repo.language?.toLowerCase()}
              href={repo.html_url}
              target="_blank"
            >
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

export default Repos;
