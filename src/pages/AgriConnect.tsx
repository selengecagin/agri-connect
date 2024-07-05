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
              <div>
                <div className="flex row rounded-lg border border-gray-300">
                  <button
                    className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg text-xs py-3 px-3 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-r-none border-r-0"
                    type="button"
                  >
                    Newest
                  </button>
                  <button
                    className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-3 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-r-none border-r-0 rounded-l-none"
                    type="button"
                  >
                    Oldest
                  </button>
                  <button
                    className="align-middle select-none font-sans text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none rounded-lg text-xs py-3 px-3 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-l-none"
                    type="button"
                  >
                    Unanswered
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-auto">
              <ForumCard />
            </div>
            <div>Pagination ?</div>
          </div>
        </div>

        <div className="side-container flex flex-col w-1/3 mx">

          <div className="flex flex-col">
          <p>Related Tags</p>
          <div className="flex flex-col">
        <a className="bg-slate-500 rounded-lg inline-block"></a>
          </div>
          </div>
          
          <div className="flex flex-col">

            <h4>Network Questions</h4>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
