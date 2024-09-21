
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggle = () => {
    navigate('/');
  };


  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="mx-auto p-5 max-md:xs:p-10 md:p-5 md:px-8 lg:px-10 flex items-center justify-between max-lg:gap-[65vw] w-full max-w-screen fixed z-10  xl:px-24">
        <h1
          className="font-Anton text-xl text-[#03A651] md:text-4xl max-md:xs:ml-[-12px] cursor-pointer"
          onClick={toggle}
        >
          <span className="text-white">CD</span>CS
        </h1>
        <div
          className="text-3xl lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>
        {/* Desktop Navbar */}
        <div className="3xl:ml-[42rem] ">
          <div className="lg:flex lg:flex-row lg:items-center md:w-[470px] lg:w-[810px] h-[76px] bg-[rgba(206,249,254,0.21)] rounded-[39px] gap-10 p-5 hidden lg:gap-10 lg:px-10">
            <ul className="flex flex-row text-white items-center gap-5 lg:gap-10 font-semibold">
              <li>
                <Link
                  to="/"
                  className={`text-lg ${isActive("/") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/mission"
                  className={`text-lg ${isActive("/mission") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}
                >
                  Mission
                </Link>
              </li>
              <li className="">
                <Link
                  to="/services"
                  className={`text-lg flex items-center gap-2 ${isActive("/services") ? "w-[87px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3  " : ""}`}
                >
                  Services
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="14"
                    viewBox="0 0 7 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 14L7 7L1.66948e-07 0L0 14Z"
                      fill="#03A651"
                    />
                  </svg> */}
                </Link>
              </li>
              <li>
                <Link
                  to="/our-strategy"
                  className={`text-lg whitespace-nowrap ${isActive("/our-strategy") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}
                >
                  Our Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/outsourcing"
                  className={`text-lg ${isActive("/outsourcing") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}
                >
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={`text-lg ${isActive("/aboutus") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}
                >
                  About
                </Link>
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="30"
              viewBox="0 0 27 30"
              fill="none"
            >
              <path
                d="M10.6342 0.537109C13.5707 0.537109 16.2289 1.80323 18.1533 3.85038C20.0777 5.89753 21.2679 8.72546 21.2679 11.8493C21.2679 14.8482 20.171 17.5738 18.3811 19.5982C18.4136 19.6238 18.4451 19.6521 18.4748 19.6835L26.1304 27.8161C26.4511 28.1553 26.4528 28.7074 26.1335 29.0487C25.8146 29.3901 25.2956 29.3915 24.975 29.0523L17.3194 20.9196C17.2708 20.8681 17.2296 20.8119 17.1955 20.7522C15.388 22.2616 13.1099 23.1618 10.6339 23.1618C7.69739 23.1618 5.03879 21.8957 3.11439 19.8485C1.19021 17.8014 0 14.9732 0 11.8493C0 8.72546 1.19021 5.89753 3.11461 3.85038C5.03901 1.80347 7.69761 0.537109 10.6342 0.537109ZM16.9644 5.11533C15.3444 3.39197 13.1064 2.32602 10.6342 2.32602C8.16198 2.32602 5.92374 3.39197 4.30371 5.11533C2.68369 6.83869 1.68165 9.21946 1.68165 11.8493C1.68165 14.4792 2.68369 16.8602 4.30371 18.5836C5.92352 20.3069 8.16176 21.3729 10.6342 21.3729C13.1064 21.3729 15.3444 20.3069 16.9644 18.5836C18.5844 16.8604 19.5865 14.4794 19.5865 11.8493C19.5865 9.21946 18.5844 6.83869 16.9644 5.11533Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div
          className={` lg:hidden absolute ${open ? "left-0 " : "left-[-140%]"
            } top-20  `}
        >
          <div
            className={` flex flex-col  md:w-[470px] lg:w-[582px] w-[70vw] bg-[#191a19] rounded-tr-lg rounded-br-lg  gap-10 p-5  lg:gap-10 lg:px-10 `}
          >
            <ul className="flex flex-col text-white  gap-10 lg:gap-10 font-semibold ">
              <li >
                <Link to="/" className={`text-lg ${isActive("/") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651]  p-3" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mission" className={`text-lg ${isActive("/mission") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651]  p-3" : ""}`}>
                  Mission
                </Link>
              </li>
              <li className="">
                <Link to="/services" className={`text-lg flex items-center gap-2 ${isActive("/services") ? "w-[87px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651]  p-3 " : ""}`}>
                  Services
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="14"
                    viewBox="0 0 7 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 14L7 7L1.66948e-07 0L0 14Z"
                      fill="#03A651"
                    />
                  </svg> */}
                </Link>
              </li>
              <li>
                <Link to="/our-strategy" className={`text-lg ${isActive("/our-strategy") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}>
                  Our Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/outsourcing"
                  className={`text-lg ${isActive("/outsourcing") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}
                >
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={`text-lg ${isActive("/aboutus") ? "w-[77px] h-[44px] rounded-[25px] bg-gradient-to-r from-[#144F30] to-[#03A651] p-3 " : ""}`}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className=" px-2 rounded-xl">
              <svg
                className=" "
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="30"
                viewBox="0 0 27 30"
                fill="none"
              >
                <path
                  d="M10.6342 0.537109C13.5707 0.537109 16.2289 1.80323 18.1533 3.85038C20.0777 5.89753 21.2679 8.72546 21.2679 11.8493C21.2679 14.8482 20.171 17.5738 18.3811 19.5982C18.4136 19.6238 18.4451 19.6521 18.4748 19.6835L26.1304 27.8161C26.4511 28.1553 26.4528 28.7074 26.1335 29.0487C25.8146 29.3901 25.2956 29.3915 24.975 29.0523L17.3194 20.9196C17.2708 20.8681 17.2296 20.8119 17.1955 20.7522C15.388 22.2616 13.1099 23.1618 10.6339 23.1618C7.69739 23.1618 5.03879 21.8957 3.11439 19.8485C1.19021 17.8014 0 14.9732 0 11.8493C0 8.72546 1.19021 5.89753 3.11461 3.85038C5.03901 1.80347 7.69761 0.537109 10.6342 0.537109ZM16.9644 5.11533C15.3444 3.39197 13.1064 2.32602 10.6342 2.32602C8.16198 2.32602 5.92374 3.39197 4.30371 5.11533C2.68369 6.83869 1.68165 9.21946 1.68165 11.8493C1.68165 14.4792 2.68369 16.8602 4.30371 18.5836C5.92352 20.3069 8.16176 21.3729 10.6342 21.3729C13.1064 21.3729 15.3444 20.3069 16.9644 18.5836C18.5844 16.8604 19.5865 14.4794 19.5865 11.8493C19.5865 9.21946 18.5844 6.83869 16.9644 5.11533Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
