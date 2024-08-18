import{useState} from 'react';
import useConversation from '../stored/useConversation';
import toast from 'react-hot-toast';
import axios from "axios";
const useSendMessage = () => {
    const [loading,setLoading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();
    const sendMessage=async(message)=>{
        setLoading(true);
        try{
            const res = await axios.post(`/api/messages/send/${selectedConversation._id}`, {
                message
              });
            console.log(res)
          if (res.status !== 201) {
            throw new Error("Error during login");
          }
          setMessages([...messages, res.data]);

        }catch(err){
            toast.error('Failed to send message');
            
        }
        finally{
            setLoading(false);
        }
  
    };
    return {sendMessage,loading};
}
export default useSendMessage;