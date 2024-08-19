import{useEffect, useState} from 'react';
import useConversation from '../stored/useConversation';
import toast from 'react-hot-toast';
import axios from "axios";
const useSendMessage = () => {
    const [loading,setLoading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();
  
    useEffect(() => {
        const getMessages=async()=>{
            setLoading(true);
            try{
                
                const res=await axios.get(`/api/messages/${selectedConversation._id}`);
                if(res.status!==200){
                    throw new Error("Error during get messages");
                }
                console.log("on getting messages hook",res)
                setMessages(res.data);
            }
            catch(err){
                // toast.error('Failed to get messages',err);
                console.log("error in getMessages hook",err)
            }
            finally{
                setLoading(false);
            }
        };
        if(selectedConversation?._id)getMessages();
    }, [selectedConversation,selectedConversation?._id]);
    return {loading,messages}
};
export default useSendMessage;
