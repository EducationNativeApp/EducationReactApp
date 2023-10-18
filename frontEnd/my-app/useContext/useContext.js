import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(false);
  const [classe, setClasse] = useState("");
  const [user, setUser] = useState(null);
  return (
    <MyContext.Provider
      value={{ isDarkMode, setMode, classe, setClasse, user, setUser }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
