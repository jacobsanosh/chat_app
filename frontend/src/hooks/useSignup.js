import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContest } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContest();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    // console.log("signup hook called");
    const success = handleInput({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });
      if (!res.status === 201) {
        throw new Error("Error during signup");
      }
      console.log("here on usesign", res.data);
      localStorage.setItem("user-info", JSON.stringify(res.data));
      setAuthUser(res.data);
    } catch (err) {
      toast.error(err.error);
      console.log("error during signup:", err.error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};
export default useSignup;

function handleInput({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  console.log("handle input called");

  if (!fullName || !username || !password || !confirmPassword || !gender) {
    console.log("empty field check");
    toast.error("Please fill all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    console.log("password mismatch check");
    toast.error("Password and Confirm Password do not match");
    return false;
  }

  if (password.length < 6) {
    console.log("password length check");
    toast.error("Password should be at least 6 characters long");
    return false;
  }

  return true;
}
