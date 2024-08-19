import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../stored/useConversation";
import  {useAuthContest} from "../../context/AuthContext";
function MessageContainer() {
  const {selectedConversation,setSelectedConversation}=useConversation()
  useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);
 return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-gray-900 px-4 py-4 mb-2'>
						<span className='label-text text-white'>To:</span>{" "}
						<span className='text-white font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
}
const NoChatSelected = () => {
	const {authUser}=useAuthContest();
  return (
    <div className="flex items-center justify-center md:min-w-[450px] h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
export default MessageContainer;
