import { useState } from "react";
import { useAuthContest } from "../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContest();
  const login = async (username, password) => {
    const success = handleInput(username, password);
    if (!success) return;
    setLoading(true);
    try {
        const res = await axios.post("/api/auth/login", {
            username,
            password,
          });
      if (res.status !== 200) {
        throw new Error("Error during login");
      }
      localStorage.setItem("user-info", JSON.stringify(res.data));
      setAuthUser(res.data);
    } catch (err) {
      toast.error("please check your credentials");
      console.log("error during login:", err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
export default useLogin;
function handleInput(username, password) {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  }
  return true;
}
