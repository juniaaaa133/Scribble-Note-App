import { createContext, useEffect, useState } from "react";
import { api } from "../../utils/api";

export const UserContext = createContext();

//Token Context
export const UserContextProvider = ({children}) => {
    let [token,setToken] = useState(()=>{
        let token = localStorage.getItem('token')
       return token ? JSON.parse(token) : null
    });
  
    let defineToken = (token) => {
        let tokenToDefine = localStorage.setItem('token',JSON.stringify(token))
        setToken(tokenToDefine)
    }

    return (
        <UserContext.Provider value={{token,defineToken}} >
        {children}
        </UserContext.Provider>
    )
}

