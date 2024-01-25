import React, { useState } from "react";
import { AboutHeroImage, DownArrow } from "../Assets";
import { Link } from "react-router-dom";
import { TeamMembers } from "./Team";

// About component displaying information about the team and the project
function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <img
          src={AboutHeroImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt="About Hero Image"
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          {/* Header Section */}
          <header className="px-4 py-5 mx-auto md:px-24 lg:px-6">
            {/* Desktop Navigation */}
            <div className="flex flex-col gap-1">
              <nav className="lg:flex justify-between hidden items-center">
                {/* Logo */}
                <div>
                  <a href="/" className="text-white font-bold font-lato">
                    Job<span className="text-primary">Portal</span>
                  </a>
                </div>

                {/* Mid Menu Buttons */}
                <ul className="font-bold flex gap-10 items-center font-lato text-white">
                  <li className="underln underlnn">
                    <a href="/">Home</a>
                  </li>
                  <li className="underln underlnn">
                    <a href="/#features">Features</a>
                  </li>
                  <li className="underln underlnn">
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
              <div className="w-full h-[1px] bg-primary lg:flex rounded-sm hidden"></div>
            </div>

            {/* Mobile Navigation */}
            <div className="ml-auto lg:hidden">
              {/* Logo and Menu Button */}
              <div className="flex justify-between items-center">
                <div>
                  <a href="/" className="text-white font-bold font-lato">
                    Job<span className="text-primary">Portal</span>
                  </a>
                </div>

                {/* Open Menu Button */}
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                  onClick={() => setIsMenuOpen(true)}
                >
                  {/* Hamburger Menu Icon */}
                  <div className="flex flex-col gap-1 w-5">
                    <div className="bg-white h-[1px] rounded-md w-3 ml-2"></div>
                    <div className="bg-white h-[1px] rounded-md w-4 ml-1"></div>
                    <div className="bg-white h-[1px] rounded-md w-5"></div>
                  </div>
                </button>
              </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  {/* Mobile Menu Content */}
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h1 className="text-black font-bold font-lato">
                          Job<span className="text-primary">Portal</span>
                        </h1>
                      </div>
                      <div>
                        {/* Close Menu Button */}
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {/* Close Icon */}
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
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
                            href="/"
                            aria-label="Features"
                            title="Features"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Features
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="About Us"
                            title="About Us"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Find Jobs"
                            title="Find Jobs"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Find Jobs
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Hero Message Section */}
          <div className="px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-80">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-[65%] max-w-7xl mb-12 xl:mb-0 xl:pr-16">
                <div className="flex justify-between items-center gap-3">
                  <div className="w-10 h-[1px] rounded-sm bg-primary"></div>
                  <h2 className="max-w-7xl mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Group 3 - CSC 207 || Web Development 1
                  </h2>
                </div>
                <p className="max-w-xl mb-4 text-base text-primary md:text-lg font-bold">
                  Course Lecturer: Mr. Tony Cletus
                </p>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                  Our Web-app displays tech-related job listings and allows
                  users to search or filter jobs based on role, location, and
                  more.
                </p>
                <a
                  href="#team"
                  aria-label="Scroll Down"
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white justify-between gap-3"
                >
                  scroll down
                  <img src={DownArrow} alt="Down Arrow" className="h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamMembers />
    </>
  );
}

export default About;
