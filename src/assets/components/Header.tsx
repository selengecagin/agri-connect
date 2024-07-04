import { Link } from "react-router-dom";

import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex">
      <nav className="flex flex-row bg-slate-500">
        <div className="">
          <Link to="/" className="">
            AgriConnect
          </Link>
        </div>

        <div className="flex flex-row  gap-4">
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

        <div className="flex gap-2 text-primaryColor">
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
