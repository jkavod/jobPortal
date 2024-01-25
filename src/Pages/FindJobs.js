import React, { useState } from "react";
import { Nav, Footer } from "../UI";
import { Loader } from "../Assets";
import { Currency, Templates } from "../Components";
import { apiId, apiKey } from "../Config/config";
import "../UI/Style.css"
import { StaticScrollUpButton } from "../Constants";

const FindJobs = () => {
  // State variables
  const [search, setSearch] = useState("tech"); // Set default search term to "tech"
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("us");
  const [currencySymbol, setCurrencySymbol] = useState(Currency("us"));

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    startLoading();

    try {
      // Fetch jobs from the API based on country, search, and location
      const response = await fetch(
        `https://api.adzuna.com/v1/api/jobs/${countryCode}/search/1?app_id=${apiId}&app_key=${apiKey}&results_per_page=10&what=${search}&where=${location}`
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      // Parse the response data and update state
      const data = await response.json();
      setJobs(data.results || []);
    } catch (error) {
      console.error("Error fetching job data:", error);
    } finally {
      stopLoading();
    }
  };

  // Function to start loading state
  const startLoading = () => {
    setLoading(true);
  };

  // Function to stop loading state
  const stopLoading = () => {
    setLoading(false);
  };

  // Function to handle country change
  const handleCountryChange = (newCountryCode) => {
    setCountryCode(newCountryCode);
    setCurrencySymbol(Currency(newCountryCode));
  };

  // JSX for rendering the component
  return (
    <main className="bg-secondary flex flex-col justify-between items-center h-[100vh] overflow-y-auto">
      <div className="w-full">
        <Nav />
      </div>

      {/* FindJobs Body */}
      <div className="px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-full lg:py-20">
        <div className="max-w-full sm:text-center sm:mx-auto">
          <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto max-w-full sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
            <div className="flex flex-col items-center max-w-full md:px-8">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-full md:mb-12">
                <h2 className="max-w-full font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  Search for Tech Jobs
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-3">
                  <div className="flex justify-center items-center w-full p-3 md:flex-row border border-black rounded-full">
                    {/* Job Title */}
                    <div className="flex justify-center items-center">
                      <div className="flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-600"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                        </svg>
                      </div>
                      <input
                        placeholder="Job Title"
                        required=""
                        type="text"
                        className="flex-grow w-full px-4 transition duration-200 bg-secondary rounded appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>

                    {/* Location */}
                    <div className="flex justify-center items-center">
                      <div className="flex items-center justify-center px-4 border-r">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-gray-600"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <path
                            d="M28.7447 14.696C28.7447 20.8898 17.5291 31.5194 17.5291 31.5194C17.5291 31.5194 6.31348 20.8898 6.31348 14.696C6.31348 11.7214 7.49512 8.86867 9.59846 6.76533C11.7018 4.66199 14.5545 3.48035 17.5291 3.48035C20.5037 3.48035 23.3564 4.66199 25.4598 6.76533C27.5631 8.86867 28.7447 11.7214 28.7447 14.696V14.696Z"
                            stroke="#141414"
                            strokeWidth="3.1544"
                          />
                          <path
                            d="M17.5294 16.098C17.9012 16.098 18.2578 15.9503 18.5207 15.6874C18.7836 15.4244 18.9313 15.0678 18.9313 14.696C18.9313 14.3242 18.7836 13.9676 18.5207 13.7047C18.2578 13.4418 17.9012 13.2941 17.5294 13.2941C17.1576 13.2941 16.801 13.4418 16.5381 13.7047C16.2751 13.9676 16.1274 14.3242 16.1274 14.696C16.1274 15.0678 16.2751 15.4244 16.5381 15.6874C16.801 15.9503 17.1576 16.098 17.5294 16.098Z"
                            fill="white"
                            stroke="#141414"
                            strokeWidth="3.1544"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <select
                        value={countryCode}
                        onChange={(e) => handleCountryChange(e.target.value)}
                        className="flex-grow justify-center items-center w-full transition duration-200 bg-secondary focus:outline-none"
                      >
                        <option
                          value="e"
                          className="text-gray-600 selection:text-gray-300"
                        >
                          Select A Country
                        </option>
                        <option
                          value="us"
                          className="text-gray-600 selection:text-gray-300"
                        >
                          United States
                        </option>
                        <option
                          value="gb"
                          className="text-gray-600 selection:text-gray-300"
                        >
                          United Kingdom
                        </option>
                        <option
                          value="au"
                          className="text-gray-600 selection:text-gray-300"
                        >
                          Australia
                        </option>
                        <option
                          value="ca"
                          className="text-gray-600 selection:text-gray-300"
                        >
                          Canada
                        </option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex p-3 items-center justify-center w-full px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-black hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Loading indicator */}
              {loading && (
                <div className="flex justify-center items-center w-full">
                  <img src={Loader} alt="Loading" />
                </div>
              )}

              {/* Job results */}
              <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => Templates(job, currencySymbol))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full">
        <Footer />
        <StaticScrollUpButton />
      </div>
    </main>
  );
};

export default FindJobs;
