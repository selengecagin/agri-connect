
import SocialMediaComponent from "./SocialMediaComponent";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="flex flex-col w-full ">
      <section className=" flex flex-col py-4 justify-start lg:flex-row  lg:justify-between lg:items-center lg:gap-[305px] px-[44px] sm:px-32 md:px-48">
        <Link to="/" className="text-[#252b42] text-2xl font-bold ">
          AgriConnect
        </Link>

        <div className="flex flex-row gap-2.5">
          <SocialMediaComponent />
        </div>
      </section>

      <section className="py-4 items-center px-[44px] sm:px-32 md:px-48">
        <div className="flex flex-col justify-between md:flex-row flex-wrap gap-8 md:gap-12 lg:gap-20">
          <div className="flex flex-col items-start gap-5 min-w-0">
            <h5 className="text-[#252b42] text-base font-bold"></h5>

            <Link to="/about-us" className="text-[#737373] text-sm font-bold">
   
              About Us
            </Link>
            <Link to="/privacy-policy" className="text-[#737373] text-sm font-bold">

              Privacy
            </Link>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-5">
              <h5 className="text-[#252b42] font-bold">Get In Touch</h5>
            </div>
            <div className="flex items-center mb-1">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-4  rounded-l-md border border-solid border-[#e6e6e6] bg-[#f9f9f9]"
              />
              <button className="bg-green-800 text-white px-6 py-4 rounded-r-md items-center shrink-0 border border-solid border-green-800">
                Subscribe
              </button>
            </div>

            <p className="text-[#737373] text-xs font-normal">
              Subscribe to our newsletter
            </p>
          </div>
        </div>
      </section>

      <section className="footer-3 bg-[#fafafa] px-[44px] sm:px-32 md:px-48 py-6 flex items-center justify-center sm:justify-start md:w-full">
        <p className="text-[#737373] text-sm w-[210px] sm:w-[400px] text-center sm:text-start">
          &copy; 2024 AgriConnect. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
