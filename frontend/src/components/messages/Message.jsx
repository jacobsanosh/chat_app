import React from "react";
import { useAuthContest } from "../../context/AuthContext";
import  useConversation  from "../../stored/useConversation";
import { extractTime } from "../../utils/extractTime";

function Message({message}) {
  const {authUser}=useAuthContest();
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId===authUser._id;
  const formatTime=extractTime(message.createdAt);
  const classChat=fromMe ? 'chat-end':'chat-start';
  const profilePic=fromMe ?authUser.profilePic:selectedConversation.profilePic;
  const bubbleBgcolor=fromMe ? 'bg-blue-500':'bg';
  return (
    <div className={`chat ${classChat}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              profilePic
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgcolor}`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formatTime}</div>
    </div>
  );
}

export default Message;
