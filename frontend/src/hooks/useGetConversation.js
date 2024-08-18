import axios from "axios";
import { useEffect,useState } from "react";
import toast from "react-hot-toast";
const useGetConversation = () => {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    useEffect(() => {
        const getConverstions=async()=>{
            setLoading(true);
            try {
                console.log("Fetching conversations");
                const res = await axios.get("/api/users/");
                if (res.status !== 200) {
                    throw new Error("Error during fetching conversation");
                }
                setConversations(res.data);
            } catch (err) {
                toast.error(err.error);
                console.log("error during fetching conversation:", err);
            } finally {
                setLoading(false);
            }
        };
        getConverstions();
    },[]);
    return { loading, conversations };
}
export default useGetConversation;