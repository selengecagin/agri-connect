import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export default function ForumCard() {
const [creationTime, setCreationTime] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    setCreationTime(now);
  }, []);

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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Tags</p>
          
          {creationTime && (
            <p>{format(creationTime, "yyyy-MM-dd HH:mm:ss")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
