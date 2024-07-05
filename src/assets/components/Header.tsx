import { Link } from "react-router-dom";

import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    //UI will be updated
    <header className="flex">
      <nav className="flex flex-row justify-between px-[5%] h-14 bg-white items-center w-full">
        <div className="text-xl">
          <Link to="/" className="text-[#252B42] text-2xl font-bold">
            AgriConnect
          </Link>
        </div>

        <div className="flex flex-row  gap-4">
          <Link
            to={"/agri-connect"}
            className="text-[#737373] text-sm font-bold"
          >
            AgriConnect
          </Link>

          <Link
            to={"/harvest-over-crop"}
            className="text-[#737373] text-sm font-bold"
          >
            HarvestOverCrop
          </Link>

          <Link to={"/bazaar"} className="text-[#737373] text-sm font-bold">
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
