import React from "react";

type GlobalTypeProps = {
  children: React.ReactNode;
};

type GlobalType = {
  error: boolean;
  submitted: boolean;
  data: gitHubUser | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  toggleMode: () => void;
  repos: repos[] | null;
  darkMode: boolean;
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
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState<null | repos[]>(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${user}`);
    const json = await response.json();
    setData(json);
    setSubmitted(!submitted);
    json.message !== "Not Found" ? setError(false) : setError(true);
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
        error,
        toggleMode,
        darkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
