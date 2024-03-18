import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../ReduxStore/Userslice/Userslice";
import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div id="wrapper">
        <ul
          className="navbar-nav bg-gradient-info sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/admin"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
          </a>
          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="/admin">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </a>
          </li>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="/complaintlist">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Complaints</span>
            </a>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="/suspectlist">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Suspect</span>
            </a>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="/evidencelist">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Evidence</span>
            </a>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="/admin">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Lawyers</span>
            </a>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <a className="nav-link" href="/registereduser">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Registered Users</span>
            </a>
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
