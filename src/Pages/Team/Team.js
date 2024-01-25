import React from "react";
import {
  Audrey,
  Austin,
  Github,
  Gmail,
  JohnPaul,
  Joseph,
  Linkedin,
  Nazifi,
  Precious,
  X,
} from "../../Assets";
import { Footer } from "../../UI";
import { StaticScrollUpButton } from "../../Constants";
import "../../UI/Style.css";

// Team component to display information about team members
export default function Team() {
  return (
    <div>
      {/* Team Members */}
      <div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        id="team"
      >
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            {/* Group Label */}
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Group 3
            </p>
          </div>
          {/* Heading */}
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Team Members
          </h2>
          {/* Description */}
          <p className="text-base text-gray-700 md:text-lg">
            Kindly hover on the pictures to see more about each team member
            including their links
          </p>
        </div>
        {/* Grid for Team Members */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Joseph */}
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              {/* Image */}
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-96"
                src={Joseph}
                alt="Ubongabasi Joseph"
              />
              {/* Information Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ubongabasi Joseph
                </p>
                <p className="mb-4 text-xs text-gray-100 font-bold">
                  CSC 200L - S20023980517
                </p>
                <p className="mb-4 text-xs tracking-wide text-white">
                  Full stack software developer with a talent for identifying
                  emerging trends and opportunities in technology and
                  innovation.
                </p>
                {/* Social Media Links */}
                <div className="flex items-center justify-center space-x-10 bg-secondary p-2 rounded-full shadow-2xl">
                  {/* Github */}
                  <a
                    href="https://github.com/jkavod"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Github} alt="Github" className="img" />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://linkedin.com/in/jkavod"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Linkedin} alt="Linkedin" className="img" />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://Twitter.com/jkavod_"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={X} alt="X" className="img" />
                  </a>
                  {/* Gmail */}
                  <a
                    href="mailto:Ubongjosevv@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Gmail} alt="Gmail" className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Audrey */}
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-96"
                src={Audrey}
                alt="Patience Jerimaiah"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Patience Jerimaiah
                </p>
                <p className="mb-4 text-xs text-gray-100 font-bold">
                  CSC 200L - S10023060898
                </p>
                <p className="mb-4 text-xs tracking-wide text-white">
                  Software developer aiming to understand technology and make a
                  difference in the community, currently focused on frontend
                  development and open to learning.
                </p>
                {/* Social Media Links */}
                <div className="flex items-center justify-center space-x-10 bg-secondary p-2 rounded-full shadow-2xl">
                  {/* Github */}
                  <a
                    href="https://github.com/AUDREYPERCY"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Github} alt="Github" className="img" />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/audrey-percy"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Linkedin} alt="Linkedin" className="img" />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://x.com/audreypercy"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={X} alt="Twitter" className="img" />
                  </a>
                  {/* Gmail */}
                  <a
                    href="mailto:Percysmith056@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Gmail} alt="Gmail" className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Precious */}
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-96"
                src={Precious}
                alt="Okpomini Precious"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Okpomini Precious
                </p>
                <p className="mb-4 text-xs text-gray-100 font-bold">
                  CSC 200L - S10022061105
                </p>
                <p className="mb-4 text-xs tracking-wide text-white">
                  Full stack software developer with a talent for identifying
                  emerging trends and opportunities in technology and
                  innovation.
                </p>
                {/* Social Media Links */}
                <div className="flex items-center justify-center space-x-10 bg-secondary p-2 rounded-full shadow-2xl">
                  {/* Github */}
                  <a
                    href="https://github.com/okpominiprecious06"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Github} alt="Github" className="img" />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Linkedin} alt="Linkedin" className="img" />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://x.com/certifiedwrld_?s=21&t=d6gSqxNtkpHAWucNzo6Kbw"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={X} alt="Twitter" className="img" />
                  </a>
                  {/* Gmail */}
                  <a
                    href="mailto:preciousiruo59@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Gmail} alt="Gmail" className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Austin */}
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-96"
                src={Austin}
                alt="Emmanuel Icon"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Emmanuel Icon
                </p>
                <p className="mb-4 text-xs text-gray-100 font-bold">
                  CSC 200L - S10022010804
                </p>
                <p className="mb-4 text-xs tracking-wide text-white">
                  Software developer aiming to understand technology and make a
                  difference in the community, currently focused on frontend
                  development and open to learning.
                </p>
                {/* Social Media Links */}
                <div className="flex items-center justify-center space-x-10 bg-secondary p-2 rounded-full shadow-2xl">
                  {/* Github */}
                  <a
                    href="https://github.com/Icon3610"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Github} alt="Github" className="img" />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Linkedin} alt="Linkedin" className="img" />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://x.com/Wondrous_Man?t=I5oZta-wDf4DRezrQ6Z8pw&s=09"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={X} alt="Twitter" className="img" />
                  </a>
                  {/* Gmail */}
                  <a
                    href="mailto:Icondeloved4@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Gmail} alt="Gmail" className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* John Paul */}
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-96"
                src={JohnPaul}
                alt="John Paul"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  John Paul
                </p>
                <p className="mb-4 text-xs text-gray-100 font-bold">
                  CSC 200L - Nill
                </p>
                <p className="mb-4 text-xs tracking-wide text-white">
                  Full stack software developer with a talent for identifying
                  emerging trends and opportunities in technology and
                  innovation.
                </p>
                {/* Social Media Links */}
                <div className="flex items-center justify-center space-x-10 bg-secondary p-2 rounded-full shadow-2xl">
                  {/* Github */}
                  <a
                    href="https://github.com/jp_wurld"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Github} alt="Github" className="img" />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Linkedin} alt="Linkedin" className="img" />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://Twitter.com/jp_wurld"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={X} alt="Twitter" className="img" />
                  </a>
                  {/* Gmail */}
                  <a
                    href="mailto:itsmicheal84@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Gmail} alt="Gmail" className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Nazifi */}
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-96"
                src={Nazifi}
                alt="Nazifi Ibrahim"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Nazifi Ibrahim
                </p>
                <p className="mb-4 text-xs text-gray-100 font-bold">
                  CSC 200L - S20022030605
                </p>
                <p className="mb-4 text-xs tracking-wide text-white">
                  Software developer aiming to understand technology and make a
                  difference in the community, currently focused on frontend
                  development and open to learning.
                </p>
                {/* Social Media Links */}
                <div className="flex items-center justify-center space-x-10 bg-secondary p-2 rounded-full shadow-2xl">
                  {/* Github */}
                  <a
                    href="https://github.com/Ibrahimnazifi71"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Github} alt="Github" className="img" />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/nazifi-ibrahim"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Linkedin} alt="Linkedin" className="img" />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://x.com/narzeeyf_"
                    target="_blank"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={X} alt="Twitter" className="img" />
                  </a>
                  {/* Gmail */}
                  <a
                    href="mailto:Ibrahimnazifi71@gmail.com"
                    className="text-white transition-colors duration-300 hover:text-white"
                  >
                    <img src={Gmail} alt="Gmail" className="img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer and Scroll Up Button */}
        <div className="mt-20">
          <Footer />
          <StaticScrollUpButton />
        </div>
      </div>
    </div>
  );
}
