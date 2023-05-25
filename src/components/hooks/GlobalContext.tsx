import React from "react";

type GlobalTypeProps = {
  children: React.ReactNode;
};

export const GlobalContext = React.createContext<GlobalType | null>(null);

type GlobalType = {
  submitted: boolean;
  data: gitHubUser | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

interface gitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  bio: string;
  followers: string;
  following: string;
  public_repos: string;
}

export const GlobalStorage = ({ children }: GlobalTypeProps) => {
  const [data, setData] = React.useState<null | gitHubUser>(null);
  const [user, setUser] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => console.log("error"));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  return (
    <GlobalContext.Provider
      value={{ handleChange, handleSubmit, data, submitted }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
