import { createContext, useReducer,useEffect } from "react"; //Manage the State

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  //Render the first time only if user refreshes the page
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
      dispatch({type:"LOGIN",payload:user})//modify the state and inside the type payload is the value we are storing in state
    }

  },[])
  // console.log("AuthContext State", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
