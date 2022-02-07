import React from "react";
import "../css/navbar.scss";

import { Link } from "react-scroll";

function Navbar() {
  return (
    <div id="navbar">
      <ul className="pages">
        <li>
          <Link
            activeClass="active"
            to="welcome-section"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects-container"
            smooth={true}
            duration={700}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="footer" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
