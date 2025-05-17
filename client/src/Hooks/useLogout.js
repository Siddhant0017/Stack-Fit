import { useAuthContext } from "../Hooks/useAuthContext";


export const useLogout = ()=>{
    const {dispatch} = useAuthContext();

   const logout =()=>{
     //remove the data from lcoal storage
     localStorage.removeItem("user")

     //update context
     dispatch({type:"LOGOUT"})
   };
   return {logout}


}