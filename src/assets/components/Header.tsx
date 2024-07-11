import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../index.css";
import SearchBar from "./SearchBar";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setUser } from "../../redux/userSlice";

export default function Header() {
  const userInfo = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function deleteToken(): void {
    localStorage.removeItem("token");
    dispatch(setUser({ name: "", email: "", token: "", isLoggedIn: false ,userid:""}));
    console.log("User logged out:", userInfo); // Log userInfo for debugging
    navigate("/"); // Move navigate here to ensure it runs after state update
  }


  return (
    <header className="flex">
      <nav className="flex flex-row justify-between px-[5%] h-14 bg-white items-center w-full">

        <div className="text-xl">
          <Link
            to="/harvest-over-crop"
            className=" text-green-800 hover:text-green-900 text-4xl font-bold"
          >
            AgriConnect
          </Link>
        </div>

        <div className="flex flex-row gap-8">
          <NavLink
            to="/agri-connect"
            className={({ isActive }) =>
              isActive
                ? "text-[#4a4a4a] text-sm font-bold"
                : "text-[#737373] text-sm font-bold"
            }
          >
            AgriConnect
          </NavLink>

          <NavLink
            to="/harvest-over-crop"
            className={({ isActive }) =>
              isActive
                ? "text-[#4a4a4a] text-sm font-bold"
                : "text-[#737373] text-sm font-bold"
            }
          >
            HarvestOverCrop
          </NavLink>
        </div>


        <div>
          <SearchBar />
        </div>


        <div className="flex items-center">
          {userInfo.isLoggedIn ? (
            <div className="flex items-center justify-center gap-2.5">
              
              <div>
                <span>{userInfo.name}</span>
              </div>
<button>



</button>
              <div className="flex mt-20">
                <ul className="flex flex-col gap-2 items-start">
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
          ) : (
            <div className="flex gap-2 text-primaryColor">
              <Link to="/signin" className="text-primaryColor">
                Login
              </Link>
              <p className="text-primaryColor">/</p>
              <Link to="/signup" className="text-primaryColor">
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
