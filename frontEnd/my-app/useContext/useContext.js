import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isDarkMode,setMode] = useState(false);
  const [Class,setClass]=useState('')
  const [bra,setbra]=useState(false)
  const [usersId,setUsersId]=useState(null)
  const[teachersId,setTeachersId]=useState(null)
  
  return (
    <MyContext.Provider value={{isDarkMode,setMode,Class,setClass,usersId,setUsersId,teachersId,setTeachersId,bra,setbra }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };