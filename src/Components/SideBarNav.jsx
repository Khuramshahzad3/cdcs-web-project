import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SideBarNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <nav
        className={` md:translate-x-0 fixed md:relative w-64 bg-green-700 text-white h-full top-0 left-0 transition-transform duration-300`}
      >
        <ul className="space-y-4 p-4">
          <li className="hover:bg-green-800 p-2">
            <Link to="/debt-collection">Debt Collection</Link>
          </li>
          <li className="hover:bg-green-800 p-2">
            <Link to="/skip-tracing">Skip Tracing</Link>
          </li>
          <li className="hover:bg-green-800 p-2">
            <Link to="/caap">CAAP</Link>
          </li>
          <li className="hover:bg-green-800 p-2">
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </li>
          <li className="hover:bg-green-800 p-2">
            <Link to="/it-solution">IT Solution</Link>
          </li>
          <li className="hover:bg-green-800 p-2">
            <Link to="/career-opportunities">Career Opportunities</Link>
          </li>
          <li className="hover:bg-green-800 p-2">
            <Link to="/feedback">Feedback</Link>
          </li>
          <li className="hover:bg-green-800 p-2">
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="flex-1 p-4">
        {/* Page content goes here */}
      </div>
    </div>
  );
};

export default SideBarNav;
