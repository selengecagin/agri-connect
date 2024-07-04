import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col px-[5%] bg-slate-300 mt-5">
        <div className="flex flex-row justify-between">
          <div className="flex-col">
            <h3>Get In Touch</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="flex-col">
            <h3>Company Info</h3>
            <p> About Us</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="copy-right">
          <p className="text-center">Copyright</p>
        </div>
      </div>
    </footer>
  );
}
