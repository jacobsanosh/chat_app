import { useState } from "react";
import axios from "axios";
import { useAuthContest } from "../context/AuthContext";
import toast from "react-hot-toast";
const useLogout=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContest();
    const logout=async()=>{
        setLoading(true);
        try{
            const res=await axios.post("/api/auth/logout");
            if(res.status!==200){
                throw new Error("Error during logout");
            }
            localStorage.removeItem("user-info")
            setAuthUser(null);
        }
        catch(err){
            toast.error(err.error);
            console.log("error during logout:",err.error);
        }
        finally{
            setLoading(false);
        }
    };
    return {loading,logout};
}
export default useLogout;