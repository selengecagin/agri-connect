import { Link } from "react-router-dom";

import "../../index.css";

export default function Header() {
  return (
    <header className="flex">
      <nav className="flex flex-row h-[400px] items-center px-[10%] py-2.5 bg-slate-800">
        <div className="gap-40 pb-8 ">
          <Link to="/" className="">
            AgriConnect
          </Link>
        </div>

        <div className="flex flex-col  gap-4">
          <Link to={"/"} className="text-secondTextColor text-xl font-normal">
            AgriConnect
          </Link>

          <Link
            to={"/harvest-over-crop"}
            className="text-secondTextColor text-xl font-normal"
          >
            HarvestOverCrop
          </Link>

          <Link
            to={"/bazaar"}
            className="text-secondTextColor text-xl font-normal"
          >
            Bazaar
          </Link>
        </div>

        <div></div>
      </nav>
    </header>
  );
}
