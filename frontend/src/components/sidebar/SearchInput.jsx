import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../stored/useConversation";
import useGetConversations from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search name should be at least 3 characters");
    }
    const conversation = conversations.find((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      console.log("conversation found", conversation);
      setSelectedConversation(conversation); // Set selected conversation
      setSearch("");
    } else {
      toast.error("No user found with this name");
    }
  };

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
