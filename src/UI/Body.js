import React, { useState } from "react";
import { Airbnb, Google, Microsoft, Slack } from "../Assets";

// Item component for FAQ sections
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium capitalize">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-black transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-black">{children}</p>
        </div>
      )}
    </div>
  );
};



// Body component containing main content
export default function Body() {
  return (
    <main>
      {/* Companies */}
      <section>
        <div className="mb-16">
          <div className="bg-white" id="companies-h2">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans lg:text-3xl font-bold leading-none tracking-tight text-black text-[20px] text-center md:mx-auto">
                  Join Most Well Known{" "}
                  <span className="text-primary">Companies</span> Around The World
                </h2>
              </div>
              <div
                className="flex justify-center gap-20 items-center"
                id="companies"
              >
                <div>
                  <img src={Slack} className="h-6 w-32" alt="Slack" />
                </div>
                <div>
                  <img src={Microsoft} className="h-6 w-32" alt="Microsoft" />
                </div>
                <div>
                  <img src={Google} className="h-6 w-32" alt="Google" />
                </div>
                <div>
                  <img src={Airbnb} className="h-6 w-32" alt="Airbnb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-primary" id="features">
        {/* Display features with icons */}
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex flex-col gap-10">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">Features</span>
              </span>
            </h2>
            <p className="text-base text-white md:text-lg max-w-xl">
              Our web app displays tech-related job listings and allows users to
              search or filter jobs based on role, location etc, below are the
              features
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-gray-800"
            >
              <circle
                fill="currentColor"
                fillOpacity="0.4"
                cx="44"
                cy="44"
                r="15.5"
              ></circle>
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              ></circle>
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              ></circle>
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              ></circle>
              <circle
                fillOpacity="0.1"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              ></circle>
            </svg>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="px-10 py-20 text-center transition duration-300 transform bg-primary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-black">Job Listings Display</p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-primary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-black">Filtering Jobs by location</p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-primary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-black">Filtering Jobs by type</p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-primary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-black">Filtering Jobs by mode</p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-primary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-black">
                Allow users to click on a job listing to view more details about
                the job
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-primary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-black">No login required</p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-primary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-black">
                Provide a search bar where users can search for jobs based on
                keywords or titles
              </p>
            </div>
            <div className="px-10 py-20 text-center transition duration-300 transform bg-tertiary rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
              <p className="font-semibold text-gray-200 opacity-50">
                Resume Fix <br />
                <span>Coming Soon...</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-7xl md:px-24 lg:px-8 lg:py-20 ">
        {/* Display frequently asked questions in an accordion format */}
        <div className="max-w-xl sm:mx-auto lg:max-w-7xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-7xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto">
              FAQS
            </h2>
            <p className="text-base text-black md:text-lg ">
              Already answered questions about our product
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            <Item title="Do i have to create an account?">
              No!, you do not need to create an account with us
            </Item>
            <Item title="can i search jobs by location?">
              Yes, just any location of your choice
            </Item>
            <Item title="can your webapp build a resume for me?">
              No!, we just started, later in the future, we will add resume
              build
            </Item>
            <Item title="what kind of jobs are available?">
              for now we are strictly implementing tech jobs only
            </Item>
            <Item title="how many jobs can i search for?">
              for as much as you can, you are not restricted to numbers
            </Item>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="">
        {/* Display a contact form */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Never Want to Miss Any Job News?
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                    Reach out to us about complaints, further informations or
                    questions about our upcoming features or as about our
                  </p>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      Sign up for updates
                    </h3>
                    <form>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="firstName"
                          className="inline-block mb-1 font-medium"
                        >
                          First name
                        </label>
                        <input
                          placeholder="John"
                          required=""
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
                          id="firstName"
                          name="firstName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="lastName"
                          className="inline-block mb-1 font-medium"
                        >
                          Last name
                        </label>
                        <input
                          placeholder="Doe"
                          required=""
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
                          id="lastName"
                          name="lastName"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          E-mail
                        </label>
                        <input
                          placeholder="john.doe@example.org"
                          required=""
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-primary focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                        />
                      </div>
                      <div className="mt-4 mb-2 sm:mb-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                          Subscribe
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 sm:text-sm text-center">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
