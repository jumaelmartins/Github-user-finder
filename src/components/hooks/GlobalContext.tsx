import React from "react";
import { redirect } from "react-router-dom";

type GlobalTypeProps = {
  children: React.ReactNode;
};

type GlobalType = {
  submitted: boolean;
  data: gitHubUser | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  repos: repos[] | null;
};

interface gitHubUser {
  avatar_url: string;
  login: string;
  name: string;
  blog: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  message?: string;
}

interface repos {
  name: string;
  description: string;
  html_url: string;
  language: string;
}
export const GlobalContext = React.createContext<GlobalType | null>(null);

export const GlobalStorage = ({ children }: GlobalTypeProps) => {
  const [data, setData] = React.useState<null | gitHubUser>(null);
  const [user, setUser] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [repos, setRepos] = React.useState<null | repos[]>(null);

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${user}`);
    const json = await response.json();
    setData(json);
    if(json.message === "Not Found") {
      console.log("erro")
      redirect("/user")
      console.log("outro erro")
    } else {
      setSubmitted(true)
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    if (id === "repos") {
      fetch(`https://api.github.com/users/${user}/repos`)
        .then((response) => response.json())
        .then((json) => setRepos(json));
    } else if (id === "stars") {
      fetch(`https://api.github.com/users/${user}/starred`)
        .then((response) => response.json())
        .then((json) => setRepos(json));
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        handleChange,
        handleSubmit,
        data,
        submitted,
        handleClick,
        repos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
