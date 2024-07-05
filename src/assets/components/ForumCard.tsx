import React from "react";

export default function ForumCard() {
  return (
    <div className="flex flex-row border border-solid">
      <div className="flex flex-col justify-start px-4 py-2 gap-1 w-[150px] items-end text-sm">
        <p>O votes</p>
        <p>0 answers</p>
        <p>2 views</p>
      </div>

      <div className="flex flex-col w-full px-4 py-2 justify-center gap-3 ">
        <div className="flex- flex-col">
          <p className="text-lg text-blue-400">Quastion Title</p>
          <p>description</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Tags</p>
          <p>TimeStamp</p>
        </div>
      </div>
    </div>
  );
}
