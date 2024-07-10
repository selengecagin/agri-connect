import React from "react";
import PostComponent from "../assets/components/PostComponent";
import AdArea from "../assets/components/AdArea";

export default function HarvestOverCrop() {
  return (
    <div className="main-container w-full">
      <div className="flex flex-row justify-between px-[5%] py-16 bg-[#fafafa]">
        <div className="scroll-container flex flex-col w-2/3 mx-3.5 py-4">
          <PostComponent />
        </div>

        <div className="flex flex-col w-1/3 mx-6 mt-4 p-6 justify-start gap-8">
          <div className="flex flex-col gap-2 h-[450px] border rounded shadow-md p-4">
            <h1 className="text-lg text-[#737373] font-bold">
              Recommended Contacts
            </h1>

              {/* Recommended Contacts map */}
              <div className="flex items-center p-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-sm">Username</span>
            </div>

            
          </div>

          <div className="advertisementArea">
            <AdArea />
          </div>
        </div>
      </div>
    </div>
  );
}
