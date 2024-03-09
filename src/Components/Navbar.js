import React from "react";
import image from "../Assets/images/Heading-removebg-preview.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark text-large text-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="" height="50%" width="50%" src={image} alt="..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <li className="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Register a Complaint
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/PersonalData">
                    Register & Track
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/Incident">
                    Report Anonymously
                  </Link>
                </li>
              </ul>
            </li>
            <Link className="nav-link" to="/CheckStatus">
              View FIR status
            </Link>
            <li className="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="">
                    Citizen Manual
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="">
                    Cyber Crime
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/cybersafety">
                    Safety tips
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="">
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <Link className="nav-link" to="/lawyer">
              Lawyer
            </Link>
            <Link className="nav-link" to="/contactus">
              Contact
            </Link>
            <Link className="nav-link" to="/login">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
