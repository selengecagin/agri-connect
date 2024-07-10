import React from "react";
import PostComponent from "../assets/components/PostComponent";
import AdArea from "../assets/components/AdArea";
import UserAvatar from "../assets/components/UserAvatar";
import { Link } from "react-router-dom";


export default function HarvestOverCrop() {
  return (
    <div className="main-container w-full">
      <div className="flex flex-row justify-between px-[5%] py-16 bg-[#fafafa]">
        <div className="scroll-container flex flex-col w-2/3 mx-3.5 py-4">
          <PostComponent />
        </div>

        <div className="flex flex-col w-1/3 mx-6 mt-4 p-6 justify-start gap-8">
          <Link
            to="/create-post"
            className={`rounded-md items-center py-2 px-2 w-[125px] text-center text-white bg-blue-700 }`}
          >
            Create Post
          </Link>
          <div className="flex flex-col gap-2 h-[450px] border rounded shadow-md p-4">
            <h1 className="text-lg text-[#737373] font-bold">
              Recommended Contacts
            </h1>

            {/* Recommended Contacts map */}
            <UserAvatar
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              username="John Doe"
            />
          </div>

          <div className="advertisementArea">
            <AdArea />
          </div>
        </div>
      </div>
    </div>
  );
}
