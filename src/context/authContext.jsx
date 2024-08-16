import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {

    let [user,setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user,setUser}} >
        {children}
        </AuthContext.Provider>
    )
}