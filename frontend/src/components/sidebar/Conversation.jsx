import React from "react";
import useConversation from "../../stored/useConversation";
import { useSocketContext } from "../../context/SocketContext";
function Conversation(conversation, lastIdx, emoji) {
  // console.log("in convertation card", conversation.conversation._id);
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected =
    selectedConversation?._id === conversation.conversation._id;
  
    const {onlineUsers}=useSocketContext();
    const online=onlineUsers.includes(conversation.conversation._id);
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-gray-900  rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-gray-500" : ""}`}
        onClick={() => setSelectedConversation(conversation.conversation)}
      >
        <div className={`avatar ${online? "online":""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">
              {conversation.conversation.fullName}
            </p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation;
