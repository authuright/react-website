import React from "react";

import "./navbar.css";

const NavBar = () => {
  return (
    <div className="container mx-auto navbar__site_menu">
      <nav className="flex justify-between items-center py-8">
        <div className="logo-website">
          <h4 className="text-2xl text-[#9531CE] font-bold">
            <a href="http://">CYBERCAFE</a>
          </h4>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="">
          <ul className="flex items-center gap-[4vw] text-[#000000]">
            <li className="text-[#000000] hover:text-[#9531CE]">
              <a href="/course">Course</a>
            </li>
            <li className="text-[#000000] hover:text-[#9531CE]">
              <a href="http://">Forum</a>
            </li>
            <li className="text-[#000000] hover:text-[#9531CE]">
              <a href="http://">Blog</a>
            </li>
            <li className="text-[#000000] hover:text-[#9531CE]">
              <a href="http://">More</a>
            </li>
            <li className="text-[#000000] hover:text-[#9531CE]">
              <a href="/login">Login</a>
            </li>
            <li>
              <button className="text-white px-5 py-2 rounded-full bg-[#9531CE]">
                Register
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
