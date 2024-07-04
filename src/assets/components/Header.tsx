import { Link } from "react-router-dom";

import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    //UI will be updated
    <header className="flex">
      <nav className="flex flex-row justify-between px-[5%] h-14 bg-slate-300 items-center w-full">
        <div className="text-xl">
          <Link to="/" className="">
            AgriConnect
          </Link>
        </div>

        <div className="flex flex-row  gap-4">
          <Link to={"/"} className="text-secondTextColor text-lg font-normal">
            AgriConnect
          </Link>

          <Link
            to={"/harvest-over-crop"}
            className="text-secondTextColor text-lg font-normal"
          >
            HarvestOverCrop
          </Link>

          <Link
            to={"/bazaar"}
            className="text-secondTextColor text-lg font-normal"
          >
            Bazaar
          </Link>
        </div>

        <div className="flex gap-2 text-primaryColor ">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} style={{ color: "primaryColor" }} />
          </Link>
          <Link to="/signin" className="text-primaryColor">
            Login
          </Link>
          <p className="text-primaryColor">/</p>
          <Link to="/signup" className="text-primaryColor">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
