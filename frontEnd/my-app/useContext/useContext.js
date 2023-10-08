import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isDarkMode,setMode] = useState(false);

  return (
    <MyContext.Provider value={{ isDarkMode,setMode }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };