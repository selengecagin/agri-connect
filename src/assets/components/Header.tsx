import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex">
      <nav className="flex h-[400px] items-center sm:gap-6 sm:flex sm:flex-row sm:justify-between sm:items-center sm:h-auto px-[10%] py-2.5 bg-white ">
        <div className="gap-40 pb-8 sm:flex sm:pb-0">
          <Link to="/" className="">
            AgriConnect
          </Link>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row gap-4">
          <Link
            to={"/"}
            className="text-secondTextColor text-xl font-normal sm:text-sm sm:font-bold"
          >
            AgriConnect
          </Link>

          <Link
            to={"/harvest-over-crop"}
            className="text-secondTextColor text-xl font-normal sm:text-sm sm:font-bold"
          >
            HarvestOverCrop
          </Link>

          <Link
            to={"/bazaar"}
            className="text-secondTextColor text-xl font-normal sm:text-sm sm:font-bold"
          >
            Bazaar
          </Link>
        </div>

        <div></div>
      </nav>
    </header>
  );
}
