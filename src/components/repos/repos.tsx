import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { RWrapper } from "./style";
import { Link } from "react-router-dom";
const Repos = () => {
  const global = React.useContext(GlobalContext);

  if (!global?.repos) return null;

  console.log(global.repos);

  return (
    <RWrapper>
      <Link to={"/"}>
        Voltar para Home
      </Link>
      <h2>{global.data?.login} - Repos</h2>
      <ul>
        {global.repos.map((repo) => (
          <li>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
            <a href={repo.html_url} target="_blank">
              {repo.html_url}
            </a>
          </li>
        ))}
      </ul>
    </RWrapper>
  );
};

export default Repos;
