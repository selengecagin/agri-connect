import React from "react";
import PostComponent from "../assets/components/PostComponent";

export default function HarvestOverCrop() {



  return (
    <div className="main-container w-full">
      <div className="flex flex-row justify-between px-[5%] py-12 bg-[#fafafa]">
        <div className="scroll-container flex flex-col w-2/3 mx-3.5">
    
    <PostComponent/>
        
        </div>


        <div className="flex flex-col w-1/3 mx-6">
          <div className="flex flex-col">

            <h3>Recommended Contacts</h3>

            <div className="">
                <img></img>
                <p>Username</p>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
