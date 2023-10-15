import React, { createContext, useState , useContext , useReducer} from 'react';

const MyContext = createContext();

const StudentContext = createContext();

const initialState = {
  students: [],
};

const studentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] };
    default:
      return state;
  }
};

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

const MyProvider = ({ children }) => {
  const [isDarkMode,setMode] = useState(false);
  const [Class,setClass]=useState('')
  const [studentData, setStudentData] = useState({});


  return (
    <MyContext.Provider value={{ isDarkMode,setMode,Class,setClass , studentData , setStudentData}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext  };

export function useMyContext() {
  return useContext(MyContext);
}

export const useStudentContext = () => {
  return useContext(StudentContext);
};