import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";

const Repos = () => {
  const global = React.useContext(GlobalContext);

  if (!global?.repos) return null;

  console.log(global.repos)

  return (
    <>
      {global.repos.map((repo) => (
        <li>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>{repo.language}</p>
          <p>{repo.html_url}</p>
        </li>
      ))}
    </>
  );
};

export default Repos;
