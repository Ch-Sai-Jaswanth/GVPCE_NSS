import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { gvplogo, yearslogo, nsslogo, cfsrlogo } from "../images/index";
import ".././index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-nowrap max-w-full mx-auto">
        <img src={gvplogo} alt="GVP Logo" className="h-48 w-auto" />
        <img src={yearslogo} alt="25 Years Logo" className="h-40 w-auto"/>
        <div className="flex flex-col items-center">
          <h1 className="text-blue-700 text-4xl font-semibold font-serif items-center">
            GAYATRI VIDYA PARISHAD
          </h1>
          <h1 className="text-blue-700 text-4xl font-semibold font-serif items-center">
            COLLEGE OF ENGINEERING(A)
          </h1>
          <p className="text-blue-500 text-lg font-semibold">
            Approved by AICTE, New Delhi and Affiliated to Andhra University
          </p>
          <p className="text-blue-500 text-lg font-semibold">
            Madhurawada, Visakhapatnam - 530048
          </p>
        </div>
        <img src={nsslogo} alt="NSS Logo" className="h-40 w-auto" />
        <img src={cfsrlogo} alt="CFSR Logo" className="h-40 w-auto rounded-lg" />
      </div>
      <nav className="relative bg-[#312762] text-white py-4 px-4">
        <div className="flex justify-between items-center px-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-col md:flex-row justify-end space-x-6 md:flex ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="text-lg font-normal">
            <Link to={"/"} className="hover:underline">
              Home
            </Link>
          </li>
          <li className="text-lg font-normal">
            <Link to={"/about"} className="hover:underline">
              About Us
            </Link>
          </li>
          <li className="text-lg font-normal">
            <Link to={"/gallery"} className="hover:underline">
              Gallery
            </Link>
          </li>
          <li className="text-lg font-normal">
            <Link to={"/events"} className="hover:underline">
              Events
            </Link>
          </li>
          <li className="relative">
      <Link
        to="/"
        className="text-lg font-normal hover:underline"
        onClick={toggleMenu}
      >
        Team
        <svg
          className="w-4 h-4 inline-block ml-1 transition-transform duration-300 transform"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <ul
        className={`absolute hidden bg-white text-gray-800 py-2 w-36 mt-2 rounded-lg shadow-lg z-10 ${
          isOpen ? "block" : ""
        }`}
      >
        <li>
          <Link
            to={"/team/leadership"}
            className="block px-4 py-2 hover:bg-gray-200"
          >
            Leadership
          </Link>
        </li>
        <li>
          <Link to={"/team/members"} className="block px-4 py-2 hover:bg-gray-200">
            Members
          </Link>
        </li>
        <li>
          <Link to={"/team/alumni"} className="block px-4 py-2 hover:bg-gray-200">
            Alumni
          </Link>
        </li>
      </ul>
    </li>
          <li className="text-lg font-normal">
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;