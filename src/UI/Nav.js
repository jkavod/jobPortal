import React, { useState } from "react";
import "../UI/Style.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Nav - Section */}
      <header className="px-4 py-5 mx-auto md:px-24 lg:px-6 w-full">
        {/* Desktop Nav */}
        <div className="flex flex-col gap-1">
          <nav className="lg:flex justify-between hidden items-center">
            {/* Logo */}
            <div>
              <h1 className="text-black font-bold font-lato">
                Job<span className="text-primary">Portal</span>
              </h1>
            </div>

            {/* Mid Menu Buttons */}
            <ul className="font-bold flex gap-10 items-center font-lato">
              <li className="underln">
                <a href="/">Home</a>
              </li>
              <li className="underln">
                <a href="/#features">Features</a>
              </li>
              <li className="underln">
                <Link to={"/about"}>About Us</Link>
              </li>
            </ul>

            {/* Last Menu Button */}
            <ul>
              <li className="bg-black text-white px-5 py-1 rounded-full font-bold font-lato">
                <Link to={"/findjobs"}>Find Jobs</Link>
              </li>
            </ul>
          </nav>
          <div className="w-full h-[1px] bg-black lg:flex rounded-sm hidden"></div>
        </div>

        {/* Mobile Nav */}
        <div className="ml-auto lg:hidden">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-black font-bold font-lato">
                Job<span className="text-primary">Portal</span>
              </h1>
            </div>

            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              {/* Open Hamburger Menu */}
              <div className="flex flex-col gap-1 w-5">
                <div className="bg-black h-[1px] rounded-md w-3 ml-2"></div>
                <div className="bg-black h-[1px] rounded-md w-4 ml-1"></div>
                <div className="bg-black h-[1px] rounded-md w-5"></div>
              </div>
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-black font-bold font-lato">
                      Job<span className="text-primary">Portal</span>
                    </h1>
                  </div>
                  <div>
                    {/* Close X Buttons */}
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Menu Buttons */}
                <nav>
                  <ul className="space-y-4 font-lato">
                    <li>
                      <a
                        href="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#features"
                        aria-label="Features"
                        title="Features"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <Link
                        to={"/about"}
                        aria-label="About Us"
                        title="About Us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/findjobs"}
                        aria-label="Find Jobs"
                        title="Find Jobs"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Find Jobs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
