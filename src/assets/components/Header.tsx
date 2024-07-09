import {Link} from "react-router-dom";

import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";


export default function Header() {
  return (
    <header className="flex">

      <nav className="flex flex-row justify-between px-[5%] h-14 bg-white items-center w-full">

        <div className="text-xl">
          <Link
            to="/"
            className="text-blue-700 hover:text-blue-900 text-2xl font-bold"
          >
            AgriConnect
          </Link>
        </div>

        <div className="flex flex-row gap-8">
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
        </div>


        <div>

          <SearchBar/>
        </div>

        <div className="flex gap-2 text-blue-700 hover:text-blue-900 ">
          <Link to="/profile">
            <FontAwesomeIcon icon={faUser} style={{ color: "#1d4ed8" }} />
          </Link>
          <Link to="/signin" className="text-blue-700 hover:text-blue-900">
            Login
          </Link>
          <p className="text-blue-700">|</p>
          <Link to="/signup" className="text-blue-700 hover:text-blue-900">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
