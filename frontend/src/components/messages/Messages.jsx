import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkelton from "../../skeltons/MessageSkelton";
import useListenMessages from "../../hooks/useListenMessages";

function Messages() {
  const {loading,messages}=useGetMessages();
  // console.log("message in messages",messages)
  useListenMessages();

  const lastMessageRef=useRef();
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    }
    ,100)
  }
  ,[messages])
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length>0 && messages.map((message)=>(
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
     {loading && [...Array(3)].map((_,index)=><MessageSkelton key={index}/>)}
     {!loading && messages.length===0 &&(

      <p className="text-center text-gray-500">No messages found</p>
     )}
    </div>
  );
}

export default Messages;
