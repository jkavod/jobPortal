import React from "react";

// Function to generate a job template
export default function jobTemplate(job, currency) {
  // JSX structure for displaying job details
  return (
    <>
      <div
        key={job.id}
        className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full lg:py-20"
      >
        <div>
          {/* Container for the job template */}
          <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
            <div className="p-5">
              {/* Job title and salary information */}
              <h4 className="mb-2 font-bold flex ">
                {job.title} up to
                <span className="text-green-800">
                   {currency}
                  {job.salary_max}
                </span>
              </h4>
              {/* Job location */}
              <h2 className="text-sm mb-2 font-bold leading-5 text-gray-900">
                {job.location.display_name}
              </h2>
              {/* Job description with truncation if too long */}
              <p className="text-sm leading-5 text-gray-900 text-justify">
                {job.description.length > 300
                  ? `${job.description.slice(0, 300)}.....`
                  : job.description}
              </p>
              {/* Link to view the full job details */}
              <a
                href={job.redirect_url}
                className="inline-block mt-4 bg-primary text-black py-1 px-5 rounded-full font-bold hover:underline"
              >
                View Job
              </a>
            </div>
            {/* Divider line below the job details */}
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
        </div>
      </div>
    </>
  );
}
