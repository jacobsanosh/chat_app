import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
function Sidebar() {
  return (
    <div>
      <div className="h-full border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
        {/* <h1>hello</h1> */}
      </div>
    </div>
  );
}

export default Sidebar;
