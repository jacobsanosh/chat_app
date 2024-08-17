import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";

export const sendMessage=async(req,res)=>{  
    try{
        const {message}=req.body;
        const {id:reciverId}=req.params;
        const senderId=req.user._id;
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,reciverId]},
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,reciverId]
            });
        }
        const newMessage=new Message({
            senderId,
            reciverId,
            message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([newMessage.save(),conversation.save()]);
        res.status(201).json({message:"message sent successfully",data:newMessage});
    }
    
    catch(error){
        res.status(500).json({message:"Internal server error"});
        console.log("error in sendMessage contoller",error);
    }
}