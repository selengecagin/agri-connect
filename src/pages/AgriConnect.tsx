import React from "react";
import ForumCard from "../assets/components/ForumCard";

export default function AgriConnect() {
  return (
    <div className="mainConteiner w-full">
      <div className="flex flex-row justify-between px-[5%] py-12 bg-[#fafafa]">
        <div className="main-container flex w-2/3 ">
          <div className="flex flex-col w-full mx-3.5">
            <div className="flex flex-row justify-between items-center h-[50px] mb-4">
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

        <div className="side-container flex flex-col w-1/3 mx-6 mt-16 gap-8">
          <div className="all-tags-container flex flex-col">
            <h2 className="mb-4">Related Tags</h2>

            <div className="flex flex-col justify-center gap-1">
              <div className="tag-container flex flex-row gap-2">
                <a
                  href="https://example.com"
                  className="px-[0.5rem] bg-gray-200 text-black text-sm lowercase text-center rounded hover:bg-gray-300"
                >
                  crops
                </a>
                <span className="item-multiplier">
                  <span className="item-multiplier-x mr-2 text-sm items-center text-center">
                    x
                  </span>
                  <span className="item-multiplier-count text-sm items-center text-center">
                    123456
                  </span>
                </span>
              </div>
            </div>

            <a
              className="text-blue-700 hover:text-blue-900 text-sm mt-2"
              href="#"
            >
              more related tags
            </a>
          </div>

          <div className="qa-container flex flex-col">
            <h4>
              <a href="#">Network Questions </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
