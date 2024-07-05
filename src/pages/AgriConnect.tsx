import React from "react";
import ForumCard from "../assets/components/ForumCard";

export default function AgriConnect() {
  return (
    <div className="mainConteiner w-full">
      <div className="flex flex-row justify-between px-[5%] items-center py-12 bg-[#fafafa]">
        <div className="main-container flex w-2/3 ">
          <div className="flex flex-col w-full mx-3.5">
            <div className="flex flex-row justify-between items-center h-[50px]">
              <p>10000 questions</p>
              <div> Filter</div>
            </div>

            <div className="flex flex-col h-auto">
              <ForumCard />
            </div>
            <div>Pagination ?</div>
          </div>
        </div>

        <div className="side-container flex flex-col w-1/3 mx">
          <div className="flex flex-col">Tags</div>
          <div className="flex flex-col">Network QAs</div>
        </div>
      </div>
    </div>
  );
}
