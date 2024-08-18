import { createContext,useContext,useState } from "react";

export const AuthContext=createContext();
//hook
export const useAuthContest=()=>{
    return useContext(AuthContext);
}

export const AuthContestProvider=({children})=>{
    const [authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem('user-info'))||null);
    return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>;
}