import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
function Home() {
  return (
    <div className="flex sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden  bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-50">
      <Sidebar />
      <MessageContainer />
      {/* <h1>hello</h1> */}
    </div>
  );
}

export default Home;
