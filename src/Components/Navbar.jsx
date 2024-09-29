
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const toggle = () => {
    navigate('/');
    if (open) {
      setOpen(!open);
    }
    window.scrollTo(0, 0);
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topandclose = () => {
    setOpen(!open);
    window.scrollTo(0, 0);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }
  console.log("the search is ", SearchQuery);
  return (
    <header>
      <div
        className={`mx-auto p-5 max-md:xs:p-10 md:p-5 md:px-8 lg:px-10 flex items-center justify-between max-lg:gap-[65vw] w-full max-w-screen fixed z-50  xl:px-24 transition-colors duration-300 ${scrolled ? "bg-white text-black shadow-xl" : "bg-transparent text-white"
          }`}
      >
        <h1
          className={`font-Anton text-xl text-[#03A651] md:text-4xl max-md:xs:ml-[-12px] cursor-pointer`}
          onClick={toggle}
        >
          <span className={scrolled ? "text-black" : "text-white"}>CD</span>CS
        </h1>
        <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>

        {/* Desktop Navbar */}
        <div className="">
          <div
            className={`lg:flex lg:flex-row lg:items-center md:w-[470px] lg:w-[810px] h-[76px] ${scrolled ? "bg-white " : "bg-[rgba(206,249,254,0.21)]"
              } rounded-[39px] gap-10 p-5 hidden lg:gap-10 lg:px-10 transition-colors duration-300`}
          >
            <ul className="flex flex-row items-center gap-5 lg:gap-10 font-semibold">
              <li>
                <Link
                  to="/"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/")
                      ? "underline  decoration-2 underline-offset-4 "
                      : " transform hover:-translate-y-2 "
                    } ${scrolled ? "text-black " : "text-white"}`}

                    onClick={()=>window.scrollTo(0,0)}
                >
                  Home
                </Link>
              </li>
              <li>

                <Link
                  to="/mission"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/mission")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } ${scrolled ? "text-black " : "text-white"}`}
                  onClick={()=>window.scrollTo(0,0)}
                >
                  Mission
                </Link>
              </li>
              <li className="">
                <Link
                  to="/services"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/services")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } ${scrolled ? "text-black " : "text-white"}`}
                  onClick={()=>window.scrollTo(0,0)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/our-strategy"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/our-strategy")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } ${scrolled ? "text-black " : "text-white"}`}
                  onClick={()=>window.scrollTo(0,0)}
                >
                  Our Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/outsourcing"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/outsourcing")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } ${scrolled ? "text-black " : "text-white"}`}
                  onClick={()=>window.scrollTo(0,0)}
                >
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/aboutus")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } ${scrolled ? "text-black " : "text-white"}`}
                  onClick={()=>window.scrollTo(0,0)}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className={`text-2xl relative inline-block transition-transform hover:-translate-y-2 cursor-pointer ${showSearch ? "!inset-0 !bg-opacity-100 " : ""}`} onClick={() => setShowSearch(!showSearch)}>
              <FontAwesomeIcon icon={showSearch ? faXmark : faSearch} />
            </div>


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
              <li>
                <Link
                  to="/"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } `}
                  onClick={() => topandclose()}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/mission"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/mission")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } `}
                  onClick={() => topandclose()}
                >
                  Mission
                </Link>
              </li>
              <li className="">
                <Link
                  to="/services"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/services")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } `}
                  onClick={() => topandclose()}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/our-strategy"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/our-strategy")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } `}
                  onClick={() => topandclose()}
                >
                  Our Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/outsourcing"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/outsourcing")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } `}
                  onClick={() => topandclose()}
                >
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={`inline-block relative text-lg  transition-transform duration-300 ${isActive("/aboutus")
                    ? "underline  decoration-2 underline-offset-4 "
                    : " transform hover:-translate-y-2 "
                  } `}
                  onClick={() => topandclose()}
                >
                  About
                </Link>
              </li>
            </ul>
            <div className=" px-2 rounded-xl">
              {/* Search Icon in Mobile Navbar */}
              <div className={`text-2xl relative inline-block transition-transform hover:-translate-y-2 cursor-pointer ${showSearch ? "inset-0 bg-opacity-100 " : ""}`} onClick={() => setShowSearch(!showSearch)}>
              <FontAwesomeIcon icon={showSearch ? faXmark : faSearch} />
            </div>
            </div>
          </div>
        </div>
      </div>


      {showSearch && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 "
          onClick={() => setShowSearch(false)}
        >
          <div
            className=" relative"
            onClick={(e) => e.stopPropagation()}
          >

            <input
              value={SearchQuery}
              onChange={handleChange}
              type="text"
              placeholder="Search..."
              className="w-[70vw] p-3 lg:pl-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6effb4]"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
