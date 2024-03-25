import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../ReduxStore/Userslice/Userslice";
import { useSelector, useDispatch } from "react-redux";
import image from "../Assets/images/logo.png";
const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div id="wrapper" class="d-flex">
        <ul
          className="navbar-nav bg-dark sidebar sidebar-dark accordion navbar-sticky"
          id="accordionSidebar"
        >
          <div className="sidebar-brand-icon my-4">
            <i className="fas fa-laugh-wink">
              <img src={image} width="100%" height="100%"></img>
            </i>
          </div>

          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <Link className="nav-link" to="/admin">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <Link className="nav-link" to="/complaintlist">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Complaints</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <Link className="nav-link" to="/suspectlist">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Suspect</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <Link className="nav-link" to="/evidencelist">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Evidence</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <Link className="nav-link" to="/admin">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Lawyers</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <Link className="nav-link" to="/registereduser">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Registered Users</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>
              <button
                class="btn"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: 0,
                  marginLeft: "7px",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  dispatch(logoutUser());
                  navigate("/");
                }}
              >
                Logout
              </button>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
