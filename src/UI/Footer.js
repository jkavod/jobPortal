import React, { useState, useEffect } from "react";

// Footer component displaying copyright information and a link to the source code
export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Function to update the current year every second
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    // Set up an interval to update the year every second
    const intervalId = setInterval(updateYear, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="px-4 py-5 mx-auto md:px-24 lg:px-6 flex flex-col gap-10">
      <div className="lg:flex sm:grid grid-cols-1 justify-between items-center">
        <div className="w-full lg:text-start text-center">
          {/* Display copyright information with the current year */}
          © Copyright {currentYear}{" "}
          <span className="text-primary font-bold sm:text-center">Job Portal</span> All Rights Reserved
        </div>
        <div className="w-full lg:text-end text-center">
          {/* Display a link to the source code */}
          Link to our <a href="/" className="text-primary font-bold">Source Code</a>
        </div>
      </div>
    </footer>
  );
}
