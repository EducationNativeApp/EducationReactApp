import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isDarkMode,setMode] = useState(false);
  const [Class,setClass]=useState('')
  return (
    <MyContext.Provider value={{ isDarkMode,setMode,Class,setClass }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };