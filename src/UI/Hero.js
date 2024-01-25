import React from "react";
import { HeroImage } from "../../src/Assets";
import "../UI/Style.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="px-4 py-5 mx-auto md:px-24 lg:px-6">
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-9xl md:px-24 lg:px-0 lg:py-20 mb-20">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-aclonica text-4xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none uppercase">
                  Easy way to get your dream job *
                </h2>
                <p className="text-base text-black md:text-lg">
                  Let’s try our way to get your dream job, with offers from
                  different countries and job positions, create opportunities
                  for a better life.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <Link
                  to={"/findjobs"}
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md md:w-auto md:mr-4 md:mb-0 bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                >
                  <span className="mr-3">Find Jobs</span>
                </Link>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover w-full lg:h-96 rounded h-96"
                src={HeroImage}
                alt="Find Job"
              />
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <a
          href="/"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-black duration-300 transform border border-black rounded-full hover:text-primary hover:border-primary hover:shadow mb-10 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
          </svg>
        </a>

        {/* Sponsor */}
        <div className="w-full flex justify-end mb-10">
          <a
            href="#"
            className="text-[10px] font-bold bg-primary py-2 px-5 rounded-full sponsored"
          >
            Sponsored by<span className="text-xl"> Estam University</span>
          </a>
        </div>
      </section>
    </main>
  );
}
