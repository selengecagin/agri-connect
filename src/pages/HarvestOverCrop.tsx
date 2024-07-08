import React from "react";
import PostComponent from "../assets/components/PostComponent";

export default function HarvestOverCrop() {
  return (
    <div className="main-container w-full">
      <div className="flex flex-row justify-between px-[5%] py-16 bg-[#fafafa]">
        <div className="scroll-container flex flex-col w-2/3 mx-3.5 py-4">
          <PostComponent />
        </div>

        <div className="flex flex-col w-1/3 mx-6 mt-8 p-6 border rounded-md  justify-start shadow-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg text-[#737373] font-bold">
              Recommended Contacts
            </h1>

            <div className="flex flex-row gap-2">
              <p>Icon</p>
              <p>Username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
