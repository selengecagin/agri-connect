import { format, formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";

export default function ForumCard() {

  return (
    <div className="flex flex-row border border-solid border-gray-200 py-4">
      <div className="flex flex-col justify-start px-4 py-3 gap-1 w-[150px] items-end text-sm">
        <p>2 votes</p>
        <p>1 answers</p>
        <p>7 views</p>
      </div>

      <div className="flex flex-col w-full px-4 py-2 justify-center gap-3 ">
        <div className="flex- flex-col ">
          <a className="text-lg text-blue-700 hover:text-blue-900" href="#">
            Question Title
          </a>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="flex flex-row justify-end gap-2 text-sm">
          <a href="#" className="text-blue-700 hover:text-blue-900">
            @username
          </a>
          <p> less than 1 minute ago</p>
        </div>
      </div>
    </div>
  );
}
