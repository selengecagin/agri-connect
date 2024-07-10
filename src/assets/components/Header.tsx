import { Link, useNavigate } from "react-router-dom";
import "../../index.css";
import SearchBar from "./SearchBar";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useRef, useState } from "react";
import { setUser } from "../../redux/userSlice";

export default function Header() {
  const userInfo = useAppSelector((state) => state.user);
  const [showUserDetails, setShowUserDetails] = useState<boolean>(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const userNameREf = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function deleteToken(): void {
    localStorage.removeItem("token");
    navigate("/");
    dispatch(setUser({ name: "", email: "", token: "" }));
  }

  return (
    <header className="flex">
      <nav className="flex flex-row justify-between px-[5%] h-14 bg-white items-center w-full">
        <div className="text-xl">
          <Link
            to="/harvest-over-crop"
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
          <SearchBar />
        </div>

        <div className="flex gap-2 text-blue-700 hover:text-blue-900 ">
          
          <div className={`flex gap-2 mr-10  ${userInfo.name ? "hidden" : ""}`}>
            <Link to="/signin" className="hidden md:block">
              Login
            </Link>
            <p className="hidden md:block">|</p>
            <Link to="/signup" className="hidden md:block">
              Register
            </Link>
          </div>

          <div
            ref={userNameREf}
            className={`${
              userInfo.name ? "block" : "hidden"
            } mr-10 md:mr-16 relative cursor-pointer`}
            onClick={() => setShowUserDetails((prev) => !prev)}
          >
            <span>{userInfo.name}</span>

            <div
              ref={userMenuRef}
              className={`absolute top-full pt-2 bg-slate-100 px-10 ${
                showUserDetails ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-2 items-start whitespace-nowrap">
                <li className="cursor-pointer">
                  <Link to="/profile-page">Profile</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/profile-settings">Profile Settings</Link>
                </li>
                <li className="cursor-pointer" onClick={deleteToken}>
                  Sign Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
