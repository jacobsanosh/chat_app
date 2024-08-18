import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
function Messages() {
  const {loading,messages}=useGetMessages();
  console.log("message in messages",messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
