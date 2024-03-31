import React from "react";
import image from "../Assets/images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../ReduxStore/Userslice/Userslice";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark text-large text-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="" height="40%" width="40%" src={image} alt="..." />
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
            <Link className="nav-link " to="/">
              Home
            </Link>

            {user && (
              <Link class="nav-link" to="/incident">
                File Complaint
              </Link>
            )}

            {user && (
              <Link className="nav-link" to="/CheckStatus">
                View FIR status
              </Link>
            )}
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
                  <Link class="dropdown-item" to="/citizenmanual">
                    Citizen Manual
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/cybercrime">
                    Cyber Crime
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/cybersafety">
                    Safety tips
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/gallery">
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <Link className="nav-link" to="/lawyer">
              Lawyer
            </Link>
            <Link className="nav-link" to="/FAQS">
              FAQ's
            </Link>
            <Link className="nav-link" to="/contactus">
              Contact
            </Link>
            {!user && (
              <Link className="nav-link" to="/login">
                Sign In
              </Link>
            )}
            {user && (
              <button
                className="nav-link "
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/");
                }}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: 0,
                }}
              >
                {" "}
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
