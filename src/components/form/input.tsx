import React from "react";
import { GlobalContext } from "../hooks/GlobalContext";

interface Prop {
  placeholder: string;
  id: string;
}

const Input = (prop: Prop) => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      <input
        onChange={global?.handleChange}
        id={prop.id}
        placeholder={prop.placeholder}
        type="search"
      />
      <label htmlFor={prop.id}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M39.8 45L26.65 31.85C25.65 32.7167 24.484 33.3917 23.152 33.875C21.8201 34.3583 20.4027 34.6 18.9 34.6C15.2946 34.6 12.2433 33.35 9.74595 30.85C7.24865 28.35 6 25.3333 6 21.8C6 18.2667 7.25 15.25 9.75 12.75C12.25 10.25 15.275 9 18.825 9C22.375 9 25.3917 10.25 27.875 12.75C30.3583 15.25 31.6 18.2692 31.6 21.8075C31.6 23.2358 31.3667 24.6167 30.9 25.95C30.4333 27.2833 29.7333 28.5333 28.8 29.7L42 42.8L39.8 45ZM18.85 31.6C21.5583 31.6 23.8604 30.6417 25.7563 28.725C27.6521 26.8083 28.6 24.5 28.6 21.8C28.6 19.1 27.6521 16.7917 25.7563 14.875C23.8604 12.9583 21.5583 12 18.85 12C16.1139 12 13.7882 12.9583 11.8729 14.875C9.95763 16.7917 9 19.1 9 21.8C9 24.5 9.95763 26.8083 11.8729 28.725C13.7882 30.6417 16.1139 31.6 18.85 31.6Z" />
        </svg>
      </label>
    </>
  );
};

export default Input;
