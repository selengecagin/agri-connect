import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


    function deleteToken(): void {
      localStorage.removeItem("token");
      dispatch(
        setUser({
          name: "",
          email: "",
          token: "",
          isLoggedIn: false,
          userid: "",
        })
      );
      console.log("User logged out:", userInfo); // Log userInfo for debugging
      navigate("/"); // Move navigate here to ensure it runs after state update
    }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          Menu
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link
              to="/profile-page"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Profile
            </Link>
            <Link
              to="/profile-settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Settings
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              onClick={deleteToken}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
